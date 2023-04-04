import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ url, params }) {
  if (params.lang === 'en' && !url.search.includes("redirect")) {
    if(!params.qty) {
      throw redirect(301, `${url.pathname.replace("/en", "/")}${url.search.replace("?redirect=1","").replace("&redirect=1","")}`);
    } else {
      throw redirect(301, `${url.pathname.replace("/en", "")}${url.search.replace("?redirect=1","").replace("&redirect=1","")}`);
    }
  }
}