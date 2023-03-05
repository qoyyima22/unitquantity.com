export function handle({ event, resolve }) {
    let dir = "ltr"
    if(event.params.lang === "ar") {
        dir = "rtl"
    }
    return resolve(event, {
      transformPageChunk: ({ html }) => html.replace('%lang%', event.params.lang).replace("%dir%",dir)
    });
  }