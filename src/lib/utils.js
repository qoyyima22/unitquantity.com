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
    if(a.length - i >= 7 && (a[i] === '9' || a[i] === '0') && a[i] === a[i+1] && a[i] === a[i+2] && a[i] === a[i+3] && a[i] === a[i+4] && a[i] === a[i+5] && a[i] === a[i+6] && a[i] === a[i+7]) {
      // if(i === sid) {
        // return v
      // }
      // return Number(v).toFixed(i+1-sid)
      return Number(v).toFixed(i-sid)
    }
  }
  return v
}