"striict";

const calcTotalBillAmount = (billAmount, tipValues) => {
  const totalBillAmountArray = [];
  /*
  calTotalBillAmount(billAmount, tipValues):
    input: Takes two array as input
            1. array contaning amount of bills
            2. array containing amount of tips
    output: Return an array containing bill amount + tip amount */
  for (let i = 0; i < billAmount.length; i++) {
    const totalBill = billAmount[i] * tipValues[i] + billAmount[i];
    totalBillAmountArray.push(totalBill);
  }

  return totalBillAmountArray;
};

const calcTipArray = (bill) => {
  /*
    input: array containing amount of bill.
    returns: array containing the percentage of bill that customer needs to pay according to the amount of bill

    */
  const tipAraay = [];
  for (const el of bill) {
    const tip = el >= 50 && el <= 300 ? 0.15 : 0.2;
    tipAraay.push(tip);
  }
  return tipAraay;
};

const bills = [125, 555, 44];
const tips = calcTipArray(bills);
console.log(bills);
console.log(tips);
console.log(calcTotalBillAmount(bills, tips));
