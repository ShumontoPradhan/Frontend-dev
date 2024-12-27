console.log('This Is Promise');

let prom1 = new Promise((resolve, reject)=>{
  let a = Math.random();
  if(a < 0.5){
    reject("no random was supporting you");
  }
  else{
    setTimeout(() => {
        console.log('yes im done')
        resolve('shum')
    }, 3000);
  }
})

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a < 0.5){
      reject("no random was supporting you 2");
    }
    else{
      setTimeout(() => {
          console.log('yes im done 2')
          resolve('shum 2')
      }, 3000);
    }
  })
  
  

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let p3 = Promise.all([prom1, prom2])
p3.then((a)=> {
    console.log(a)
}).catch(err=>{
    console.log(err)
})
//...............................................
let p4 = Promise.allSettled([prom1, prom2]);
p4.then((results) => {
    console.log(results);
}).catch(err => {
    console.log(err);
});
//................................................
let p5 = Promise.race([prom1, prom2]);
p5.then((result) => {
    console.log(result);
}).catch(err => {
    console.log(err);
});

