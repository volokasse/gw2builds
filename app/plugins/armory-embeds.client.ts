export default defineNuxtPlugin(() => {
  // 1. on monkey-patch AVANT de charger la lib
  const GW2_ORIGIN = 'https://api.guildwars2.com'

  const origOpen = window.XMLHttpRequest.prototype.open
  // @ts-ignore
  window.XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
    if (typeof url === 'string' && url.startsWith(GW2_ORIGIN)) {
      // on réécrit vers notre proxy Nuxt
      // ex: https://api.guildwars2.com/v2/... -> /api/gw2/v2/...
      url = '/api/gw2' + url.slice(GW2_ORIGIN.length)
    }
    return origOpen.call(this, method, url, async, user, password)
  }

  // 2. on charge le script armory-embeds une seule fois
  if (document.querySelector('script[data-armory-embeds]')) {
    return
  }

  const s = document.createElement('script')
  s.src = 'https://unpkg.com/armory-embeds@0.4.3/armory-embeds.js'
  s.async = true
  s.defer = true
  s.setAttribute('data-armory-embeds', 'true')

  s.addEventListener('load', () => {
    window.dispatchEvent(new CustomEvent('armory-embeds:ready'))
  })

  document.head.appendChild(s)
})
