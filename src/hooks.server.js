import { dev } from '$app/environment';

export async function handle({ event, resolve }) {
    let dir = "ltr"
    if(event.params.lang === "ar") {
        dir = "rtl"
    }
    if (dev) {
      const { fallBackPlatformToMiniFlareInDev } = await import('./miniflare');
      event.platform = await fallBackPlatformToMiniFlareInDev(event.platform);
    }
    return resolve(event, {
      transformPageChunk: ({ html }) => html.replace('%lang%', event.params.lang).replace("%dir%",dir)
    });
  }