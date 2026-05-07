/* bundle.js (generated) */
(function(){

/* ---- state.js ---- */
const S = {
  currentUser: null,
  userProfile: null,
  battleStartTime: null,
  currentPage: 'page-auth',
  uiLocked: false,
  currentLbTab: 'hunt',
  currentLbSub: '',
  G: {},
  HUNT: {
    active: false,
    enemies: [],
    currentIndex: 0,
    sessionId: null,
    scores: [],
    results: [],
    heroIds: [],
    fled: false,
  },
}


/* ---- cards.js ---- */
const CARD_META = {
  1: { label: '免伤' },
  2: { label: '倍率+0.4' },
  3: { label: 'BPN+1' },
  4: { label: '回血12' },
  5: { label: '多摸1张' },
  6: { label: '护盾+10' },
  7: { label: '不占BPN\n少摸1张' },
  8: { label: '再出手\n受伤×+1.25' },
  9: { label: '清空手牌' },
}



/* ---- heroes.js ---- */
const HEROES = {
  orichen: {
    id: 'orichen',
    enName: 'Orichen',
    cnName: '源辰',
    maxHP: 100,
    price: 0,
    skillCn: '七重锋',
    skillEn: 'Septistrike',
    skillDesc: '每使用一张7，本回合伤害倍率+0.5，可连续叠加。',
    avatarUrl: 'https://test.fukit.cn/autoupload/f/HIcZKncpTtcPa0Kz5DCpsyfNcKcqEnRmcljopnyJoMs/20260424/IRpq/574X597/Orichen_%E5%A4%B4%E5%83%8F.png',
    fullUrl: 'https://test.fukit.cn/autoupload/f/HIcZKncpTtcPa0Kz5DCpsyfNcKcqEnRmcljopnyJoMs/20260424/M6Kl/1024X1536/Orichen_%E5%85%A8%E8%BA%AB.png',
    tag: 'WALKER · 01',
    traitLines: ['使用7时伤害倍率+0.5', '效果可叠加'],
    getAtkBonus: (cards) => {
      const c7 = cards.filter((c) => c.num === 7).length
      return { bonus: c7 * 0.5, count7: c7 }
    },
  },
  indigo: {
    id: 'indigo',
    enName: 'Indigo',
    cnName: '靛蓝',
    maxHP: 90,
    price: 50,
    skillCn: '解封魔武',
    skillEn: 'Unsealed',
    skillDesc: '每回合最多造成30点伤害。血量低于70且造成30点伤害时进入「魔武」状态持续两回合，魔武状态下伤害改为乘算且可突破上限。',
    avatarUrl: 'https://pic4.fukit.cn/autoupload/HIcZKncpTtcPa0Kz5DCpsyfNcKcqEnRmcljopnyJoMs/20260424/G7Fs/559X560/Indigo_%E5%A4%B4%E5%83%8F.png',
    fullUrl: 'https://pic4.fukit.cn/autoupload/HIcZKncpTtcPa0Kz5DCpsyfNcKcqEnRmcljopnyJoMs/20260424/u1t4/2048X2048/Indigo_%E5%85%A8%E8%BA%AB.png',
    tag: 'WALKER · 02',
    traitLines: ['每回合最多造成30点伤害', '血量<70且造成30伤害时触发魔武', '魔武：伤害改为乘算且无上限'],
    getAtkBonus: null,
  },
  loryxan: {
    id: 'loryxan',
    enName: 'Loryxan',
    cnName: '搁浅',
    maxHP: 100,
    price: 100,
    skillCn: '荒芜',
    skillEn: 'Lorn Tide',
    skillDesc:
      '摸牌补充手牌时，每张牌有40%概率被随机附着法术。每使用1张被附着的卡牌，为数字生命添加1层「滞痕」。数字生命每携带1层「滞痕」，搁浅的受伤倍率降低0.05。当滞痕达到10层时，搁浅的本次攻击修改为一次伤害数值为数字生命当前生命值99%的斩杀。',
    avatarUrl: 'https://test.fukit.cn/autoupload/f/HIcZKncpTtcPa0Kz5DCpsyfNcKcqEnRmcljopnyJoMs/20260501/zx1v/473X494/Loryxan%E6%90%81%E6%B5%852.png',
    fullUrl: 'https://test.fukit.cn/autoupload/f/HIcZKncpTtcPa0Kz5DCpsyfNcKcqEnRmcljopnyJoMs/20260501/A9h9/2048X2048/Loryxan%E6%90%81%E6%B5%85.png',
    tag: 'WALKER · 03',
    traitLines: ['为随机手牌附着法术', '法术附着牌施加特殊效果', '滞痕：受伤倍率-0.05/层', '滞痕10层：99%当前生命值斩杀'],
    getAtkBonus: null,
  },
}


/* ---- monsters.js ---- */
const MONSTERS = {
  delta: {
    id: 'delta',
    enName: 'Delta',
    cnName: '棱兽',
    maxHP: 333,
    getDmg: () => [15, 18, 21, 24, 27][Math.floor(Math.random() * 5)],
    special: 'card3NoDmg',
    traitLines: ['卡牌3对其无直接伤害', '攻击为 15/18/21/24/27 随机之一'],
    avatarUrl:
      'https://test.fukit.cn/autoupload/f/HIcZKncpTtcPa0Kz5DCpsyfNcKcqEnRmcljopnyJoMs/20260424/907S/1024X1024/gpt-image-7cd85523e6b41c1ff2d9e6d050c853b3-1777023857298-1777023857298.png',
    fullUrl:
      'https://test.fukit.cn/autoupload/f/HIcZKncpTtcPa0Kz5DCpsyfNcKcqEnRmcljopnyJoMs/20260424/w5vz/2048X2048/Delta1.png',
    tag: 'DIGITAL LIFE · 01',
  },
  bulwark: {
    id: 'bulwark',
    enName: 'Bulwark',
    cnName: '垒魔',
    maxHP: 500,
    getDmg: () => 18,
    special: 'bulwark',
    traitLines: [
      '攻击固定为18点',
      '受到伤害的50%转化成护盾',
      '伤害<护盾时：你受到等额伤害',
      '伤害≥护盾时：本次伤害倍率+2',
    ],
    avatarUrl: 'https://test.fukit.cn/autoupload/f/HIcZKncpTtcPa0Kz5DCpsyfNcKcqEnRmcljopnyJoMs/20260425/BdxU/898X812/Bulwark_2.png',
    fullUrl: 'https://test.fukit.cn/autoupload/f/HIcZKncpTtcPa0Kz5DCpsyfNcKcqEnRmcljopnyJoMs/20260425/IB4h/2048X2048/Bulwark.png',
    tag: 'DIGITAL LIFE · 02',
  },
  thread: {
    id: 'thread',
    enName: 'Thread',
    cnName: '茧',
    maxHP: 100,
    getDmg: () => 0,
    special: 'thread',
    traitLines: [
      '不会直接攻击',
      '为你附加「命丝」效果',
      '造成>20伤害时：茧免疫伤害，移除一层命丝',
      '累积4层命丝时：你立即死亡',
    ],
    avatarUrl: 'https://test.fukit.cn/autoupload/f/HIcZKncpTtcPa0Kz5DCpsyfNcKcqEnRmcljopnyJoMs/20260425/K5VX/596X587/Thread_2.png',
    fullUrl: 'https://test.fukit.cn/autoupload/f/HIcZKncpTtcPa0Kz5DCpsyfNcKcqEnRmcljopnyJoMs/20260425/xii5/2048X2048/Thread.png',
    tag: 'DIGITAL LIFE · 03',
  },
}



/* ---- sb.js ---- */
const SUPABASE_URL = 'https://fryrupciljggvjzarnwl.supabase.co'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyeXJ1cGNpbGpnZ3ZqemFybndsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxMTM2MjgsImV4cCI6MjA5MjY4OTYyOH0.jRT_yP6WvYS6YzIJ0UELuRIwG9QxumHC3qilgjRyi68'

const { createClient } = supabase
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)



/* ---- auth.js ---- */
function onAuthStateChange(callback) {
  return sb.auth.onAuthStateChange(callback)
}
async function getSession() {
  const {
    data: { session },
  } = await sb.auth.getSession()
  return session
}
async function signUp({ email, password, username }) {
  return sb.auth.signUp({ email, password, options: { data: { username } } })
}
async function signInWithPassword({ email, password }) {
  return sb.auth.signInWithPassword({ email, password })
}
async function signOut() {
  return sb.auth.signOut()
}



/* ---- profile.js ---- */
function normalizeUnlockedHeroes(u) {
  if (Array.isArray(u)) return u
  if (!u) return ['orichen']
  if (typeof u === 'string') {
    try {
      const parsed = JSON.parse(u)
      return Array.isArray(parsed) ? parsed : ['orichen']
    } catch (_e) {
      return ['orichen']
    }
  }
  return ['orichen']
}
function getUnlockedArr() {
  if (!S.userProfile) return ['orichen']
  return normalizeUnlockedHeroes(S.userProfile.unlocked_heroes)
}
function isHeroUnlocked(heroId) {
  return getUnlockedArr().includes(heroId)
}
async function loadUserProfile() {
  if (!S.currentUser) return
  const { data, error } = await sb
    .from('profiles')
    .select('username,token_balance,unlocked_heroes')
    .eq('id', S.currentUser.id)
    .single()

  if (error || !data) {
    S.userProfile = null
    const fallbackName =
      (S.currentUser.user_metadata && S.currentUser.user_metadata.username) ||
      (S.currentUser.email ? S.currentUser.email.split('@')[0] : '') ||
      'PLAYER'
    const payload = {
      id: S.currentUser.id,
      username: fallbackName,
      token_balance: 0,
      unlocked_heroes: JSON.stringify(['orichen']),
    }
    const { error: upErr } = await sb.from('profiles').upsert(payload, { onConflict: 'id' })
    if (!upErr) {
      const { data: data2, error: err2 } = await sb
        .from('profiles')
        .select('username,token_balance,unlocked_heroes')
        .eq('id', S.currentUser.id)
        .single()
      if (!err2 && data2) S.userProfile = { ...data2, unlocked_heroes: normalizeUnlockedHeroes(data2.unlocked_heroes) }
    }
    return
  }
  S.userProfile = { ...data, unlocked_heroes: normalizeUnlockedHeroes(data.unlocked_heroes) }
}
function updateUserBar() {
  const bar = document.getElementById('user-bar')
  if (S.currentUser && S.userProfile) {
    bar.classList.add('show')
    document.getElementById('user-bar-name').textContent = `✦ ${S.userProfile.username || S.currentUser.email}`
    document.getElementById('token-display-val').textContent = S.userProfile.token_balance || 0
  } else bar.classList.remove('show')
}
async function addToken(amount) {
  if (!S.currentUser || !S.userProfile) return
  const newBal = (S.userProfile.token_balance || 0) + Math.floor(amount)
  const { error } = await sb.from('profiles').update({ token_balance: newBal }).eq('id', S.currentUser.id)
  if (error) {
    alert('Token更新失败，请稍后重试')
    return
  }
  S.userProfile.token_balance = newBal
  document.getElementById('token-display-val').textContent = newBal
}
async function spendToken(amount) {
  if (!S.currentUser || !S.userProfile) return false
  if ((S.userProfile.token_balance || 0) < amount) return false
  const newBal = S.userProfile.token_balance - amount
  const { error } = await sb.from('profiles').update({ token_balance: newBal }).eq('id', S.currentUser.id)
  if (error) {
    alert('Token扣除失败，请稍后重试')
    return false
  }
  S.userProfile.token_balance = newBal
  document.getElementById('token-display-val').textContent = newBal
  return true
}
async function unlockHero(heroId) {
  if (!S.currentUser || !S.userProfile) return false
  const hero = HEROES[heroId]
  if (!hero || !hero.price) return false
  const unlocked = getUnlockedArr()
  if (unlocked.includes(heroId)) return true
  const ok = await spendToken(hero.price)
  if (!ok) return false
  const newU = [...unlocked, heroId]
  const { error } = await sb.from('profiles').update({ unlocked_heroes: JSON.stringify(newU) }).eq('id', S.currentUser.id)
  if (error) {
    await addToken(hero.price)
    alert('解锁失败，请重试')
    return false
  }
  S.userProfile.unlocked_heroes = newU
  return true
}



/* ---- music.js ---- */
let currentBGM = null
let musicPlaying = false
let userInteracted = false
let baseVolume = 0.6
let toastTimer = null
let toastVisible = false
const fadeLevels = new WeakMap()
function initMusic() {
  const h = document.getElementById('bgm-home')
  const b = document.getElementById('bgm-battle')
  const volRaw = localStorage.getItem('numcide_volume')
  if (volRaw !== null) {
    const savedVol = Number(volRaw)
    if (Number.isFinite(savedVol)) baseVolume = clamp(savedVol, 0, 1)
  }
  const muted = localStorage.getItem('numcide_muted') === '1'
  h.muted = muted
  b.muted = muted
  fadeLevels.set(h, 1)
  fadeLevels.set(b, 1)
  applyVolumes()
  const slider = document.getElementById('vol-slider')
  if (slider) slider.value = String(Math.round(baseVolume * 100))
  syncMuteIcon(muted)
  playHomeBGM()
  ;['click', 'keydown', 'touchstart'].forEach((e) => document.addEventListener(e, onFirstInteract))
  ;[h, b].forEach((a) =>
    a.addEventListener('error', () => {
      showToast('音乐加载失败：请检查网络或稍后重试', 'warn', 2600)
    }),
  )
}

function onFirstInteract() {
  if (!userInteracted) {
    userInteracted = true
    if (currentBGM && currentBGM.paused) {
      currentBGM
        .play()
        .then(() => {
          musicPlaying = true
          updateDiscAnim()
        })
        .catch(() => {
          musicPlaying = false
          updateDiscAnim()
        })
    }
  }
}
function playHomeBGM() {
  const h = document.getElementById('bgm-home')
  const b = document.getElementById('bgm-battle')
  document.getElementById('music-title').textContent = '零界猎杀 · 主题曲'
  switchBGM(h, b)
}
function playBattleBGM() {
  const h = document.getElementById('bgm-home')
  const b = document.getElementById('bgm-battle')
  document.getElementById('music-title').textContent = '零界猎杀 · 战斗'
  switchBGM(b, h)
}
function toggleMusic() {
  if (!currentBGM) return
  if (musicPlaying) {
    fadeTo(currentBGM, 0, 220).then(() => {
      currentBGM.pause()
    })
    musicPlaying = false
  } else {
    currentBGM
      .play()
      .then(() => {
        musicPlaying = true
        fadeTo(currentBGM, 1, 260)
        updateDiscAnim()
      })
      .catch(() => {
        musicPlaying = false
        updateDiscAnim()
        showToast('点击任意位置以启用声音', 'hint', 2400)
      })
  }
  updateDiscAnim()
}
function toggleMute() {
  if (!currentBGM) return
  const m = !currentBGM.muted
  document.getElementById('bgm-home').muted = m
  document.getElementById('bgm-battle').muted = m
  localStorage.setItem('numcide_muted', m ? '1' : '0')
  syncMuteIcon(m)
}
function setVolume(val) {
  baseVolume = clamp(val / 100, 0, 1)
  localStorage.setItem('numcide_volume', String(baseVolume))
  applyVolumes()
}

function updateDiscAnim() {
  document.getElementById('disc').classList.toggle('paused', !musicPlaying)
  document.getElementById('music-toggle-btn').textContent = musicPlaying ? '⏸' : '▶'
}

function syncMuteIcon(m) {
  const icon = m ? '🔇' : '🔊'
  const volIcon = document.getElementById('vol-icon')
  if (volIcon) volIcon.textContent = icon
  const mobileBtn = document.getElementById('mobile-mute-btn')
  if (mobileBtn) mobileBtn.textContent = icon
}

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v))
}

