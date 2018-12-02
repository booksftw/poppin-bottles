/*
For every two empty bottles, you can get one free (full) bottle of pop
For every four bottle caps, you can get one free (full) bottle of pop
Each bottle of pop costs $2 to purchase
*/


// let popBottle;
// let customerInvestment;
let popBottlePrice = 2;

let userInput = process.argv[2];
console.log(userInput);


// $20 = 10 bottles of pop
function popMachine(custInvest) {
  let custBottleTotal;
  let receipt = {
    totalBottles: 0,
    bottlesLeftOver: 0,
    capsLeftOver: 0,
    customerMoneyBack: 0,
    totalRedeemed:{
      bottles: 0,
      caps: 0
    }
  };

  let custPurchaseBottleAmount = Math.floor(custInvest / popBottlePrice);
  receipt.totalBottles += custPurchaseBottleAmount;
  console.log(custPurchaseBottleAmount, 'cust purchase amount');

  // Bonus add to receipt the amount of change
  let customerMoneyBack = (custInvest/popBottlePrice) - custPurchaseBottleAmount;
  receipt.customerMoneyBack = customerMoneyBack;

  // Count, redeem, and update the receipt.
  //
  let bottlesLeftOver = custPurchaseBottleAmount % 2;
  let freeBottleAmtForEmptyBottle = ( (custPurchaseBottleAmount - bottlesLeftOver) / 2 );
  receipt.bottlesLeftOver = bottlesLeftOver; receipt.totalRedeemed.bottles = freeBottleAmtForEmptyBottle;
  receipt.totalBottles += freeBottleAmtForEmptyBottle;


  let capsLeftOver = custPurchaseBottleAmount % 4;
  let freeBottleAmtForCaps = ( (custPurchaseBottleAmount - capsLeftOver) / 4 );
  receipt.capsLeftOver = capsLeftOver; receipt.totalRedeemed.caps = freeBottleAmtForCaps;
  receipt.totalBottles += freeBottleAmtForCaps;

  // bottleCap
  console.log(receipt);
  custBottleTotal = custPurchaseBottleAmount
}

popMachine(userInput);