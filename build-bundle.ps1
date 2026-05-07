$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$bundlePath = Join-Path $root 'bundle.js'

$files = @(
  (Join-Path $root 'src\state.js'),
  (Join-Path $root 'src\data\cards.js'),
  (Join-Path $root 'src\data\heroes.js'),
  (Join-Path $root 'src\data\monsters.js'),
  (Join-Path $root 'src\services\sb.js'),
  (Join-Path $root 'src\services\auth.js'),
  (Join-Path $root 'src\services\profile.js'),
  (Join-Path $root 'src\ui\music.js'),
  (Join-Path $root 'src\ui\modals.js'),
  (Join-Path $root 'src\ui\leaderboard.js'),
  (Join-Path $root 'src\ui\codex.js'),
  (Join-Path $root 'src\ui\heroes.js'),
  (Join-Path $root 'src\ui\hunt.js'),
  (Join-Path $root 'src\ui\nav.js'),
  (Join-Path $root 'src\ui\responsive.js'),
  (Join-Path $root 'src\ui\battleView.js'),
  (Join-Path $root 'src\game\battle.js'),
  (Join-Path $root 'src\ui\auth.js'),
  (Join-Path $root 'src\ui\events.js'),
  (Join-Path $root 'app.js')
)

$sb = New-Object System.Text.StringBuilder
$null = $sb.AppendLine('/* bundle.js (generated) */')
$null = $sb.AppendLine('(function(){')

foreach ($f in $files) {
  if (-not (Test-Path -LiteralPath $f)) { throw "Missing file: $f" }
  $raw = Get-Content -LiteralPath $f -Raw -Encoding UTF8

  $raw = [regex]::Replace($raw, '(?ms)^\s*import\s+[\s\S]*?\bfrom\s+["\''][^"\'']+["\'']\s*;?\s*$', '')
  $raw = [regex]::Replace($raw, '(?m)^\s*import\s+["\''][^"\'']+["\'']\s*;?\s*$', '')

  $raw = [regex]::Replace($raw, '(?m)^\s*export\s+default\s+', '')
  $raw = [regex]::Replace($raw, '(?m)^\s*export\s+(const|let|var)\s+', { param($m) $m.Groups[1].Value + ' ' })
  $raw = [regex]::Replace($raw, '(?m)^\s*export\s+async\s+function\s+', 'async function ')
  $raw = [regex]::Replace($raw, '(?m)^\s*export\s+function\s+', 'function ')
  $raw = [regex]::Replace($raw, '(?m)^\s*export\s+class\s+', 'class ')

  $null = $sb.AppendLine('')
  $null = $sb.AppendLine('/* ---- ' + (Split-Path $f -Leaf) + ' ---- */')
  $null = $sb.AppendLine($raw)
}

$null = $sb.AppendLine('})();')
Set-Content -LiteralPath $bundlePath -Value $sb.ToString() -Encoding UTF8

Write-Output "OK: $bundlePath"