function applyVolumes() {
  const h = document.getElementById('bgm-home')
  const b = document.getElementById('bgm-battle')
  const lh = fadeLevels.get(h) ?? 1
  const lb = fadeLevels.get(b) ?? 1
  h.volume = baseVolume * lh
  b.volume = baseVolume * lb
}

async function switchBGM(next, other) {
  if (currentBGM === next && !next.paused) return
  const prev = currentBGM
  currentBGM = next
  if (!musicPlaying) {
    if (prev && prev !== next) {
      prev.pause()
      prev.currentTime = 0
      fadeLevels.set(prev, 0)
      applyVolumes()
    }
    fadeLevels.set(next, 0)
    applyVolumes()
    updateDiscAnim()
    return
  }
  if (prev && prev !== next) {
    await fadeTo(prev, 0, 220)
    prev.pause()
    prev.currentTime = 0
  }
  other.pause()
  fadeLevels.set(next, 0)
  applyVolumes()
  next.currentTime = 0
  try {
    await next.play()
    musicPlaying = true
    updateDiscAnim()
    await fadeTo(next, 1, 320)
  } catch (_e) {
    musicPlaying = false
    updateDiscAnim()
    showToast('点击任意位置以启用声音', 'hint', 2400)
  }
}

function fadeTo(audio, targetLevel, ms) {
  targetLevel = clamp(targetLevel, 0, 1)
  const start = performance.now()
  const from = fadeLevels.get(audio) ?? 1
  if (ms <= 0) {
    fadeLevels.set(audio, targetLevel)
    applyVolumes()
    return Promise.resolve()
  }
  return new Promise((resolve) => {
    function step(now) {
      const p = clamp((now - start) / ms, 0, 1)
      const eased = 1 - Math.pow(1 - p, 2)
      const cur = from + (targetLevel - from) * eased
      fadeLevels.set(audio, cur)
      applyVolumes()
      if (p < 1) requestAnimationFrame(step)
      else resolve()
    }
    requestAnimationFrame(step)
  })
}

function showToast(text, type = 'hint', ms = 2200) {
  const el = document.getElementById('ui-toast')
  if (!el) return
  el.textContent = text
  el.className = 'ui-toast show ' + type
  toastVisible = true
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    if (!toastVisible) return
    toastVisible = false
    el.className = 'ui-toast ' + type
  }, ms)
}


/* ---- modals.js ---- */
function showTokenInfo() {
  document.getElementById('token-modal').classList.add('show')
}
function hideTokenInfo() {
  document.getElementById('token-modal').classList.remove('show')
}



/* ---- leaderboard.js ---- */
function resetLeaderboardState() {
  S.currentLbTab = 'hunt'
  S.currentLbSub = ''
}
function switchLbTab(tab) {
  S.currentLbTab = tab
  S.currentLbSub = ''
  ;['hunt', 'hero', 'kill'].forEach((t) => {
    document.getElementById('lbt-' + t).classList.toggle('active', t === tab)
  })
  loadLeaderboard()
}

function clearNode(n) {
  while (n.firstChild) n.removeChild(n.firstChild)
}

function spanTag(text, cls) {
  const s = document.createElement('span')
  s.className = cls
  s.textContent = text == null ? '—' : String(text)
  return s
}

function rankClass(i) {
  return i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : 'normal'
}
async function loadLeaderboard() {
  const panel = document.getElementById('lb-panel')
  const subCont = document.getElementById('lb-sub-tabs-container')
  panel.innerHTML = '<div class="lb-loading">载入中……</div>'
  subCont.innerHTML = ''

  if (S.currentLbTab === 'hunt') {
    const { data, error } = await sb.from('leaderboard_hunt').select('*').order('total_score', { ascending: false }).limit(10)
    if (error) {
      panel.innerHTML = '<div class="lb-empty">载入失败</div>'
      return
    }
    if (!data || data.length === 0) {
      panel.innerHTML = '<div class="lb-empty">暂无数据</div>'
      return
    }
    const rows = await hydrateHuntStages(data)
    renderHuntLb(rows, panel)
  } else if (S.currentLbTab === 'hero') {
    const heroIds = Object.keys(HEROES)
    if (!S.currentLbSub) S.currentLbSub = heroIds[0]
    const subTabs = document.createElement('div')
    subTabs.className = 'lb-sub-tabs'
    heroIds.forEach((hid) => {
      const btn = document.createElement('button')
      btn.className = 'lb-sub-tab' + (S.currentLbSub === hid ? ' active' : '')
      btn.textContent = HEROES[hid].enName
      btn.addEventListener('click', () => {
        S.currentLbSub = hid
        loadLeaderboard()
      })
      subTabs.appendChild(btn)
    })
    subCont.appendChild(subTabs)
    const { data, error } = await sb.from('leaderboard_hero').select('*').eq('hero_id', S.currentLbSub).order('score', { ascending: false }).limit(10)
    if (error) {
      panel.innerHTML = '<div class="lb-empty">载入失败</div>'
      return
    }
    if (!data || data.length === 0) {
      panel.innerHTML = '<div class="lb-empty">暂无数据</div>'
      return
    }
    renderHeroLb(data, panel)
  } else if (S.currentLbTab === 'kill') {
    const monsterIds = Object.keys(MONSTERS)
    if (!S.currentLbSub) S.currentLbSub = monsterIds[0]
    const subTabs = document.createElement('div')
    subTabs.className = 'lb-sub-tabs'
    monsterIds.forEach((mid) => {
      const btn = document.createElement('button')
      btn.className = 'lb-sub-tab' + (S.currentLbSub === mid ? ' active' : '')
      btn.textContent = MONSTERS[mid].enName
      btn.addEventListener('click', () => {
        S.currentLbSub = mid
        loadLeaderboard()
      })
      subTabs.appendChild(btn)
    })
    subCont.appendChild(subTabs)
    const { data, error } = await sb.from('leaderboard_kill').select('*').eq('stage_id', S.currentLbSub).order('score', { ascending: false }).limit(10)
    if (error) {
      panel.innerHTML = '<div class="lb-empty">载入失败</div>'
      return
    }
    if (!data || data.length === 0) {
      panel.innerHTML = '<div class="lb-empty">暂无数据</div>'
      return
    }
    renderKillLb(data, panel)
  }
}

async function hydrateHuntStages(rows) {
  const sessionIds = rows
    .map((r) => (r && typeof r.session_id === 'string' ? r.session_id : null))
    .filter((x) => !!x)
  if (sessionIds.length === 0) return rows
  const uniq = [...new Set(sessionIds)]
  const { data, error } = await sb
    .from('battle_records')
    .select('session_id,session_index,stage_id,hero_id,created_at,result')
    .eq('mode', 'hunt')
    .in('session_id', uniq)
    .neq('result', 'flee')
  if (error || !Array.isArray(data)) return rows
  const latestBy = new Map()
  data.forEach((r) => {
    if (!r || !r.session_id || !r.session_index) return
    const k = `${r.session_id}|${r.session_index}`
    const prev = latestBy.get(k)
    const t = r.created_at ? Date.parse(r.created_at) : 0
    const pt = prev && prev.created_at ? Date.parse(prev.created_at) : -1
    if (!prev || t >= pt) latestBy.set(k, r)
  })
  const bySession = new Map()
  latestBy.forEach((r) => {
    const sid = r.session_id
    if (!bySession.has(sid)) bySession.set(sid, [])
    bySession.get(sid).push(r)
  })
  bySession.forEach((arr) => arr.sort((a, b) => (a.session_index || 0) - (b.session_index || 0)))
  return rows.map((row) => {
    const sid = row && typeof row.session_id === 'string' ? row.session_id : null
    const picked = sid ? bySession.get(sid) : null
    if (!picked || picked.length === 0) return row
    return {
      ...row,
      stage_ids: picked.map((x) => x.stage_id).filter((x) => !!x),
      hero_ids: picked.map((x) => x.hero_id).filter((x) => !!x),
    }
  })
}

function renderHuntLb(data, panel) {
  clearNode(panel)
  const table = document.createElement('table')
  table.className = 'lb-table'
  const thead = document.createElement('thead')
  const trh = document.createElement('tr')
  const th0 = document.createElement('th')
  th0.style.width = '40px'
  th0.textContent = '#'
  const th1 = document.createElement('th')
  th1.textContent = '玩家'
  const th2 = document.createElement('th')
  th2.textContent = '阵容'
  const th3 = document.createElement('th')
  th3.textContent = '对战数字生命'
  const th4 = document.createElement('th')
  th4.textContent = '总分'
  ;[th0, th1, th2, th3, th4].forEach((th) => trh.appendChild(th))
  thead.appendChild(trh)
  const tbody = document.createElement('tbody')

  data.forEach((row, i) => {
    const tr = document.createElement('tr')
    const tdRank = document.createElement('td')
    tdRank.appendChild(spanTag(i + 1, 'lb-rank ' + rankClass(i)))
    const tdUser = document.createElement('td')
    tdUser.appendChild(spanTag(row && row.username ? row.username : '—', 'lb-username'))
    const tdHeroes = document.createElement('td')
    const heroIds = Array.isArray(row && row.hero_ids) ? row.hero_ids : []
    heroIds.forEach((id) => {
      const name = HEROES[id] ? HEROES[id].enName : id
      tdHeroes.appendChild(spanTag(name, 'lb-tag hero'))
    })
    const tdStages = document.createElement('td')
    const stageIds = Array.isArray(row && row.stage_ids) ? row.stage_ids : []
    stageIds.forEach((id) => {
      const name = MONSTERS[id] ? MONSTERS[id].enName : id
      tdStages.appendChild(spanTag(name, 'lb-tag enemy'))
    })
    const tdScore = document.createElement('td')
    const scoreNum = Number(row && row.total_score != null ? row.total_score : 0)
    tdScore.appendChild(spanTag((Number.isFinite(scoreNum) ? scoreNum : 0).toFixed(2), 'lb-score'))
    ;[tdRank, tdUser, tdHeroes, tdStages, tdScore].forEach((td) => tr.appendChild(td))
    tbody.appendChild(tr)
  })

  table.appendChild(thead)
  table.appendChild(tbody)
  panel.appendChild(table)
}

