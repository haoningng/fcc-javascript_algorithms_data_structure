function convertToRoman(num) {
  num = String(num);
  const arr = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const arrTen = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const arrHun = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const arrTho = ["", "M", "MM", "MMM"];
  if (num < 10) {
    return arr[num];
  } else if (num < 100) {
    return arrTen[Number(num[0])] + arr[Number(num[1])];
  } else if (num < 1000) {
    return arrHun[Number(num[0])] + arrTen[Number(num[1])] + arr[Number(num[2])];
  } else if (num < 10000) {
    return arrTho[Number(num[0])] + arrHun[Number(num[1])] + arrTen[Number(num[2])] + arr[Number(num[3])];
  }
 return num;
}

convertToRoman(36);
