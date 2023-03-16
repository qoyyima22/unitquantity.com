import * as translations from '$lib/translations/index.js';
// import { building } from '$app/environment';
export const prerender = false;
export const csr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, ...x }) {
  let TRANSLATIONS = translations.default[params.lang] || {}
  let ACTIVE_TAB = x.url.searchParams.get('qty')
  let UNIT0 = x.url.searchParams.get('unit0')
  let UNIT1 = x.url.searchParams.get('unit1')
  let VALUE0 = x.url.searchParams.get('value0')
  const response = await fetch('/api/currency', {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  });
  let total = await response.json();
  return {
    translations: {
      ...TRANSLATIONS
    },
    converter: {
      activeTab: ACTIVE_TAB || 'NONE',
      activeUnit0: UNIT0,
      activeUnit1: UNIT1,
      model0: VALUE0 || 1,
      currency: total
    }
  }
}