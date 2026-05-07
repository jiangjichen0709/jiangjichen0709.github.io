import { S } from './src/state.js'
import { onAuthStateChange, getSession } from './src/services/auth.js'
import { loadUserProfile, updateUserBar } from './src/services/profile.js'
import { initMusic, playHomeBGM } from './src/ui/music.js'
import { initResponsive } from './src/ui/responsive.js'
import { initEvents } from './src/ui/events.js'
import { navTo } from './src/ui/nav.js'
import { initBattleModule } from './src/game/battle.js'
import { loadHuntActionFromStorage } from './src/ui/hunt.js'

async function initAuth() {
  const session = await getSession()
  S.currentUser = session ? session.user : null
  if (S.currentUser) await loadUserProfile()
  updateUserBar()
  const startPage = S.currentUser ? 'page-home' : 'page-auth'
  const pg = document.getElementById(startPage)
  pg.classList.add('active')
  requestAnimationFrame(() => requestAnimationFrame(() => pg.classList.add('visible')))
  S.currentPage = startPage
  document.body.classList.toggle('page-other', startPage !== 'page-home')
  if (S.currentUser) playHomeBGM()
}

onAuthStateChange((event, session) => {
  S.currentUser = session ? session.user : null
  if (event === 'SIGNED_IN') {
    loadUserProfile().then(() => {
      updateUserBar()
      if (S.currentPage === 'page-auth') navTo('page-home')
    })
  }
  if (event === 'SIGNED_OUT') {
    S.userProfile = null
    updateUserBar()
    navTo('page-auth', true)
  }
})

window.addEventListener('DOMContentLoaded', () => {
  const hunt = loadHuntActionFromStorage()
  if (hunt) S.HUNT = hunt
  initBattleModule()
  initResponsive()
  initEvents()
  initAuth()
  initMusic()
})
