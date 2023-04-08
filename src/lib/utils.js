import * as translations from '$lib/translations/index.js';
import { browser } from '$app/environment';
import { UNITS_RAW, BASE_UNITS_RAW as BASE_UNITS, PREFIXES_RAW as PREFIXES} from '$lib/math/type/unit/Data.js';
import { evaluate, unit, createUnit, Unit } from '$lib/math';
export const copyTextToClipboard = (text) => {
    var textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      if(successful) {
        document.body.removeChild(textArea);
        return true
      }
    } catch (err) {
      document.body.removeChild(textArea);
      console.log('Oops, unable to copy: ', err);
    }
  }

export const cleanNumber = (v) => {
  // let sign = v > 0 ? 1 : -1
  let a = Math.abs(v).toString()
  let sid = (a.indexOf(".") || a.indexOf(",")) + 1
  if (!sid) return v
  for(let i = sid; i < a.length; i++) {
    if(a.length - i >= 6 && (a[i] === '9' || a[i] === '0') && a[i] === a[i+1] && a[i] === a[i+2] && a[i] === a[i+3] && a[i] === a[i+4] && a[i] === a[i+5]) {
      //  && a[i] === a[i+5] && a[i] === a[i+6] && a[i] === a[i+7]
      // if(i === sid) {
        // return v
      // }
      // return Number(v).toFixed(i+1-sid)
      return Number(v).toFixed(i-sid)
    }
  }
  return v
}

export const getUnitsToAppend = async(fetch, isNotCreateUnit = false) => {
  let unitsToAppend = {}
  const response = await fetch('/api/currency', {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  });
  let a = await response.json()
  let currency = JSON.parse(a);
  let curs = currency.result.data
  let USD = curs.find(el => el.c === "USD")
  try {
    if(browser && !isNotCreateUnit) {
      // !Unit.isValuelessUnit(USD.c) && createUnit(USD.c, { baseName: "CURRENCY" })
      // !Unit.isValuelessUnit(USD.c.toLowerCase()) && createUnit(USD.c.toLowerCase(), '1 USD', { baseName: "CURRENCY" })
      // !Unit.isValuelessUnit(USD.n.replace(/ /g,"")) && createUnit(USD.n.replace(/ /g,""), '1 USD', { baseName: "CURRENCY" })
      !Unit.isValuelessUnit(USD.c) && createUnit(USD.c, '1 USDollar')
      !Unit.isValuelessUnit(USD.c.toLowerCase()) && createUnit(USD.c.toLowerCase(), '1 USD')
      !Unit.isValuelessUnit(USD.n.replace(/ /g,"")) && createUnit(USD.n.replace(/ /g,""), '1 USD')
    }
  } catch (error) {
    console.log(error)
  }
  for (let i = 0; i < curs.length; i++) {
    if (browser && curs[i].c !== "USD" && !isNotCreateUnit) {
      // !Unit.isValuelessUnit(curs[i].c) && createUnit(curs[i].c, `${1 / Number(curs[i].v)} ${USD.c}`, { baseName: "CURRENCY" })
      !Unit.isValuelessUnit(curs[i].c) && createUnit(curs[i].c, `${1 / Number(curs[i].v)} ${USD.c}`)
      // !Unit.isValuelessUnit(curs[i].c.toLowerCase()) && createUnit(curs[i].c.toLowerCase(), `${1 / Number(curs[i].v)} ${USD.c}`, { baseName: "CURRENCY" })
      !Unit.isValuelessUnit(curs[i].c.toLowerCase()) && createUnit(curs[i].c.toLowerCase(), `${1 / Number(curs[i].v)} ${USD.c}`)
      // !Unit.isValuelessUnit(curs[i].n.replace(/ /g,"")) && createUnit(curs[i].n.replace(/ /g,""), `${1 / Number(curs[i].v)} ${USD.c}`, { baseName: "CURRENCY" })
      !Unit.isValuelessUnit(curs[i].n.replace(/ /g,"")) && createUnit(curs[i].n.replace(/ /g,""), `${1 / Number(curs[i].v)} ${USD.c}`)
    }
    unitsToAppend[curs[i].n.replace(/ /g,'')] = {
      name: curs[i].n.replace(/ /g,''),
      base: BASE_UNITS.CURRENCY,
      prefixes: PREFIXES.NONE,
      value: 1/Number(curs[i].v),
      offset: 0
    }
    unitsToAppend[curs[i].c] = {
      name: curs[i].c,
      base: BASE_UNITS.CURRENCY,
      prefixes: PREFIXES.NONE,
      value: 1/Number(curs[i].v),
      offset: 0
    }
  }
  return unitsToAppend
}