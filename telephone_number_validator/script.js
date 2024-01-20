function telephoneCheck(str) {
  if (str[0] == "-") {
    return false;
  }
  let negStr = str.replace(/[^0-9]/, "");
  str = str.replace(/[^0-9()]*/g,"");
  if (negStr[4] == "-" && negStr[0] != "1") {
    return false;
  } else if (negStr[8] == "?") {
    return false;
  }
  let pureStr = str.replace(/[^0-9]*/g,"");
  if (pureStr.length == 11) {
    if (pureStr[0] != 1) {
      return false;
    } else if (str.length == 12) {
      return false;
    }
  } else if (pureStr.length == 10) {
    if (str[0] == "(" && str[4] != ")") {
      return false;
    } else if (str.length == 13) {
      return true;
    } else if (str.length == 11) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
  return true;
}

telephoneCheck("1 555-555-5555");