function renderHeroLb(data, panel) {
  clearNode(panel)
  const table = document.createElement('table')
  table.className = 'lb-table'
  const thead = document.createElement('thead')
  const trh = document.createElement('tr')
  const th0 = document.createElement('th')
  th0.style.width = '40px'
  th0.textContent = '#'
  const th1 = document.createElement('th')
  th1.textContent = '玩家'
  const th2 = document.createElement('th')
  th2.textContent = '对战数字生命'
  const th3 = document.createElement('th')
  th3.textContent = '分数'
  ;[th0, th1, th2, th3].forEach((th) => trh.appendChild(th))
  thead.appendChild(trh)
  const tbody = document.createElement('tbody')

  data.forEach((row, i) => {
    const tr = document.createElement('tr')
    const tdRank = document.createElement('td')
    tdRank.appendChild(spanTag(i + 1, 'lb-rank ' + rankClass(i)))
    const tdUser = document.createElement('td')
    tdUser.appendChild(spanTag(row && row.username ? row.username : '—', 'lb-username'))
    const tdStage = document.createElement('td')
    const mName = MONSTERS[row && row.stage_id] ? MONSTERS[row.stage_id].enName : row ? row.stage_id : '—'
    tdStage.appendChild(spanTag(mName, 'lb-tag enemy'))
    const tdScore = document.createElement('td')
    const scoreNum = Number(row && row.score != null ? row.score : 0)
    tdScore.appendChild(spanTag((Number.isFinite(scoreNum) ? scoreNum : 0).toFixed(2), 'lb-score'))
    ;[tdRank, tdUser, tdStage, tdScore].forEach((td) => tr.appendChild(td))
    tbody.appendChild(tr)
  })

  table.appendChild(thead)
  table.appendChild(tbody)
  panel.appendChild(table)
}

function renderKillLb(data, panel) {
  clearNode(panel)
  const table = document.createElement('table')
  table.className = 'lb-table'
  const thead = document.createElement('thead')
  const trh = document.createElement('tr')
  const th0 = document.createElement('th')
  th0.style.width = '40px'
  th0.textContent = '#'
  const th1 = document.createElement('th')
  th1.textContent = '玩家'
  const th2 = document.createElement('th')
  th2.textContent = '使用界行者'
  const th3 = document.createElement('th')
  th3.textContent = '分数'
  ;[th0, th1, th2, th3].forEach((th) => trh.appendChild(th))
  thead.appendChild(trh)
  const tbody = document.createElement('tbody')

  data.forEach((row, i) => {
    const tr = document.createElement('tr')
    const tdRank = document.createElement('td')
    tdRank.appendChild(spanTag(i + 1, 'lb-rank ' + rankClass(i)))
    const tdUser = document.createElement('td')
    tdUser.appendChild(spanTag(row && row.username ? row.username : '—', 'lb-username'))
    const tdHero = document.createElement('td')
    const hName = HEROES[row && row.hero_id] ? HEROES[row.hero_id].enName : row ? row.hero_id : '—'
    tdHero.appendChild(spanTag(hName, 'lb-tag hero'))
    const tdScore = document.createElement('td')
    const scoreNum = Number(row && row.score != null ? row.score : 0)
    tdScore.appendChild(spanTag((Number.isFinite(scoreNum) ? scoreNum : 0).toFixed(2), 'lb-score'))
    ;[tdRank, tdUser, tdHero, tdScore].forEach((td) => tr.appendChild(td))
    tbody.appendChild(tr)
  })

  table.appendChild(thead)
  table.appendChild(tbody)
  panel.appendChild(table)
}


/* ---- codex.js ---- */
function renderCodex() {
  const grid = document.getElementById('codex-grid')
  grid.innerHTML = ''
  Object.values(HEROES).forEach((h) => {
    const unlocked = isHeroUnlocked(h.id)
    const card = document.createElement('div')
    card.className = 'codex-card' + (unlocked ? '' : ' locked')
    card.innerHTML = `
      <img src="${h.avatarUrl}" alt="${h.enName}">
      <div class="codex-name">${h.enName}</div>
      <div class="codex-sub">${h.cnName}</div>
      ${
        unlocked
          ? `<div class="codex-status unlocked">已解锁</div>`
          : `<div class="codex-price">◈ ${h.price} TOKEN</div>
             <button class="codex-unlock-btn" data-action="unlockHero" data-hero-id="${h.id}" ${!h.price ? 'disabled' : ''}>解锁</button>`
      }
    `
    card.addEventListener('click', () => openCodexDetail(h.id))
    grid.appendChild(card)
  })
}
function openCodexDetail(heroId) {
  const h = HEROES[heroId]
  document.getElementById('cd-img').src = h.fullUrl
  document.getElementById('cd-tag').textContent = h.tag
  document.getElementById('cd-name').textContent = h.enName
  document.getElementById('cd-sub').textContent = h.cnName
  const tl = document.getElementById('cd-traits')
  tl.innerHTML = ''
  h.traitLines.forEach((l) => {
    const d = document.createElement('div')
    d.className = 'do-trait'
    d.textContent = l
    tl.appendChild(d)
  })
  const skillDiv = document.createElement('div')
  skillDiv.innerHTML = `<div style="margin-top:14px;"><div class="do-section-title" style="margin-top:12px;">SKILL DESC</div><div style="font-size:0.86rem;color:rgba(232,217,181,0.75);line-height:2;font-weight:300;">${h.skillDesc}</div></div>`
  tl.appendChild(skillDiv)
  const btnRow = document.getElementById('cd-btn-row')
  btnRow.innerHTML = ''
  const backBtn = document.createElement('button')
  backBtn.className = 'do-btn-back'
  backBtn.textContent = '← 返回'
  backBtn.addEventListener('click', closeCodexDetail)
  btnRow.appendChild(backBtn)
  const ov = document.getElementById('codex-detail')
  ov.style.display = 'flex'
  requestAnimationFrame(() => requestAnimationFrame(() => ov.classList.add('show')))
}
function closeCodexDetail() {
  const ov = document.getElementById('codex-detail')
  ov.classList.remove('show')
  setTimeout(() => (ov.style.display = 'none'), 500)
}
async function tryUnlockHero(heroId, btn) {
  const hero = HEROES[heroId]
  if (!hero) return
  const cur = S.userProfile ? S.userProfile.token_balance || 0 : 0
  if (cur < hero.price) {
    alert(`Token不足！需要 ${hero.price}，当前 ${cur}`)
    return
  }
  btn.disabled = true
  btn.textContent = '解锁中…'
  const ok = await unlockHero(heroId)
  if (!ok) {
    btn.disabled = false
    btn.textContent = '解锁'
    alert('解锁失败，请重试')
    return
  }
  renderCodex()
  renderHeroList()
}



/* ---- heroes.js ---- */
function renderHeroList() {
  const container = document.getElementById('hero-list-container')
  container.innerHTML = ''
  Object.values(HEROES).forEach((h) => {
    const unlocked = isHeroUnlocked(h.id)
    const card = document.createElement('div')
    card.className = 'hero-card-sm' + (unlocked ? '' : ' locked-hero')
    card.innerHTML = `
      <img src="${h.avatarUrl}" alt="${h.enName}">
      <div class="hc-name">${h.enName}</div>
      <div class="hc-sub">${h.cnName}</div>
      <div class="hc-divider"></div>
      <div class="hc-skill-tag">· PASSIVE SKILL ·</div>
      ${h.traitLines.map((l) => `<div class="hc-trait">${l}</div>`).join('')}
      ${unlocked ? '' : `<div class="hc-lock-tag">◈ ${h.price} TOKEN</div>`}
    `
    if (unlocked) card.addEventListener('click', () => openHeroDetail(h.id))
    container.appendChild(card)
  })
}

let selectedHeroId = null
function openHeroDetail(id) {
  const h = HEROES[id]
  selectedHeroId = id
  document.getElementById('hd-img').src = h.fullUrl
  document.getElementById('hd-tag').textContent = h.tag
  document.getElementById('hd-name').textContent = h.enName
  document.getElementById('hd-sub').textContent = h.cnName
  const tl = document.getElementById('hd-traits')
  tl.innerHTML = ''
  h.traitLines.forEach((l) => {
    const d = document.createElement('div')
    d.className = 'do-trait'
    d.textContent = l
    tl.appendChild(d)
  })
  const skillDiv = document.createElement('div')
  skillDiv.innerHTML = `<div style="margin-top:12px;font-size:0.86rem;color:rgba(232,217,181,0.72);line-height:2;font-weight:300;">${h.skillDesc}</div>`
  tl.appendChild(skillDiv)
  const ov = document.getElementById('hero-detail')
  ov.style.display = 'flex'
  requestAnimationFrame(() => requestAnimationFrame(() => ov.classList.add('show')))
}
function closeHeroDetail() {
  const ov = document.getElementById('hero-detail')
  ov.classList.remove('show')
  setTimeout(() => (ov.style.display = 'none'), 500)
}
function selectHeroFromDetail() {
  closeHeroDetail()
  const monsterId = S.HUNT.enemies[S.HUNT.currentIndex]
  setTimeout(() => {
    initGame(monsterId, selectedHeroId)
    navTo('page-battle')
  }, 400)
}



/* ---- hunt.js ---- */
function startHuntMode() {
  const existing = loadHuntActionFromStorage()
  if (existing && existing.scanned) {
    S.HUNT = existing
    activeSlot = 0
    if (S.HUNT.started) navTo('page-hunt-action')
    else navTo('page-hunt-prep')
    return
  }
  const allIds = Object.keys(MONSTERS)
  const pool = getEncounteredMonsterIds()
  const candidates = pool.length >= 3 ? pool : allIds
  const uniq = [...new Set(candidates)].filter((id) => id in MONSTERS)
  const shuffled = [...uniq].sort(() => Math.random() - 0.5)
  const picked = shuffled.slice(0, 3)
  S.HUNT = {
    active: true,
    enemies: picked,
    currentIndex: 0,
    sessionId: crypto.randomUUID(),
    scores: [null, null, null],
    results: [null, null, null],
    heroIds: [null, null, null],
    fled: false,
    scanned: false,
    started: false,
  }
  activeSlot = 0
  renderHuntPrepInitial()
  navTo('page-hunt-prep')
}
function huntScan() {
  if (!S.HUNT.active || S.HUNT.scanned) return
  const btn = document.getElementById('hunt-scan-btn')
  if (btn) btn.disabled = true
  const scan = document.getElementById('hunt-scan')
  const reveal = document.getElementById('hunt-reveal')
  if (scan) scan.style.display = 'block'
  if (reveal) reveal.style.display = 'none'
  setTimeout(() => {
    S.HUNT.scanned = true
    persistHuntAction()
    if (scan) scan.style.display = 'none'
    if (reveal) reveal.style.display = 'flex'
    renderHuntReveal()
  }, 1250)
}
function huntStart() {
  if (!S.HUNT.active || !S.HUNT.scanned) return
  if (!S.HUNT.heroIds.every((x) => !!x)) return
  const idx = Math.min(2, Math.max(0, S.HUNT.currentIndex || 0))
  S.HUNT.started = true
  persistHuntAction()
  initGame(S.HUNT.enemies[idx], S.HUNT.heroIds[idx])
  navTo('page-battle')
}
function huntReturn() {
  document.getElementById('result-win-box').classList.remove('show')
  document.getElementById('result-lose-box').classList.remove('show')
  ;['result-win-box', 'result-lose-box', 'hunt-result-box'].forEach((id) => {
    document.getElementById(id).style.display = 'none'
  })
  document.getElementById('overlay').classList.remove('active')
  if (S.HUNT && S.HUNT.active && S.HUNT.scanned) {
    if (S.HUNT.started) navTo('page-hunt-action', true)
    else navTo('page-hunt-prep', true)
  } else navTo('page-mode', true)
}
function huntAbandon() {
  if (!S.HUNT || !S.HUNT.active) {
    navTo('page-mode')
    return
  }
  clearHuntActionStorage()
  S.HUNT = { active: false, enemies: [], currentIndex: 0, sessionId: null, scores: [], results: [], heroIds: [], fled: false }
  navTo('page-mode')
}

function renderHuntPrepInitial() {
  const btn = document.getElementById('hunt-scan-btn')
  if (btn) btn.disabled = false
  const scan = document.getElementById('hunt-scan')
  const reveal = document.getElementById('hunt-reveal')
  if (scan) scan.style.display = 'none'
  if (reveal) reveal.style.display = 'none'
  const row = document.getElementById('hunt-enemies-row')
  if (row) row.innerHTML = ''
  const slots = document.getElementById('hunt-team-slots')
  if (slots) slots.innerHTML = ''
  const pool = document.getElementById('hunt-team-pool')
  if (pool) pool.innerHTML = ''
  const startBtn = document.getElementById('hunt-start-btn')
  if (startBtn) startBtn.disabled = true
}

function renderHuntReveal() {
  renderHuntEnemies()
  renderHuntTeamPicker()
  updateHuntStartBtn()
}

