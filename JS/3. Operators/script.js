const firstNumber = 2;
const secondNumber = 5;

// const result = firstNumber + secondNumber;
// const result = firstNumber % secondNumber;
const result = firstNumber || secondNumber;

console.log(!secondNumber);

const result2 = firstNumber ** secondNumber;
console.log(result2)

// console.log(result);

// 3 = 0*4 + 3

let thirdNumber = 12;
thirdNumber **= 4; // thirdNumber = thirdNumber power 4

console.log(result);  

const first = 3;
const second ='3';

const res = first == second;   //type independent comparison ...true
const res1 = first === second;   //type dependent comparison ...false
const res2 = first !== second;   //    ...true

console.log(res);
console.log(res1);
console.log(res2);