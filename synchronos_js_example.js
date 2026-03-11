for(let i=0; i<100; i++) {
    console.log(i);  //Bigger task excuting 
}

let a = 1 + 2; //Smaller task excuting

let b = 3 + 4; //Smaller task excuting

console.log(a);
console.log(b);
//Main excution stack is synchronos and single threaded. So, bigger task will be excuted first and then smaller task will be excuted.