function renderHuntEnemies() {
  const row = document.getElementById('hunt-enemies-row')
  row.innerHTML = ''
  S.HUNT.enemies.forEach((mid, i) => {
    const m = MONSTERS[mid]
    const slot = document.createElement('div')
    slot.className = 'hunt-enemy-slot' + (i < S.HUNT.currentIndex ? ' done' : i === S.HUNT.currentIndex ? ' current' : '')
    slot.innerHTML = `
      <div class="hunt-order-badge"># ${i + 1}</div>
      <img src="${m.avatarUrl}" alt="${m.enName}">
      <div class="hunt-enemy-name">${m.enName}</div>
      <div class="hunt-enemy-sub">${m.cnName}</div>
      <div class="hunt-enemy-hp">HP · ${m.maxHP}</div>
      <div class="hunt-enemy-hint">点击查看详情</div>
    `
    slot.addEventListener('click', () => openEnemyDetail(mid))
    row.appendChild(slot)
  })
}
function openEnemyDetail(monsterId) {
  const m = MONSTERS[monsterId]
  document.getElementById('ed-img').src = m.fullUrl
  document.getElementById('ed-tag').textContent = m.tag
  document.getElementById('ed-name').textContent = m.enName
  document.getElementById('ed-sub').textContent = m.cnName
  document.getElementById('ed-hp').textContent = `HP · ${m.maxHP}`
  const tl = document.getElementById('ed-traits')
  tl.innerHTML = ''
  m.traitLines.forEach((l) => {
    const d = document.createElement('div')
    d.className = 'do-trait'
    d.textContent = l
    tl.appendChild(d)
  })
  const ov = document.getElementById('enemy-detail')
  ov.style.display = 'flex'
  requestAnimationFrame(() => requestAnimationFrame(() => ov.classList.add('show')))
}
function closeEnemyDetail() {
  const ov = document.getElementById('enemy-detail')
  ov.classList.remove('show')
  setTimeout(() => (ov.style.display = 'none'), 500)
}
function viewNextEnemy() {
  if (S.HUNT.active && S.HUNT.currentIndex < S.HUNT.enemies.length) openEnemyDetail(S.HUNT.enemies[S.HUNT.currentIndex])
}

let activeSlot = 0

function renderHuntTeamPicker() {
  if (S.HUNT.started) return
  renderSlots()
  renderPool()
}

function renderSlots() {
  const slots = document.getElementById('hunt-team-slots')
  if (!slots) return
  slots.innerHTML = ''
  for (let i = 0; i < 3; i++) {
    const heroId = S.HUNT.heroIds[i]
    const h = heroId ? HEROES[heroId] : null
    const el = document.createElement('div')
    el.className = 'hunt-slot' + (activeSlot === i ? ' active' : '')
    el.innerHTML = `
      <div class="hunt-slot-badge">#${i + 1}</div>
      <div class="hunt-slot-name ${h ? '' : 'hunt-slot-empty'}">${h ? `${h.enName} · ${h.cnName}` : '点击选择 / 再点清空'}</div>
    `
    el.addEventListener('click', () => {
      if (activeSlot === i && S.HUNT.heroIds[i]) {
        S.HUNT.heroIds[i] = null
        persistHuntAction()
        updateHuntStartBtn()
      } else activeSlot = i
      renderSlots()
    })
    slots.appendChild(el)
  }
}

function renderPool() {
  const pool = document.getElementById('hunt-team-pool')
  if (!pool) return
  pool.innerHTML = ''
  Object.values(HEROES).forEach((h) => {
    if (!isHeroUnlocked(h.id)) return
    const card = document.createElement('div')
    card.className = 'hunt-hero-pick'
    card.innerHTML = `
      <img src="${h.avatarUrl}" alt="${h.enName}">
      <div class="hunt-hero-pick-name">
        <div class="en">${h.enName}</div>
        <div class="cn">${h.cnName}</div>
      </div>
    `
    card.addEventListener('click', () => {
      S.HUNT.heroIds[activeSlot] = h.id
      persistHuntAction()
      activeSlot = (activeSlot + 1) % 3
      renderSlots()
      updateHuntStartBtn()
    })
    pool.appendChild(card)
  })
}

function updateHuntStartBtn() {
  const startBtn = document.getElementById('hunt-start-btn')
  if (!startBtn) return
  startBtn.disabled = !S.HUNT.scanned || !S.HUNT.heroIds.every((x) => !!x)
  startBtn.textContent = '✦ 开始对战'
}

function getEncounteredMonsterIds() {
  try {
    const raw = localStorage.getItem('numcide_encountered_monsters')
    if (!raw) return []
    const arr = JSON.parse(raw)
    if (!Array.isArray(arr)) return []
    return arr.filter((id) => typeof id === 'string' && id in MONSTERS)
  } catch (_e) {
    return []
  }
}

const HUNT_STORAGE_KEY = 'numcide_hunt_action'

function persistHuntAction() {
  if (!S.HUNT || !S.HUNT.active || !S.HUNT.scanned) return
  try {
    const payload = { ...S.HUNT, updatedAt: Date.now() }
    localStorage.setItem(HUNT_STORAGE_KEY, JSON.stringify(payload))
  } catch (_e) {}
}

function clearHuntActionStorage() {
  try {
    localStorage.removeItem(HUNT_STORAGE_KEY)
  } catch (_e) {}
}
function loadHuntActionFromStorage() {
  try {
    const raw = localStorage.getItem(HUNT_STORAGE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    if (!data || !data.active || !Array.isArray(data.enemies) || data.enemies.length !== 3) return null
    return data
  } catch (_e) {
    return null
  }
}
function renderHuntResume() {
  if (!S.HUNT || !S.HUNT.active) {
    renderHuntPrepInitial()
    return
  }
  if (S.HUNT.scanned && S.HUNT.started) {
    navTo('page-hunt-action', true)
    return
  }
  const btn = document.getElementById('hunt-scan-btn')
  const scan = document.getElementById('hunt-scan')
  const reveal = document.getElementById('hunt-reveal')
  if (!S.HUNT.scanned) {
    if (btn) btn.disabled = false
    if (scan) scan.style.display = 'none'
    if (reveal) reveal.style.display = 'none'
    return
  }
  if (btn) btn.disabled = true
  if (scan) scan.style.display = 'none'
  if (reveal) reveal.style.display = 'flex'
  renderHuntReveal()
}
function renderHuntAction() {
  if (!S.HUNT || !S.HUNT.active || !S.HUNT.scanned) {
    navTo('page-hunt-prep', true)
    return
  }
  const idx = Math.min(2, Math.max(0, S.HUNT.currentIndex || 0))
  const prog = document.getElementById('hunt-action-progress')
  if (prog) {
    const done = S.HUNT.results.filter((r) => r === 'win').length
    prog.textContent = `进度：${done}/3 · 当前：第 ${idx + 1} 场`
  }

  const row = document.getElementById('hunt-action-enemies-row')
  if (row) {
    row.innerHTML = ''
    S.HUNT.enemies.forEach((mid, i) => {
      const m = MONSTERS[mid]
      const st = S.HUNT.results[i]
      const slot = document.createElement('div')
      slot.className = 'hunt-enemy-slot' + (i < idx ? ' done' : i === idx ? ' current' : '')
      slot.innerHTML = `
        <div class="hunt-order-badge"># ${i + 1}</div>
        <img src="${m.avatarUrl}" alt="${m.enName}">
        <div class="hunt-enemy-name">${m.enName}</div>
        <div class="hunt-enemy-sub">${m.cnName}</div>
        <div class="hunt-enemy-hp">HP · ${m.maxHP}</div>
        <div class="hunt-enemy-hint">${st === 'win' ? '已击败' : st === 'lose' ? '失败，可重试' : st === 'flee' ? '已撤退，可重试' : i === idx ? '当前目标' : '等待挑战'}</div>
      `
      slot.addEventListener('click', () => openEnemyDetail(mid))
      row.appendChild(slot)
    })
  }

  const team = document.getElementById('hunt-action-team-row')
  if (team) {
    team.innerHTML = ''
    for (let i = 0; i < 3; i++) {
      const hid = S.HUNT.heroIds[i]
      const h = hid ? HEROES[hid] : null
      const el = document.createElement('div')
      el.className = 'hunt-action-hero'
      el.innerHTML = `
        <div class="badge">#${i + 1}</div>
        ${h ? `<img src="${h.avatarUrl}" alt="${h.enName}">` : `<div style="width:48px;height:48px;border-radius:50%;border:1px dashed rgba(200,169,110,0.22);"></div>`}
        <div class="name">${h ? `${h.enName} · ${h.cnName}` : '—'}</div>
      `
      team.appendChild(el)
    }
  }

  const primary = document.getElementById('hunt-action-primary')
  if (primary) {
    const st = S.HUNT.results[idx]
    primary.disabled = !S.HUNT.heroIds.every((x) => !!x)
    primary.textContent = st === 'lose' || st === 'flee' ? `✦ 重新挑战第 ${idx + 1} 场` : `✦ 开始第 ${idx + 1} 场`
  }
}


/* ---- nav.js ---- */
function navTo(pageId, instant = false) {
  if (S.currentPage === pageId) return
  if (S.uiLocked && !instant) return
  if (pageId === 'page-battle') playBattleBGM()
  else if (S.currentPage === 'page-battle') playHomeBGM()
  if (pageId === 'page-leaderboard') resetLeaderboardState()
  const tr = document.getElementById('page-transition')
  if (instant) {
    _doNav(pageId)
    return
  }
  S.uiLocked = true
  document.body.classList.add('ui-locked')
  tr.classList.add('active')
  setTimeout(() => {
    _doNav(pageId)
    setTimeout(() => {
      tr.classList.remove('active')
      S.uiLocked = false
      document.body.classList.remove('ui-locked')
    }, 260)
  }, 220)
}

function _doNav(pageId) {
  const old = document.getElementById(S.currentPage)
  if (old) old.classList.remove('active', 'visible')
  document.body.classList.toggle('page-other', pageId !== 'page-home' && pageId !== 'page-auth')
  S.currentPage = pageId
  const np = document.getElementById(pageId)
  np.classList.add('active')
  try {
    window.scrollTo({ top: 0, behavior: 'instant' })
  } catch (_e) {
    window.scrollTo(0, 0)
  }
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      np.classList.add('visible')
      if (pageId === 'page-battle') applyMobileLayout()
      if (pageId === 'page-codex') renderCodex()
      if (pageId === 'page-hunt-prep') renderHuntResume()
      if (pageId === 'page-hunt-action') renderHuntAction()
      if (pageId === 'page-leaderboard') loadLeaderboard()
    }),
  )
}
function goToMode() {
  const c = document.getElementById('home-content')
  c.classList.add('fade-out')
  setTimeout(() => {
    c.classList.remove('fade-out')
    navTo('page-mode')
  }, 500)
}


/* ---- responsive.js ---- */
function applyMobileLayout() {
  const isMobile = window.innerWidth <= 768
  const layout = document.getElementById('battle-layout')
  const heroPanel = document.getElementById('hero-panel')
  const centerPanel = document.getElementById('center-panel')
  const monsterPanel = document.getElementById('monster-panel')
  if (!layout) return
  if (isMobile) {
    layout.style.display = 'flex'
    layout.style.flexDirection = 'column'
    layout.style.gap = '4px'
    let row = document.getElementById('mobile-panels-row')
    if (!row) {
      row = document.createElement('div')
      row.id = 'mobile-panels-row'
      row.className = 'mobile-panels-row'
      row.style.cssText = 'display:flex;gap:4px;flex-shrink:0;'
    }
    if (heroPanel.parentNode !== row) row.appendChild(heroPanel)
    if (monsterPanel.parentNode !== row) row.appendChild(monsterPanel)
    if (!row.parentNode || row.parentNode !== layout) layout.insertBefore(row, centerPanel)
  } else {
    layout.style.display = ''
    layout.style.flexDirection = ''
    layout.style.gap = ''
    const row = document.getElementById('mobile-panels-row')
    if (row) {
      if (heroPanel.parentNode === row) layout.insertBefore(heroPanel, row)
      if (monsterPanel.parentNode === row) layout.appendChild(monsterPanel)
      if (row.parentNode) row.parentNode.removeChild(row)
    }
  }
}
function initResponsive() {
  window.addEventListener('resize', applyMobileLayout)
}



/* ---- battleView.js ---- */



