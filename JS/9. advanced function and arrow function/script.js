// function greet() {
//     console.log("hello world");
// }
 
//Arrow functions

// const greet = () => {
//   console.log("hello world");
// }


const greet = (count) => {
    for(let i=0; i< count ; i++)
    console.log("hello world");
}

greet(5);


const square = (num) => num * num;  //(no curly bracket)---return not req in this 


const add = (num) => {
       return num + num ;   //(curly bracket)--- return req in this
     };  


console.log(square(3));
console.log(add(3));