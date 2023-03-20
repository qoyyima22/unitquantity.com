import * as translations from '$lib/translations/index.js';
import { browser } from '$app/environment';
import { UNITS_RAW, BASE_UNITS_RAW as BASE_UNITS, PREFIXES_RAW as PREFIXES} from '$lib/math/type/unit/Data.js';
import { evaluate, unit, createUnit, Unit } from '$lib/math';
export const prerender = true;
export const csr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, ...x }) {
  let unitsToAppend = {}
  const response = await fetch('/api/currency', {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  });
  let currency = JSON.parse(await response.json());
  let curs = currency.result.data
  let USD = curs.find(el => el.c === "USD")
  try {
    // browser && console.log(typeof unit("USD"), "SKOKEOKOEK")
    if(browser) {
      !Unit.isValuelessUnit(USD.c) && createUnit(USD.c, { baseName: "CURRENCY" })
      !Unit.isValuelessUnit(USD.c.toLowerCase()) && createUnit(USD.c.toLowerCase(), '1 USD', { baseName: "CURRENCY" })
      !Unit.isValuelessUnit(USD.n.replace(/ /g,"")) && createUnit(USD.n.replace(/ /g,""), '1 USD', { baseName: "CURRENCY" })
    }
  } catch (error) {
    console.log(error)
  }
  for (let i = 0; i < curs.length; i++) {
    if (browser && curs[i].c !== "USD") {
      !Unit.isValuelessUnit(curs[i].c) && createUnit(curs[i].c, `${1 / Number(curs[i].v)} ${USD.c}`, { baseName: "CURRENCY" })
      !Unit.isValuelessUnit(curs[i].c.toLowerCase()) && createUnit(curs[i].c.toLowerCase(), `${1 / Number(curs[i].v)} ${USD.c}`, { baseName: "CURRENCY" })
      !Unit.isValuelessUnit(curs[i].n.replace(/ /g,"")) && createUnit(curs[i].n.replace(/ /g,""), `${1 / Number(curs[i].v)} ${USD.c}`, { baseName: "CURRENCY" })
    }
    unitsToAppend[curs[i].n.replace(/ /g,'')] = {
      // name: curs[i].n,
      name: curs[i].n.replace(/ /g,''),
      base: BASE_UNITS.CURRENCY,
      prefixes: PREFIXES.NONE,
      value: Number(curs[i].v),
      offset: 0
    }
    unitsToAppend[curs[i].c] = {
      name: curs[i].c,
      base: BASE_UNITS.CURRENCY,
      prefixes: PREFIXES.NONE,
      value: Number(curs[i].v),
      offset: 0
    }
    // unitsToAppend[curs[i].c.toLowerCase()] = {
    //   name: curs[i].c.toLowerCase(),
    //   base: BASE_UNITS.CURRENCY,
    //   prefixes: PREFIXES.NONE,
    //   value: Number(curs[i].v),
    //   offset: 0
    // }
  }
  // console.log(unit(50, "USD").toNumber("IDR"))
  return {
    // translations: {
    //   ...TRANSLATIONS
    // },
    converter: {
      unitsToAppend
      // activeTab: ACTIVE_TAB || 'NONE',
      // activeUnit0: UNIT0,
      // activeUnit1: UNIT1,
      // model0: VALUE0 || 0
    }
  }
}