let toggleSelectHandler = null
function setToggleSelectHandler(fn) {
  toggleSelectHandler = fn
}
function renderAll() {
  renderHpBars()
  renderHand()
  renderPreview()
  renderInfoBar()
  renderStatusTags()
  document.getElementById('round-text').textContent = `第 ${S.G.round} 回合`
}
function renderHpBars() {
  const pp = Math.max(0, (S.G.playerHP / S.G.playerMaxHP) * 100)
  const mp = Math.max(0, (S.G.monsterHP / S.G.monsterMaxHP) * 100)
  document.getElementById('player-hp-bar').style.width = pp + '%'
  document.getElementById('player-hp-text').textContent = `HP: ${S.G.playerHP}/${S.G.playerMaxHP}`
  document.getElementById('monster-hp-bar').style.width = mp + '%'
  document.getElementById('monster-hp-text').textContent = `HP: ${S.G.monsterHP}/${S.G.monsterMaxHP}`
}
function renderHand() {
  const container = document.getElementById('hand-cards')
  container.innerHTML = ''
  const allSel = [...S.G.selected, ...S.G.freeSelected]
  const isMW = S.G.heroId === 'indigo' && S.G.mwTurnsLeft > 0
  S.G.hand.forEach((card) => {
    const isSelected = allSel.includes(card.id)
    const isDisabled = !isSelected && card.num !== 7 && S.G.selected.length >= S.G.bpn
    const div = document.createElement('div')
    let cls = 'card'
    if (card.num === 7) cls += ' card7'
    if (isSelected) cls += ' selected'
    if (isDisabled) cls += ' disabled'
    if (isMW) cls += ' mw-border'
    if (card.enchanted) cls += ' enchanted'
    div.className = cls
    div.dataset.cardId = String(card.id)
    div.innerHTML = `<div class="card-num">${card.num}</div><div class="card-eff">${CARD_META[card.num].label}</div>`
    div.addEventListener('click', () => {
      if (typeof toggleSelectHandler === 'function') toggleSelectHandler(card.id)
    })
    container.appendChild(div)
  })
}
function renderPreview() {
  const el = document.getElementById('play-preview')
  const allSel = [...S.G.selected, ...S.G.freeSelected]
  if (allSel.length === 0) {
    el.innerHTML = `<span style="color:rgba(200,169,110,0.45)">出牌预览：尚未选择</span>`
    return
  }
  const played = S.G.hand.filter((c) => allSel.includes(c.id))
  let baseAtk = 0,
    atkBonus = 0,
    tags = []
  const hero = HEROES[S.G.heroId]
  played.forEach((c) => {
    if (S.G.monsterSpecial === 'card3NoDmg' && c.num === 3) tags.push('3(免伤)')
    else baseAtk += c.num
    if (c.num === 2) {
      atkBonus += 0.4
      tags.push('倍率+0.4')
    }
    if (c.num === 1) tags.push('🛡免伤')
    if (c.num === 3 && S.G.monsterSpecial !== 'card3NoDmg') tags.push('BPN+1')
    if (c.num === 4) tags.push('回血12')
    if (c.num === 5) tags.push('多摸1')
    if (c.num === 6) tags.push('护盾+10')
    if (c.num === 8) tags.push('⚡再出手')
    if (c.num === 9) tags.push('清空')
  })
  let heroBonus = 0
  if (hero && hero.getAtkBonus) heroBonus = hero.getAtkBonus(played).bonus
  const totalMul = 1 + atkBonus + heroBonus
  let finalAtk
  if (S.G.heroId === 'indigo' && S.G.mwTurnsLeft > 0) {
    let product = 1
    played.forEach((c) => {
      if (!(S.G.monsterSpecial === 'card3NoDmg' && c.num === 3)) product *= c.num
    })
    finalAtk = Math.round(product * totalMul)
    tags.push('⚡魔武乘算')
  } else {
    finalAtk = Math.round(baseAtk * totalMul)
    if (S.G.heroId === 'indigo' && finalAtk > 30) {
      finalAtk = 30
      tags.push('上限30')
    }
  }
  let html = `出牌预览：<span class="preview-dmg">⚔ ${finalAtk}</span>`
  if (totalMul !== 1 && baseAtk > 0) html += `<span style="color:rgba(200,169,110,0.52);font-size:0.76rem">(${baseAtk}×${totalMul.toFixed(2)})</span>`
  tags.forEach((t) => {
    html += `<span class="preview-tag">${t}</span>`
  })
  el.innerHTML = html
}
function renderInfoBar() {
  document.getElementById('bpn-disp').textContent = S.G.bpn
  document.getElementById('sel-disp').textContent = S.G.selected.length
  document.getElementById('hand-disp').textContent = S.G.hand.length
  document.getElementById('bpn-label').textContent = S.G.bpn
  document.getElementById('card7-tip').style.display = S.G.hand.some((c) => c.num === 7) ? 'block' : 'none'

  const allSel = [...S.G.selected, ...S.G.freeSelected]
  const btnClear = document.getElementById('btn-clear-sel')
  if (btnClear) btnClear.disabled = allSel.length === 0 || S.G.phase !== 'player'

  const inj = 1 + (S.G.injuryMulBonus || 0)
  const injEl = document.getElementById('hud-inj')
  if (injEl) {
    const st = S.G.stasisStacks || 0
    const v = Math.max(0.1, 1 + (S.G.injuryMulBonus || 0) - st * 0.05)
    injEl.innerHTML = `×<span class="hud-num">${v.toFixed(2)}</span>`
    injEl.classList.toggle('bad', v > 1.001)
  }

  let atkBonus = 0
  const played = S.G.hand.filter((c) => allSel.includes(c.id))
  played.forEach((c) => {
    if (c.num === 2) atkBonus += 0.4
  })
  let heroBonus = 0
  const hero = HEROES[S.G.heroId]
  if (hero && hero.getAtkBonus) heroBonus = hero.getAtkBonus(played).bonus
  const mul = 1 + atkBonus + heroBonus
  const mulEl = document.getElementById('hud-mul')
  if (mulEl) mulEl.innerHTML = `×<span class="hud-num">${mul.toFixed(2)}</span>`

  const nextBpn = Math.max(1, (S.G.bpnBase || S.G.bpn || 3) + (S.G.nextBpnDelta || 0))
  const drawDelta = S.G.nextExtraDraw || 0
  const nextEl = document.getElementById('hud-next')
  if (nextEl) {
    const dd = drawDelta === 0 ? '0' : drawDelta > 0 ? `+${drawDelta}` : `${drawDelta}`
    nextEl.innerHTML = `BPN <span class="hud-num">${nextBpn}</span> · 摸 <span class="hud-num">${dd}</span>`
  }
}
function renderStatusTags() {
  const pt = document.getElementById('player-tags')
  pt.innerHTML = ''
  const sh2 = S.G.shields.filter((s) => s.turnsLeft === 2).reduce((a, s) => a + s.amount, 0)
  const sh1 = S.G.shields.filter((s) => s.turnsLeft === 1).reduce((a, s) => a + s.amount, 0)
  if (sh2 > 0) pt.innerHTML += `<span class="s-tag shield2">🛡${sh2}(2)</span>`
  if (sh1 > 0) pt.innerHTML += `<span class="s-tag shield1">🛡${sh1}(1)</span>`
  if (S.G.mwTurnsLeft > 0) pt.innerHTML += `<span class="s-tag mw">⚡魔武(${S.G.mwTurnsLeft})</span>`
  if (S.G.threadStacks > 0) pt.innerHTML += `<span class="s-tag thread">🧵命丝(${S.G.threadStacks}/4)</span>`
  if (S.G.nextBpnDelta > 0) pt.innerHTML += `<span class="s-tag">BPN+${S.G.nextBpnDelta}</span>`
  if (S.G.nextBpnDelta < 0) pt.innerHTML += `<span class="s-tag bad">BPN${S.G.nextBpnDelta}</span>`
  if (S.G.nextExtraDraw > 0) pt.innerHTML += `<span class="s-tag">多摸${S.G.nextExtraDraw}</span>`
  if (S.G.nextExtraDraw < 0) pt.innerHTML += `<span class="s-tag bad">少摸${Math.abs(S.G.nextExtraDraw)}</span>`
  if (S.G.injuryMulBonus > 0) pt.innerHTML += `<span class="s-tag bad">受伤×${(1 + S.G.injuryMulBonus).toFixed(2)}</span>`
  const mt = document.getElementById('monster-tags')
  mt.innerHTML = ''
  if (S.G.monsterSpecial !== 'thread') mt.innerHTML += `<span class="s-tag bad">即将:${S.G.monsterNextDmg}</span>`
  if (S.G.monsterShield > 0) mt.innerHTML += `<span class="s-tag shield2">🛡${S.G.monsterShield}</span>`
  if (S.G.monsterSpecial === 'thread') mt.innerHTML += `<span class="s-tag thread">命丝模式</span>`
  if ((S.G.stasisStacks || 0) > 0) mt.innerHTML += `<span class="s-tag stasis">滞痕(${S.G.stasisStacks}/10)</span>`
}
function addLog(text, type = '') {
  const box = document.getElementById('log-entries')
  const p = document.createElement('p')
  p.className = 'log-entry' + (type ? ' ' + type : '')
  p.textContent = text
  box.appendChild(p)
  box.parentElement.scrollTop = box.parentElement.scrollHeight
}
function clearLog() {
  document.getElementById('log-entries').innerHTML = ''
}
function spawnDmgFloat(dmg, target, refEl) {
  const rect = refEl.getBoundingClientRect()
  const span = document.createElement('div')
  span.className = `dmg-float ${target}`
  span.textContent = `-${dmg}`
  span.style.left = rect.left + rect.width / 2 - 28 + 'px'
  span.style.top = rect.top + 18 + 'px'
  document.body.appendChild(span)
  span.addEventListener('animationend', () => span.remove())
}
function flashHit(el) {
  el.classList.remove('hit-anim')
  void el.offsetWidth
  el.classList.add('hit-anim')
  el.addEventListener('animationend', () => el.classList.remove('hit-anim'), { once: true })
}

let mwAnim = null
let mwParticles = []
function startMWParticles() {
  const canvas = document.getElementById('mw-canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  canvas.style.display = 'block'
  const ctx = canvas.getContext('2d')
  mwParticles = []
  function spawn() {
    const ha = document.querySelector('.hand-area')
    if (!ha) return
    const r = ha.getBoundingClientRect()
    mwParticles.push({
      x: r.left + Math.random() * r.width,
      y: r.bottom - Math.random() * r.height * 0.5,
      vx: (Math.random() - 0.5) * 1.8,
      vy: -(Math.random() * 2.2 + 0.6),
      life: 1,
      decay: 0.012 + Math.random() * 0.01,
      size: Math.random() * 3 + 1,
      color: Math.random() > 0.5 ? '#4d9fff' : '#7eb8ff',
    })
  }
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (Math.random() < 0.45) spawn()
    mwParticles = mwParticles.filter((p) => p.life > 0)
    mwParticles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy
      p.life -= p.decay
      ctx.save()
      ctx.globalAlpha = Math.max(0, p.life)
      ctx.shadowBlur = 10
      ctx.shadowColor = p.color
      ctx.fillStyle = p.color
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    })
    mwAnim = requestAnimationFrame(loop)
  }
  loop()
}
function stopMWParticles() {
  if (mwAnim) {
    cancelAnimationFrame(mwAnim)
    mwAnim = null
  }
  mwParticles = []
  const c = document.getElementById('mw-canvas')
  if (c) c.style.display = 'none'
}
function showMWPopup() {
  const popup = document.getElementById('mw-popup')
  popup.classList.remove('show')
  void popup.offsetWidth
  popup.classList.add('show')
  popup.addEventListener('animationend', () => popup.classList.remove('show'), { once: true })
}
function showTidePopup() {
  let popup = document.getElementById('tide-popup')
  const ultImgUrl = 'https://pic4.fukit.cn/autoupload/HIcZKncpTtcPa0Kz5DCpsyfNcKcqEnRmcljopnyJoMs/20260502/1zmT/3840X2160/%25E6%2590%2581%25E6%25B5%2585%25E5%25A5%25A5%25E4%25B9%2589%25E5%259B%25BE.png'
  if (!popup) {
    popup = document.createElement('div')
    popup.className = 'tide-popup'
    popup.id = 'tide-popup'
    popup.innerHTML = `
      <div class="tide-cine-wrap">
        <div class="tide-cine-imgwrap">
          <img class="tide-cine-img" id="tide-cine-img" src="${ultImgUrl}" alt="">
        </div>
        <div class="tide-cine-text">
          <div class="tide-cine-cn"><span class="tide-shake"><span class="tide-line1">潮汐褪去 万物滞岸</span><span class="tide-line2">凡是困于荒芜的行者 皆会被搁浅寂静处决</span></span></div>
          <div class="tide-cine-en"><span class="tide-shake-sub">Tide recedes shores run dry all stranded in the waste shall fall silent to the blade</span></div>
        </div>
      </div>
    `
    document.body.appendChild(popup)
  }
  const img = document.getElementById('tide-cine-img')
  if (img) img.src = ultImgUrl
  popup.classList.remove('show')
  void popup.offsetWidth
  popup.classList.add('show')
  const hideAfterMs = 3000
  const fadeMs = 900
  if (window.__tidePopupHideTimer) clearTimeout(window.__tidePopupHideTimer)
  if (window.__tidePopupEndTimer) clearTimeout(window.__tidePopupEndTimer)
  window.__tidePopupHideTimer = setTimeout(() => popup.classList.remove('show'), hideAfterMs)
  window.__tidePopupEndTimer = setTimeout(() => {}, hideAfterMs + fadeMs)
  return { hideAfterMs, fadeMs, totalMs: hideAfterMs + fadeMs }
}
function triggerMWAttackEffect(targetEl) {
  const flash = document.createElement('div')
  flash.className = 'mw-attack-flash'
  document.body.appendChild(flash)
  flash.addEventListener('animationend', () => flash.remove())
  const rect = targetEl.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  for (let i = 0; i < 12; i++) {
    const angle = (360 / 12) * i
    const length = 70 + Math.random() * 60
    const line = document.createElement('div')
    line.className = 'mw-strike'
    line.style.cssText = `left:${cx - 1}px;top:${cy}px;height:${length}px;--a:${angle}deg;animation-delay:${i * 0.018}s;`
    document.body.appendChild(line)
    line.addEventListener('animationend', () => line.remove())
  }
}
function triggerTideAttackEffect(targetEl) {
  const rect = targetEl.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  const xPct = Math.max(0, Math.min(100, (cx / window.innerWidth) * 100))
  const yPct = Math.max(0, Math.min(100, (cy / window.innerHeight) * 100))

  const impact = document.createElement('div')
  impact.className = 'tide-impact'
  impact.style.setProperty('--cx', `${xPct}%`)
  impact.style.setProperty('--cy', `${yPct}%`)
  document.body.appendChild(impact)
  impact.addEventListener('animationend', () => impact.remove())

  const ring = document.createElement('div')
  ring.className = 'tide-ring'
  ring.style.setProperty('--cx', `${xPct}`)
  ring.style.setProperty('--cy', `${yPct}`)
  document.body.appendChild(ring)
  ring.addEventListener('animationend', () => ring.remove())

  const shock = document.createElement('div')
  shock.className = 'tide-shock'
  document.body.appendChild(shock)
  shock.addEventListener('animationend', () => shock.remove())
}
function triggerTideFinisherEffect(targetEl) {
  triggerTideAttackEffect(targetEl)
  const kanji = document.createElement('div')
  kanji.className = 'tide-kanji'
  kanji.textContent = '斬'
  document.body.appendChild(kanji)
  kanji.addEventListener('animationend', () => kanji.remove())

  const flash = document.createElement('div')
  flash.className = 'tide-finisher-flash'
  document.body.appendChild(flash)
  flash.addEventListener('animationend', () => flash.remove())

  const sweep = document.createElement('div')
  sweep.className = 'tide-sweep'
  document.body.appendChild(sweep)
  sweep.addEventListener('animationend', () => sweep.remove())

  for (let i = 0; i < 9; i++) {
    const line = document.createElement('div')
    line.className = 'tide-sweep-slash'
    const y = 18 + Math.random() * 64
    const d = 0.06 + i * 0.05
    line.style.cssText = `top:${y}vh;animation-delay:${d}s;`
    document.body.appendChild(line)
    line.addEventListener('animationend', () => line.remove())
  }
}


