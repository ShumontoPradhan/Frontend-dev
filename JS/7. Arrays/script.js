const words = ["apple","bananna", "cherry", 12 , true , {name: "shum"}, function hello() {console.log("hello world");}];

const newWords= words;
newWords[6]= "kiwi"

console.log(words[6]);
console.log(words.length);
console.log(newWords);


const nums = [5,2,6,4,1,3,9,8,7];

console.log(nums.indexOf(3));
console.log(nums.includes(30)); //true or false
nums.push("shum");  //add new element in array end
nums.unshift("shum");  //add new element at start
nums.shift(); // remove first element
nums.pop();  // removes last item of array  ,, we can pop the whole array by using it multiple times
nums.sort();  //sorting the whole array
console.log(nums);

const subArray = nums.slice(2 , 7); //it prints the enements in the index range--the last index in exclusive and the first in inclusive in the bracket (inclusive, exclusive) //index in the bracket
console.log(subArray);

