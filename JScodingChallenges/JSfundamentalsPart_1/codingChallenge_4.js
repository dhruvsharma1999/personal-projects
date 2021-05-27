/* 


*/

const billValue = 500;

const tipPercent = billValue >= 50 && billValue <= 300 ? 0.15 : 0.2;
const tip = billValue * tipPercent;

console.log(`Your bill Value is: ${billValue}
Your Tip percent: ${tipPercent}
=======================
Your Total Bill Amount is ${billValue + tip}`);