/* ---- battle.js ---- */








let G = {}
S.G = G

function persistHunt() {
  if (!S.HUNT || !S.HUNT.active || !S.HUNT.scanned) return
  try {
    localStorage.setItem('numcide_hunt_action', JSON.stringify({ ...S.HUNT, updatedAt: Date.now() }))
  } catch (_e) {}
}

function syncG(next) {
  G = next
  S.G = G
}
function initBattleModule() {
  setToggleSelectHandler(toggleSelect)
}

function dealCards(n) {
  let c = []
  for (let i = 0; i < n; i++) {
    const enchanted = G.heroId === 'loryxan' ? Math.random() < 0.4 : false
    c.push({ id: G.nextCardId++, num: Math.floor(Math.random() * 9) + 1, enchanted })
  }
  return c
}

function sortHand() {
  G.hand.sort((a, b) => a.num - b.num)
}

function markEncountered(stageId) {
  try {
    const raw = localStorage.getItem('numcide_encountered_monsters')
    const arr = raw ? JSON.parse(raw) : []
    const next = Array.isArray(arr) ? arr : []
    if (!next.includes(stageId)) next.push(stageId)
    localStorage.setItem('numcide_encountered_monsters', JSON.stringify(next.slice(-200)))
  } catch (_e) {}
}
function initGame(stageId, heroId) {
  stopMWParticles()
  S.battleStartTime = Date.now()
  const monster = MONSTERS[stageId],
    hero = HEROES[heroId]
  markEncountered(stageId)
  document.getElementById('art-hero').src = hero.fullUrl
  document.getElementById('art-monster').src = monster.fullUrl
  const badge = document.getElementById('hunt-progress-badge')
  if (S.HUNT.active) {
    badge.style.display = 'inline-block'
    badge.textContent = `第 ${S.HUNT.currentIndex + 1}/3 场`
  } else badge.style.display = 'none'
  syncG({
    round: 1,
    phase: 'player',
    playerHP: hero.maxHP,
    playerMaxHP: hero.maxHP,
    shields: [],
    monsterHP: monster.maxHP,
    monsterMaxHP: monster.maxHP,
    monsterShield: 0,
    playerDamagedThisTurn: false,
    threadStacks: 0,
    monsterGetDmg: monster.getDmg,
    monsterSpecial: monster.special || null,
    monsterNextDmg: monster.getDmg(),
    stageId,
    heroId,
    hand: [],
    nextCardId: 0,
    selected: [],
    freeSelected: [],
    bpn: 3,
    bpnBase: 3,
    nextBpnDelta: 0,
    nextExtraDraw: 0,
    shieldThisTurn: false,
    atkMulBonus: 0,
    injuryMulBonus: 0,
    extraTurn: false,
    pendingClearHand: false,
    mwTurnsLeft: 0,
    mwUsedThisSession: false,
    mwJustTriggered: false,
    stasisStacks: 0,
    totalDmgDealt: 0,
    totalDmgTaken: 0,
    maxSingleDmg: 0,
    maxSingleDmgRound: 1,
    overkillDmg: 0,
  })
  document.getElementById('hero-name-disp').textContent = `${hero.enName} · ${hero.cnName}`
  document.getElementById('sk-cn').textContent = hero.skillCn
  document.getElementById('sk-en').textContent = hero.skillEn
  document.getElementById('sk-desc').innerHTML = hero.skillDesc.replace(/魔武/g, '<span class="t-mw">魔武</span>')
  document.getElementById('sk-active').style.display = 'none'
  document.getElementById('sk-mw').style.display = 'none'
  document.getElementById('monster-name-disp').textContent = `☠ ${monster.enName} · ${monster.cnName}`
  const tl = document.getElementById('trait-lines')
  tl.innerHTML = ''
  monster.traitLines.forEach((l) => {
    const d = document.createElement('div')
    d.className = 'trait-line'
    d.textContent = l
    tl.appendChild(d)
  })
  clearLog()
  G.hand = dealCards(5)
  sortHand()
  renderAll()
  addLog(`⚔ ${hero.enName} vs ${monster.enName}`, 'good')
  addLog(`技能[${hero.skillCn}]: ${hero.skillDesc}`, 'system')
  setPhase('player')
}

function setPhase(phase) {
  G.phase = phase
  const badge = document.getElementById('phase-badge')
  ;['btn-play', 'btn-skip', 'btn-flee'].forEach((id) => (document.getElementById(id).disabled = phase !== 'player'))
  if (phase === 'player') {
    badge.textContent = '玩家回合'
    badge.className = 'phase-badge phase-player'
  } else if (phase === 'monster') {
    badge.textContent = '数字生命行动中…'
    badge.className = 'phase-badge phase-monster'
  } else {
    badge.textContent = '战斗结束'
    badge.className = 'phase-badge phase-end'
  }
}

function renderAllWithSort() {
  sortHand()
  renderHpBars()
  renderHand()
  renderPreview()
  renderInfoBar()
  renderStatusTags()
  document.getElementById('round-text').textContent = `第 ${G.round} 回合`
}

function toggleSelect(id) {
  if (G.phase !== 'player') return
  const card = G.hand.find((c) => c.id === id)
  if (!card) return
  if (card.num === 7) {
    const idx = G.freeSelected.indexOf(id)
    if (idx >= 0) G.freeSelected.splice(idx, 1)
    else G.freeSelected.push(id)
  } else {
    const idx = G.selected.indexOf(id)
    if (idx >= 0) G.selected.splice(idx, 1)
    else {
      if (G.selected.length >= G.bpn) {
        addLog(`已达BPN上限（${G.bpn}张）`, 'warn')
        return
      }
      G.selected.push(id)
    }
  }
  renderHand()
  renderPreview()
  renderInfoBar()
}
function clearSelection() {
  if (!G || G.phase !== 'player') return
  if ((G.selected && G.selected.length) || (G.freeSelected && G.freeSelected.length)) {
    G.selected = []
    G.freeSelected = []
    renderHand()
    renderPreview()
    renderInfoBar()
  }
}

