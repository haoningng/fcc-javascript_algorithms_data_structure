function rot13(str) {
  let newStr = "";
  str = str.split("");
  let regex = /\w/;
  for (let char in str) {
    if (regex.test(str[char])) {
      let code = str[char].charCodeAt(0) - 13;
      if (code < 65) {
        code = 91 - (65 - code);
      }
      newStr = newStr.concat(String.fromCharCode(code));
    } else {
      newStr = newStr.concat(str[char]);
    }
  }
  return newStr;
}

rot13("SERR PBQR PNZC");
