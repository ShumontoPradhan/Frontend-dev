

// asynchronous function -- the statement will be visible after some time specified by you

console.log("hello");

setTimeout(function () {
  console.log("this will execute after 4 seconds");
} , 4000);     //4000 ms is 4 seconds

console.log("shum");


// this wont work 

// function getCheese() {
//   setTimeout(() => {
//     const cheese = "🧀"
//     consloe.log(" here is cheese", cheese);
//     return cheese;
//   }, 3000);
// }

// this will work 

function getCheese(callback) {
  setTimeout(() => {
    const cheese = "🧀";
    console.log(" here is cheese", cheese);
    callback(cheese);
  }, 3000);
}

getCheese((cheese) => {
  console.log("got the cheese", cheese);
} );



//....................................................................


function getCheese(callback) {
  setTimeout(() => {
    const cheese = "🧀";
    console.log(" here is cheese", cheese);
    callback(cheese);
  }, 3000);
}

getCheese((cheese) => {
  console.log("got the cheese", cheese);
} );

//.......................................//


const fn = () => {
  console.log("nothing");       //when we keep passing arguments one after another and one inside one it leads to call back hell
}


const callback = (arg, fn) => {
  console.log(arg);
  fn()
}

const loadScript = (src , callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("shum", fn);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)