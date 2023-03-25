import * as translations from '$lib/translations/index.js';
// import { building } from '$app/environment';
export const prerender = false;
export const csr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, ...x }) {
  let TRANSLATIONS = translations.default['en'] || {}
  let ACTIVE_TAB = x.url.searchParams.get('qty')?.toUpperCase()
  let UNIT0 = x.url.searchParams.get('unit0')
  let UNIT1 = x.url.searchParams.get('unit1')
  let VALUE0 = x.url.searchParams.get('value0')
  return {
    translations: {
      ...TRANSLATIONS
    },
    converter: {
      activeTab: ACTIVE_TAB || 'NONE',
      activeUnit0: UNIT0,
      activeUnit1: UNIT1,
      model0: VALUE0 || 0
    }
  }
}