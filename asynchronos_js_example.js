// setTimeout,api all, axios, dom, file system, network request are asynchronous task in js. Those task are Ofloaded to another thread which works seperate from the small main thread.  the bigger thread is called api end or library runner

setTimeout(() => {
  console.log("one waiting");
}, 1000);//Asynchronous task excuting after smaller tasks

for(let i=0; i<100; i++) {
    console.log(i);  //smaller task excuting 
}

let a = 1 + 2; //Smaller task excuting

let b = 3 + 4; //Smaller task excuting

console.log(a);
console.log(b);