function applyCardEffect(num, log) {
  switch (num) {
    case 1:
      G.shieldThisTurn = true
      log.push('【1】免伤')
      break
    case 2:
      G.atkMulBonus += 0.4
      log.push('【2】倍率+0.4')
      break
    case 3:
      G.nextBpnDelta += 1
      log.push('【3】下回合BPN+1')
      break
    case 4:
      G.playerHP = Math.min(G.playerMaxHP, G.playerHP + 12)
      log.push(`【4】回血12（HP:${G.playerHP}）`)
      renderHpBars()
      break
    case 5:
      G.nextExtraDraw += 1
      log.push('【5】下回合多摸1')
      break
    case 6:
      G.shields.push({ amount: 10, turnsLeft: 2 })
      log.push('【6】护盾+10（2回合）')
      break
    case 7:
      G.nextExtraDraw -= 1
      log.push('【7】不占BPN，下回合少摸1')
      break
    case 8:
      if (!G.extraTurn) G.extraTurn = true
      G.injuryMulBonus += 1.25
      log.push('【8】再出手，受伤倍率+1.25')
      break
    case 9:
      G.pendingClearHand = true
      log.push('【9】清空手牌')
      break
  }
}
function playCards() {
  if (G.phase !== 'player') return
  const allSel = [...G.selected, ...G.freeSelected]
  if (allSel.length === 0) {
    addLog('请至少选择一张牌！', 'warn')
    return
  }
  const played = G.hand.filter((c) => allSel.includes(c.id))
  G.hand = G.hand.filter((c) => !allSel.includes(c.id))
  G.selected = []
  G.freeSelected = []
  let baseAtk = 0,
    effectLog = []
  let loryExecute = false
  G.shieldThisTurn = false
  G.atkMulBonus = 0
  G.extraTurn = false
  G.pendingClearHand = false
  if (G.heroId === 'loryxan') {
    const ench = played.filter((c) => c.enchanted).length
    if (ench > 0) {
      addLog(`  ✦ [荒芜] 附着卡×${ench}，滞痕+${ench}`, 'mw')
      let executeThisAttack = false
      for (let i = 0; i < ench; i++) {
        G.stasisStacks = (G.stasisStacks || 0) + 1
        if (G.stasisStacks >= 10) {
          executeThisAttack = true
          G.stasisStacks = 0
          break
        }
      }
      loryExecute = executeThisAttack
      renderStatusTags()
    }
  }
  played.forEach((c) => {
    if (G.monsterSpecial === 'card3NoDmg' && c.num === 3) {
      effectLog.push('【3】棱兽：无伤害，BPN+1')
      G.nextBpnDelta += 1
    } else {
      baseAtk += c.num
      applyCardEffect(c.num, effectLog)
    }
  })
  if (G.heroId === 'loryxan' && loryExecute) baseAtk = 0
  addLog(`▶ [${played.map((c) => c.num).join(',')}] 基础=${baseAtk}`, 'important')
  effectLog.forEach((e) => addLog('  ✦ ' + e, 'warn'))
  let heroBonus = 0
  const hero = HEROES[G.heroId]
  if (hero.getAtkBonus) {
    const res = hero.getAtkBonus(played)
    heroBonus = res.bonus
    if (res.count7 > 0) {
      addLog(`  ✦ [${hero.skillCn}] ×${res.count7}个7，倍率+${res.bonus.toFixed(1)}`, 'warn')
      const sa = document.getElementById('sk-active')
      sa.style.display = 'block'
      sa.textContent = `激活${res.count7}次，倍率+${res.bonus.toFixed(1)}`
    } else document.getElementById('sk-active').style.display = 'none'
  }
  const totalMul = 1 + G.atkMulBonus + heroBonus
  let finalAtk = Math.round(baseAtk * totalMul)
  if (totalMul !== 1) addLog(`  倍率×${totalMul.toFixed(2)}→${finalAtk}`, 'warn')
  if (G.heroId === 'indigo') {
    if (G.mwTurnsLeft > 0) {
      let product = 1,
        nums = []
      played.forEach((c) => {
        if (!(G.monsterSpecial === 'card3NoDmg' && c.num === 3)) {
          product *= c.num
          nums.push(c.num)
        }
      })
      finalAtk = Math.round(product * (1 + G.atkMulBonus + heroBonus))
      addLog(`  ✦【魔武】${nums.join('×')}=${product}→${finalAtk}`, 'mw')
    } else {
      if (finalAtk > 30) {
        addLog('  ✦ 截断为30', 'warn')
        finalAtk = 30
      }
      if (finalAtk === 30 && G.playerHP < 70 && !G.mwUsedThisSession) {
        G.mwTurnsLeft = 2
        G.mwUsedThisSession = true
        G.mwJustTriggered = true
        addLog('  ✦ ⚡【魔武】触发！持续2回合', 'mw')
        startMWParticles()
        showMWPopup()
        document.getElementById('sk-mw').style.display = 'block'
        document.getElementById('sk-mw').textContent = `⚡ 魔武激活（剩${G.mwTurnsLeft}回合）`
      }
    }
  }
  if (G.pendingClearHand && G.hand.length > 0) {
    addLog(`  ✦【9】清空${G.hand.length}张`, 'warn')
    G.hand = []
  }
  if (G.heroId === 'loryxan' && loryExecute) {
    const before = G.monsterHP
    const remain = Math.max(1, Math.round(before * 0.01))
    const dmg = Math.max(0, before - remain)
    const monEl = document.getElementById('monster-panel')
    const popup = showTidePopup()
    flashHit(monEl)
    setPhase('monster')
    const finisherAt = (popup ? popup.hideAfterMs : 3200) + 240
    setTimeout(() => {
      triggerTideFinisherEffect(monEl)
      if (dmg > 0) {
        G.monsterHP = remain
        G.totalDmgDealt += dmg
        if (dmg > G.maxSingleDmg) {
          G.maxSingleDmg = dmg
          G.maxSingleDmgRound = G.round
        }
        addLog(`潮汐褪去，万物滞岸，凡是困于荒芜的行者，皆会被搁浅寂静处决。对数字生命造成生命值99%的斩杀伤害【${dmg}】`, 'mw')
        spawnDmgFloat(dmg, 'monster', monEl)
      } else {
        addLog(`潮汐褪去，万物滞岸，凡是困于荒芜的行者，皆会被搁浅寂静处决。对数字生命造成生命值99%的斩杀伤害【0】`, 'mw')
      }
      renderStatusTags()
      renderHpBars()
      if (G.extraTurn) {
        addLog('  ✦【8】再次出手！', 'warn')
        G.extraTurn = false
        renderAllWithSort()
        setPhase('player')
        return
      }
      setTimeout(() => monsterTurn(), 650)
    }, finisherAt)
    return
  }
  if (G.monsterSpecial === 'bulwark') {
    const mShield = G.monsterShield || 0
    if (mShield > 0) {
      if (finalAtk < mShield) {
        addLog(`🛡 垒魔护盾(${mShield})坚厚！攻击反弹，你受到${finalAtk}点伤害`, 'warn')
        G.playerHP = Math.max(0, G.playerHP - finalAtk)
        G.totalDmgTaken += finalAtk
        renderHpBars()
        if (G.playerHP <= 0) {
          endGame('lose')
          return
        }
        finalAtk = 0
      } else {
        addLog(`💥 破盾一击！伤害倍率+2！`, 'good')
        finalAtk = Math.round(finalAtk * 3)
        G.monsterShield = 0
      }
    }
  }
  if (G.monsterSpecial === 'thread' && finalAtk > 20) {
    addLog(`🧵 伤害超过20，茧免疫此次伤害，移除一层命丝`, 'warn')
    G.threadStacks = Math.max(0, (G.threadStacks || 0) - 1)
    finalAtk = 0
  }
  G.totalDmgDealt += finalAtk
  if (finalAtk > G.maxSingleDmg) {
    G.maxSingleDmg = finalAtk
    G.maxSingleDmgRound = G.round
  }
  const mhpBefore = G.monsterHP
  G.monsterHP = Math.max(0, G.monsterHP - finalAtk)
  if (finalAtk > 0) addLog(`☠ 数字生命-${finalAtk}，剩余HP:${G.monsterHP}`, 'important')
  const monEl = document.getElementById('monster-panel')
  if (finalAtk > 0) {
    spawnDmgFloat(finalAtk, 'monster', monEl)
    flashHit(monEl)
  }
  if (G.heroId === 'indigo' && G.mwTurnsLeft > 0) triggerMWAttackEffect(monEl)
  if (G.monsterSpecial === 'bulwark' && finalAtk > 0 && G.monsterHP > 0) {
    const halfShield = Math.round(finalAtk * 0.5)
    G.monsterShield = halfShield
    G.playerDamagedThisTurn = true
    addLog(`🛡 垒魔吸收冲击，凝结了 ${halfShield} 点护盾(50%)`, 'system')
  }
  renderHpBars()
  if (G.monsterHP <= 0) {
    G.overkillDmg = Math.max(0, finalAtk - mhpBefore)
    endGame('win')
    return
  }
  if (G.extraTurn) {
    addLog('  ✦【8】再次出手！', 'warn')
    G.extraTurn = false
    renderAllWithSort()
    return
  }
  setTimeout(() => monsterTurn(), 700)
}
function skipTurn() {
  if (G.phase !== 'player') return
  G.selected = []
  G.freeSelected = []
  addLog('↷ 跳过出牌。', 'system')
  G.shieldThisTurn = false
  G.atkMulBonus = 0
  setTimeout(() => monsterTurn(), 400)
}

function monsterTurn() {
  setPhase('monster')
  if (G.monsterSpecial === 'thread') {
    G.threadStacks = (G.threadStacks || 0) + 1
    addLog(`🧵 茧附加命丝（${G.threadStacks}/4）`, 'warn')
    if (G.threadStacks >= 4) {
      addLog('💀 命丝达到4层，你立即死亡！', 'important')
      G.playerHP = 0
      renderHpBars()
      setTimeout(() => endGame('lose'), 500)
      return
    }
    renderStatusTags()
    setTimeout(() => startNewRound(), 800)
    return
  }
  const baseDmg = G.monsterNextDmg,
    injMul = Math.max(0.1, 1 + G.injuryMulBonus - (G.stasisStacks || 0) * 0.05)
  let finalDmg = Math.round(baseDmg * injMul)
  if (G.shieldThisTurn) {
    addLog(`🛡 免疫${finalDmg}伤害！`, 'good')
  } else {
    G.shields.sort((a, b) => a.turnsLeft - b.turnsLeft)
    let remaining = finalDmg,
      absorbed = 0
    for (let sh of G.shields) {
      if (remaining <= 0) break
      const take = Math.min(sh.amount, remaining)
      sh.amount -= take
      remaining -= take
      absorbed += take
    }
    G.shields = G.shields.filter((sh) => sh.amount > 0)
    if (absorbed > 0) addLog(`🛡 护盾吸收${absorbed}，剩余${remaining}`, 'good')
    if (remaining > 0) {
      G.playerHP = Math.max(0, G.playerHP - remaining)
      G.totalDmgTaken += remaining
      addLog(`💥 数字生命攻击${finalDmg}${injMul !== 1 ? ' (受伤×' + injMul.toFixed(2) + ')' : ''}，HP:${G.playerHP}`, 'important')
      spawnDmgFloat(remaining, 'player', document.getElementById('hero-panel'))
      flashHit(document.getElementById('hero-panel'))
    }
  }
  G.injuryMulBonus = 0
  renderHpBars()
  if (G.playerHP <= 0) {
    setTimeout(() => endGame('lose'), 500)
    return
  }
  setTimeout(() => startNewRound(), 800)
}

function startNewRound() {
  G.round++
  if (G.monsterSpecial === 'bulwark') {
    if (!G.playerDamagedThisTurn && G.monsterShield > 0) {
      G.monsterShield = 0
      addLog(`🛡 垒魔的护盾因玩家未发起攻击而消散了...`, 'system')
    }
    G.playerDamagedThisTurn = false
  }
  G.shields = G.shields.map((sh) => ({ ...sh, turnsLeft: sh.turnsLeft - 1 })).filter((sh) => sh.turnsLeft > 0 && sh.amount > 0)
  if (G.heroId === 'indigo' && G.mwTurnsLeft > 0) {
    if (G.mwJustTriggered) G.mwJustTriggered = false
    else G.mwTurnsLeft--
    if (G.mwTurnsLeft === 0) {
      G.mwUsedThisSession = false
      document.getElementById('sk-mw').style.display = 'none'
      addLog('⚡ 魔武结束。', 'mw')
      stopMWParticles()
    } else document.getElementById('sk-mw').textContent = `⚡ 魔武激活（剩${G.mwTurnsLeft}回合）`
  }
  const toDraw = Math.max(0, 5 - G.hand.length + G.nextExtraDraw)
  G.nextExtraDraw = 0
  if (toDraw > 0) {
    G.hand = G.hand.concat(dealCards(toDraw))
    addLog(`── 第${G.round}回合，摸${toDraw}张。`, 'system')
  } else addLog(`── 第${G.round}回合。`, 'system')
  const newBpn = Math.max(1, G.bpnBase + G.nextBpnDelta)
  if (G.nextBpnDelta !== 0) addLog(`BPN${G.nextBpnDelta > 0 ? '+' : ''}${G.nextBpnDelta}→${newBpn}`, 'warn')
  G.bpn = newBpn
  G.nextBpnDelta = 0
  G.monsterNextDmg = G.monsterGetDmg()
  G.shieldThisTurn = false
  G.atkMulBonus = 0
  G.selected = []
  G.freeSelected = []
  document.getElementById('sk-active').style.display = 'none'
  renderAllWithSort()
  setPhase('player')
}

function calcScore() {
  const TARGET_AVG = 50,
    TARGET_RATIO = 3
  const survive = Math.min(100, (G.playerHP / G.playerMaxHP) * 100 * 1.45)
  const avgDmg = G.totalDmgDealt / Math.max(1, G.round)
  const dmg = Math.min(100, (2 / Math.PI) * Math.atan((avgDmg / TARGET_AVG) * 2.5) * 100)
  const precise = Math.min(100, 100 * Math.exp(-1.5 * (G.overkillDmg / G.monsterMaxHP)))
  const eff = G.totalDmgTaken === 0 ? 100 : Math.min(100, (2 / Math.PI) * Math.atan((G.totalDmgDealt / G.totalDmgTaken) / TARGET_RATIO * 2.0) * 100)
  const total = survive * 0.3 + dmg * 0.25 + precise * 0.2 + eff * 0.25
  const r = (v) => Math.round(v * 100) / 100
  return { survive: r(survive), dmg: r(dmg), precise: r(precise), eff: r(eff), total: r(total) }
}

function getGrade(s) {
  if (s >= 95) return 'S+  完美无瑕'
  if (s >= 80) return 'S   出神入化'
  if (s >= 70) return 'A   实力强劲'
  if (s >= 60) return 'B   稳扎稳打'
  if (s >= 45) return 'C   尚需磨砺'
  return 'D   继续努力'
}

function animCount(el, target, dur = 1400, isFloat = true) {
  const start = performance.now()
  function step(now) {
    const p = Math.min((now - start) / dur, 1),
      e = 1 - Math.pow(1 - p, 3)
    el.textContent = isFloat ? (target * e).toFixed(2) : Math.round(target * e)
    if (p < 1) requestAnimationFrame(step)
    else el.textContent = isFloat ? target.toFixed(2) : target
  }
  requestAnimationFrame(step)
}

async function saveBattleRecord(result, score, sessionIndex) {
  if (!S.currentUser) return
  const durationSec = S.battleStartTime ? Math.round((Date.now() - S.battleStartTime) / 1000) : 0
  const avgDmg = G.round > 0 ? Math.round((G.totalDmgDealt / G.round) * 100) / 100 : 0
  try {
    const isHunt = !!(S.HUNT && S.HUNT.active)
    const idx = Math.max(1, Number(sessionIndex || 1))
    const stageId = isHunt && Array.isArray(S.HUNT.enemies) && S.HUNT.enemies[idx - 1] ? S.HUNT.enemies[idx - 1] : G.stageId
    const heroId = isHunt && Array.isArray(S.HUNT.heroIds) && S.HUNT.heroIds[idx - 1] ? S.HUNT.heroIds[idx - 1] : G.heroId
    await sb.from('battle_records').insert({
      user_id: S.currentUser.id,
      session_id: isHunt ? S.HUNT.sessionId : null,
      session_index: idx,
      mode: isHunt ? 'hunt' : 'single',
      stage_id: stageId,
      hero_id: heroId,
      result,
      score: score ? score.total : 0,
      rounds_used: G.round,
      avg_damage: avgDmg,
      final_hp: G.playerHP,
      max_hp: G.playerMaxHP,
      total_dmg_dealt: G.totalDmgDealt,
      total_dmg_taken: G.totalDmgTaken,
      max_single_dmg: G.maxSingleDmg,
      duration_seconds: durationSec,
      overkill_dmg: G.overkillDmg,
      hunt_total_score: isHunt && S.HUNT.scores.length >= 3 ? S.HUNT.scores.reduce((a, b) => a + b, 0) : 0,
    })
  } catch (e) {
    console.error('saveBattleRecord error:', e)
  }
}

