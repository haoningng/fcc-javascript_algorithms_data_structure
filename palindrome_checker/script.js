function palindrome(str) {
  str = str.toLowerCase().replaceAll(/\W+|_*/g, "");
  if (str.length % 2 == 0) {
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] != str[str.length - (1 + i)]){
return false;
    }
  }
  } else {
    for (let i = 0; i < str.length/2 + 1; i++) {
      if (str[i] != str[str.length - (1 + i)]){
return false; }
    }
  }
  return true;
}

palindrome("1 eye for of 1 eye.");
