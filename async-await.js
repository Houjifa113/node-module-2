const task_one = ()=>{

  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      let success = true;
      if(success){
        resolve("Task one completed");
      }else{
        reject("Task one failed");
      }
    }, 1000);
})}

const task_two = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if(success){
        resolve("Task two completed");
      }else{
        reject("Task two failed");
      }
    }, 1000);
  });
}
async function completeTasks(){
 let res = await task_one();
  console.log(res);

  let res2 = await task_two();
  console.log(res2);
}

completeTasks();