async function saveProgress(result) {
  if (!S.currentUser) return
  try {
    const { data: ex } = await sb.from('game_progress').select('*').eq('user_id', S.currentUser.id).single()
    const wins = (ex ? ex.total_wins : 0) + (result === 'win' ? 1 : 0)
    const losses = (ex ? ex.total_losses : 0) + (result === 'lose' ? 1 : 0)
    await sb
      .from('game_progress')
      .upsert(
        {
          user_id: S.currentUser.id,
          last_mode: S.HUNT.active ? 'hunt' : 'single',
          total_wins: wins,
          total_losses: losses,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id' },
      )
  } catch (e) {
    console.error('saveProgress error:', e)
  }
}
async function endGame(result) {
  setPhase('end')
  const score = result === 'win' ? calcScore() : null
  const tokenEarned = Math.floor((score ? score.total : 0) * 0.2)
  const sessionIdx = S.HUNT.active ? S.HUNT.currentIndex + 1 : 1
  if (S.HUNT.active) {
    if (!Array.isArray(S.HUNT.scores) || S.HUNT.scores.length !== 3) S.HUNT.scores = [null, null, null]
    if (!Array.isArray(S.HUNT.results) || S.HUNT.results.length !== 3) S.HUNT.results = [null, null, null]
    S.HUNT.scores[S.HUNT.currentIndex] = score ? score.total : 0
    S.HUNT.results[S.HUNT.currentIndex] = result
    persistHunt()
  }
  await saveBattleRecord(result, score, sessionIdx)
  await saveProgress(result)
  if (tokenEarned > 0) await addToken(tokenEarned)
  document.getElementById('overlay').classList.add('active')
  if (result === 'win') {
    addLog('🏆 胜利！', 'good')
    const hero = HEROES[G.heroId],
      monster = MONSTERS[G.stageId]
    document.getElementById('rw-rounds').textContent = `${G.round}回合`
    document.getElementById('rw-hp').textContent = `${G.playerHP}/${G.playerMaxHP}`
    document.getElementById('rw-maxdmg').textContent = `${G.maxSingleDmg}（第${G.maxSingleDmgRound}回合）`
    document.getElementById('rw-desc').innerHTML = `<span style="color:#7ecfff">${hero.enName}</span> 击败了 <span style="color:#ff6b8a">${monster.enName}</span>`
    document.getElementById('rw-token-reward').textContent = tokenEarned > 0 ? `◈ 获得 ${tokenEarned} TOKEN` : ''
    const btn = document.getElementById('btn-next-or-back')
    if (S.HUNT.active && S.HUNT.currentIndex < 2) btn.textContent = '继续下一场 →'
    else if (S.HUNT.active && S.HUNT.currentIndex >= 2) btn.textContent = '查看总结算'
    else btn.textContent = '↺ 返回'
    const wb = document.getElementById('result-win-box')
    wb.style.display = 'block'
    document.getElementById('result-lose-box').style.display = 'none'
    document.getElementById('hunt-result-box').style.display = 'none'
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        wb.classList.add('show')
        setTimeout(() => {
          ;[
            { b: 'bar-survive', v: 'val-survive', val: score.survive },
            { b: 'bar-dmg', v: 'val-dmg', val: score.dmg },
            { b: 'bar-precise', v: 'val-precise', val: score.precise },
            { b: 'bar-eff', v: 'val-eff', val: score.eff },
          ].forEach((d) => {
            document.getElementById(d.b).style.width = d.val + '%'
            animCount(document.getElementById(d.v), d.val, 1200)
          })
          animCount(document.getElementById('rw-total'), score.total, 1600)
          document.getElementById('rw-grade').textContent = getGrade(score.total)
        }, 300)
      }),
    )
    document.getElementById('save-tip-win').textContent = ''
  } else {
    addLog('💀 失败…', 'important')
    const hero = HEROES[G.heroId],
      monster = MONSTERS[G.stageId]
    document.getElementById('rl-rounds').textContent = `${G.round}回合`
    document.getElementById('rl-mhp').textContent = `${G.monsterHP}/${G.monsterMaxHP}`
    document.getElementById('rl-hero').textContent = `${hero.enName}·${hero.cnName}`
    document.getElementById('rl-monster').textContent = `${monster.enName}·${monster.cnName}`
    document.getElementById('rl-token-reward').textContent = tokenEarned > 0 ? `◈ 获得 ${tokenEarned} TOKEN` : ''
    const lb = document.getElementById('result-lose-box')
    document.getElementById('result-win-box').style.display = 'none'
    document.getElementById('hunt-result-box').style.display = 'none'
    lb.style.display = 'block'
    requestAnimationFrame(() => requestAnimationFrame(() => lb.classList.add('show')))
    document.getElementById('save-tip-lose').textContent = ''
    if (S.HUNT.active) {
      const btn = document.querySelector('#result-lose-box .result-btn')
      if (btn) btn.textContent = '↺ 返回行动'
    }
  }
}
function handleNextOrBack() {
  if (S.HUNT.active) {
    if (S.HUNT.results[S.HUNT.currentIndex] === 'win' && S.HUNT.currentIndex < 2) {
      S.HUNT.currentIndex++
      persistHunt()
      document.getElementById('result-win-box').classList.remove('show')
      setTimeout(() => {
        document.getElementById('overlay').classList.remove('active')
        document.getElementById('result-win-box').style.display = 'none'
        navTo('page-hunt-action', true)
      }, 400)
    } else if (S.HUNT.results[S.HUNT.currentIndex] === 'win' && S.HUNT.currentIndex >= 2) showHuntFinalResult()
    else {
      document.getElementById('result-win-box').classList.remove('show')
      setTimeout(() => {
        document.getElementById('overlay').classList.remove('active')
        document.getElementById('result-win-box').style.display = 'none'
        navTo('page-hunt-action', true)
      }, 300)
    }
  } else restartGame()
}

function showHuntFinalResult() {
  ;['result-win-box', 'result-lose-box'].forEach((id) => {
    document.getElementById(id).classList.remove('show')
    document.getElementById(id).style.display = 'none'
  })
  const hb = document.getElementById('hunt-result-box')
  hb.style.display = 'block'
  const totalScore = S.HUNT.scores.reduce((a, b) => a + b, 0)
  const tokenEarned = Math.floor(totalScore * 0.2)
  const list = document.getElementById('hr-rounds-list')
  list.innerHTML = ''
  S.HUNT.enemies.forEach((mid, i) => {
    const m = MONSTERS[mid]
    const h = HEROES[S.HUNT.heroIds[i]]
    const hasResult = i < S.HUNT.results.length
    const row = document.createElement('div')
    row.className = 'hr-round-row'
    row.innerHTML = `
      <span class="hr-round-label">#${i + 1} ${h ? h.enName : '—'} vs ${m.enName}</span>
      <span class="hr-round-score">${hasResult ? (S.HUNT.scores[i] || 0).toFixed(2) : '—'}</span>
      <span class="hr-round-result ${hasResult ? S.HUNT.results[i] : 'pending'}">${hasResult ? (S.HUNT.results[i] === 'win' ? '胜利' : '失败') : '未对战'}</span>
    `
    list.appendChild(row)
  })
  document.getElementById('hr-total-score').textContent = totalScore.toFixed(2)
  document.getElementById('hr-token-reward').textContent = tokenEarned > 0 ? `◈ 本次行动共获得 ${tokenEarned} TOKEN` : ''
  document.getElementById('save-tip-hunt').textContent = ''
  if (!document.getElementById('overlay').classList.contains('active')) document.getElementById('overlay').classList.add('active')
  requestAnimationFrame(() => requestAnimationFrame(() => hb.classList.add('show')))
}
function restartGame() {
  stopMWParticles()
  S.HUNT = { active: false, enemies: [], currentIndex: 0, sessionId: null, scores: [], results: [], heroIds: [], fled: false }
  ;['result-win-box', 'result-lose-box', 'hunt-result-box'].forEach((id) => {
    document.getElementById(id).classList.remove('show')
    document.getElementById(id).style.display = 'none'
  })
  setTimeout(() => {
    document.getElementById('overlay').classList.remove('active')
    navTo('page-mode')
  }, 350)
}
function fleeBattle() {
  stopMWParticles()
  if (S.HUNT.active) {
    S.HUNT.fled = true
    if (!Array.isArray(S.HUNT.scores) || S.HUNT.scores.length !== 3) S.HUNT.scores = [null, null, null]
    if (!Array.isArray(S.HUNT.results) || S.HUNT.results.length !== 3) S.HUNT.results = [null, null, null]
    S.HUNT.scores[S.HUNT.currentIndex] = 0
    S.HUNT.results[S.HUNT.currentIndex] = 'flee'
    persistHunt()
    playHomeBGM()
    navTo('page-hunt-action', true)
  } else {
    playHomeBGM()
    navTo('page-mode')
  }
}


/* ---- auth.js ---- */
function switchAuthTab(tab) {
  document.getElementById('tab-login').classList.toggle('active', tab === 'login')
  document.getElementById('tab-register').classList.toggle('active', tab === 'register')
  document.getElementById('form-login').classList.toggle('hidden', tab !== 'login')
  document.getElementById('form-register').classList.toggle('hidden', tab !== 'register')
  document.getElementById('login-msg').textContent = ''
  document.getElementById('reg-msg').textContent = ''
}
async function doRegister() {
  const username = document.getElementById('reg-username').value.trim()
  const email = document.getElementById('reg-email').value.trim()
  const password = document.getElementById('reg-password').value
  const msg = document.getElementById('reg-msg'),
    btn = document.getElementById('reg-btn')
  if (!username || !email || !password) {
    msg.className = 'auth-msg error'
    msg.textContent = '请填写所有字段'
    return
  }
  if (password.length < 6) {
    msg.className = 'auth-msg error'
    msg.textContent = '密码至少需要6位'
    return
  }
  btn.disabled = true
  msg.className = 'auth-msg'
  msg.textContent = '注册中……'
  const { error } = await signUp({ email, password, username })
  btn.disabled = false
  if (error) {
    msg.className = 'auth-msg error'
    msg.textContent = error.message.includes('already') ? '该邮箱已注册' : '注册失败：' + error.message
  } else {
    msg.className = 'auth-msg success'
    msg.textContent = '✓ 注册成功！正在进入……'
  }
}
async function doLogin() {
  const email = document.getElementById('login-email').value.trim()
  const password = document.getElementById('login-password').value
  const msg = document.getElementById('login-msg'),
    btn = document.getElementById('login-btn')
  if (!email || !password) {
    msg.className = 'auth-msg error'
    msg.textContent = '请填写邮箱和密码'
    return
  }
  btn.disabled = true
  msg.className = 'auth-msg'
  msg.textContent = '登录中……'
  const { error } = await signInWithPassword({ email, password })
  btn.disabled = false
  if (error) {
    msg.className = 'auth-msg error'
    msg.textContent = '邮箱或密码错误'
  }
}



/* ---- events.js ---- */
function initEvents() {
  document.addEventListener('click', async (e) => {
    const stopNode = e.target.closest('[data-stop-prop="true"]')
    if (stopNode) e.stopPropagation()

    const el = e.target.closest('[data-action]')
    if (!el) return
    if (stopNode && el.id === 'token-modal') return

    const action = el.dataset.action
    if (S.uiLocked && action !== 'toggleMusic' && action !== 'toggleMute') return
    if (action === 'toggleMusic') toggleMusic()
    else if (action === 'toggleMute') toggleMute()
    else if (action === 'showTokenInfo') showTokenInfo()
    else if (action === 'hideTokenInfo') hideTokenInfo()
    else if (action === 'doLogout') {
      stopMWParticles()
      playHomeBGM()
      await signOut()
    } else if (action === 'switchAuthTab') switchAuthTab(el.dataset.tab)
    else if (action === 'doLogin') doLogin()
    else if (action === 'doRegister') doRegister()
    else if (action === 'goToMode') goToMode()
    else if (action === 'navTo') navTo(el.dataset.target)
    else if (action === 'startHuntMode') startHuntMode()
    else if (action === 'huntScan') huntScan()
    else if (action === 'huntStart') huntStart()
    else if (action === 'huntReturn') huntReturn()
    else if (action === 'huntAbandon') huntAbandon()
    else if (action === 'closeCodexDetail') closeCodexDetail()
    else if (action === 'closeEnemyDetail') closeEnemyDetail()
    else if (action === 'viewNextEnemy') viewNextEnemy()
    else if (action === 'closeHeroDetail') closeHeroDetail()
    else if (action === 'selectHeroFromDetail') selectHeroFromDetail()
    else if (action === 'fleeBattle') fleeBattle()
    else if (action === 'playCards') playCards()
    else if (action === 'skipTurn') skipTurn()
    else if (action === 'handleNextOrBack') handleNextOrBack()
    else if (action === 'restartGame') restartGame()
    else if (action === 'clearSelection') clearSelection()
    else if (action === 'switchLbTab') switchLbTab(el.dataset.tab)
    else if (action === 'unlockHero') {
      e.stopPropagation()
      const heroId = el.dataset.heroId
      await tryUnlockHero(heroId, el)
    }
  })

  const volSlider = document.getElementById('vol-slider')
  if (volSlider) volSlider.addEventListener('input', (e) => setVolume(Number(e.target.value)))
}


/* ---- app.js ---- */









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

})();

