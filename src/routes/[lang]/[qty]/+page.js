import * as translations from '$lib/translations/index.js';
import { UNITS_RAW, BASE_UNITS_RAW, PREFIXES_RAW } from '$lib/math/type/unit/Data.js';
export const prerender = false;
export const csr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, ...x }) {
  let TRANSLATIONS = translations.default[params.lang] || {}
  let ACTIVE_TAB = params.qty?.toUpperCase()
  let UNIT0 = x.url.searchParams.get('unit0')
  let UNIT1 = x.url.searchParams.get('unit1')
  let VALUE0 = x.url.searchParams.get('value0')
  let units = getUnits(ACTIVE_TAB, TRANSLATIONS);
  let links = []
  for (let i = 0; i < units.length; i++) {
    let a = units[i]
    for (let j = 0; j < units.length; j++) {
      let b = units[j]
      if (a.name !== b.name) {
        links.push({
          v: `/${params.lang}/${params.qty}/${a.prefix ? `${a.prefix}-${a.baseName}` : a.name}-to-${b.prefix ? `${b.prefix}-${b.baseName}` : b.name}`,
          w: `${a.dName} to ${b.dName}`
        })
      }
    }
  }
  return {
    translations: {
      ...TRANSLATIONS
    },
    converter: {
      activeTab: ACTIVE_TAB,
      activeUnit0: UNIT0,
      activeUnit1: UNIT1,
      model0: VALUE0 || 0
    },
    links
  }
}

let getUnits = (activeTab, translations) => {
  let [pr, un] = [translations.PREFIXES, translations.UNITS]
  let temp;
  if (activeTab === 'NONE') {
    temp = [
      ...Object.keys(PREFIXES_RAW.LONG).map((el) => ({ ...PREFIXES_RAW.LONG[el] })),
      ...Object.keys(PREFIXES_RAW.SHORT).map((el) => ({ ...PREFIXES_RAW.SHORT[el] }))
    ];
  } else {
    let allUnits = { ...UNITS_RAW() }
    temp = activeTab ? Object.keys(allUnits)
      .map((el) => ({ ...allUnits[el] }))
      .filter(
        (el) =>
          el.base.dimensions.join('') ===
          BASE_UNITS_RAW[activeTab]?.dimensions.join('')
      ) : []
  }
  let res = [];
  let res2 = [];
  let checked = [];
  temp.forEach((el) => {
    if (Object.keys(el.prefixes || {}).length > 1) {
      Object.keys(el.prefixes).forEach((el2) => {
        res.push({
          name: `${el2}${el.name}`,
          value: el.prefixes[el2].value * el.value,
          offset: el.offset,
          // dName: (pr?.[el2] || un?.[el.name]) ? `${pr[el2] || ""}${un[el.name] || el.name}` : `${el2}${el.name}`,
					dName: (pr?.[el2] || un?.[el.name]) ? `${un[el.name].includes("{pr}")? "" : (pr[el2] || "")}${un[el.name].replace("{pr}", (pr[el2] || "")) || el.name}` : `${el2}${el.name}`,
          prefix: el2,
          baseName: el.name
        });
      });
    } else if (activeTab === "NONE") {
      res.push({ ...el, dName: pr?.[el.name] || el.name });
    } else {
      res.push({ ...el, dName: un?.[el.name] || el.name });
    }
  });
  res.forEach((el) => {
    if (!checked.includes(`${el.value}-${el.offset}`)) {
      el.alternativeNames = res
        .filter(
          (el2) => el.value === el2.value && el.offset === el2.offset && el.name !== el2.name
        )
        .map((el3) => el3.name);
      res2.push(el);
      checked.push(`${el.value}-${el.offset}`);
    }
  });
  return res2.length ? res2 : res;
};