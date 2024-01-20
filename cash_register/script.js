let answer = {
  status: "OPEN",
  change: []
}

function checkCashRegister(price, cash, cid) {
  answer.status = "OPEN";
  answer.change = [];
  let change = cash * 100 - price * 100;

  let counter = change;
  let changeArr = [];
  let cid2 = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

  cid.map(function (obj) {
     return obj[0] == "PENNY" ? changeArr.push(1) : obj[0] == "NICKEL" ? changeArr.push(5) : obj[0] == "DIME" ? changeArr.push(10) : obj[0] == "QUARTER" ? changeArr.push(25) : obj[0] == "ONE" ? changeArr.push(100) : obj[0] == "FIVE" ? changeArr.push(500) : obj[0] == "TEN" ? changeArr.push(1000) : obj[0] == "TWENTY" ? changeArr.push(2000) : changeArr.push(10000);
  });




  while (counter != 0) {

  if (cid[0][1] < 0.01) {
    answer.status = "INSUFFICIENT_FUNDS";
    console.log(answer);
    return answer;
  } 

  for (let i = cid.length - 1; i >= 0; i--) {
    if (changeArr[i] <= counter && cid[i][1] >= changeArr[i]/100) {
      cid[i][1] = Math.round(cid[i][1]*100)/100 - changeArr[i]/100;
      counter = counter - changeArr[i];
      cid2[i][1] += (Math.round(changeArr[i])/100);
      break;
    }
  }


}
   if (cid[0][1] == 0) {
    answer.status = "CLOSED";
    cid2[0][1] = 0.5;
    answer.change = cid2;
    console.log(answer);
    return answer;
  } 

     cid2 = cid2.filter(obj => obj[1] != 0).reverse();
      answer.change = cid2;
      console.log(answer);
      return (answer);

}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
