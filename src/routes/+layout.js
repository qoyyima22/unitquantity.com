import { getUnitsToAppend } from '$lib/utils.js';
export const prerender = false;
export const csr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, ...x }) {
  let unitsToAppend = await getUnitsToAppend(fetch)
  return {
    converter: {
      unitsToAppend
    }
  }
}