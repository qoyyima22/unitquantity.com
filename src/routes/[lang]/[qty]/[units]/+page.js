import * as translations from '$lib/translations/index.js';
import { supportedLangs } from "$lib/utils.js"
// import { building } from '$app/environment';
export const prerender = false;
export const csr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, ...x }) {
  let TRANSLATIONS = translations.default[supportedLangs.includes(params.lang) ? params.lang : 'en'] || {}
  let ACTIVE_TAB = params.qty?.toUpperCase()
  let UNIT0 = params.units.split("-to-")?.[0]?.replace("-","") || x.url.searchParams.get('unit0')
  let UNIT1 = params.units.split("-to-")?.[1]?.replace("-","") || x.url.searchParams.get('unit1')
  let VALUE0 = x.url.searchParams.get('value0')
  return {
    translations: {
      ...TRANSLATIONS
    },
    converter: {
      activeTab: ACTIVE_TAB,
      activeUnit0: UNIT0,
      activeUnit1: UNIT1,
      model0: VALUE0 || 0
    }
  }
}