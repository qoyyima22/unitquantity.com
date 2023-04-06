import { dev } from '$app/environment';
import { supportedLangs } from '$lib/utils';

export async function handle({ event, resolve }) {
    let dir = "ltr"
    if(event.params.lang === "ar") {
        dir = "rtl"
    }
    if (dev) {
      const { fallBackPlatformToMiniFlareInDev } = await import('./miniflare');
      event.platform = await fallBackPlatformToMiniFlareInDev(event.platform);
    }
    if(!supportedLangs.includes(event.params.lang) && !event.url.pathname.includes("/api/") && !event.url.origin.includes('sveltekit-prerender')) {
      const urlPath = `${event.url.origin}/en${event.url.pathname === "/" ? "": event.url.pathname}${event.url.search ? event.url.search+'&redirect=1' : '?redirect=1'}`;
      console.log(urlPath, "ini urlPath")
      const proxiedUrl = new URL(urlPath);
      return fetch(proxiedUrl.toString(), {
        body: event.request.body,
        method: event.request.method,
        headers: event.request.headers,
      }).catch((err) => {
        console.log("Could not proxy API request: ", err);
        throw err;
      });
    }
    return resolve(event, {
      transformPageChunk: ({ html }) => html.replace('%lang%', event.params.lang).replace("%dir%",dir)
    });
  }