const call_weather_api = new Promise((resolve, reject)=> {

  setInterval(() => {
    let success = true;
    if(success) {
      resolve ("task 1 completed successfully");
    }else {
      reject ("task 1failed");
    }
  }, 1000);
})


const call_weather_api2 = new Promise((resolve, reject)=> {

  setInterval(() => {
    let success = true;
    if(success) {
      resolve ("task 2 completed successfully");
    }else {
      reject ("task 2 failed");
    }
  }, 1000);
})

call_weather_api.then((result)=> {
  console.log(result);
  call_weather_api2.then((res)=> {
    console.log(res);
  })
})