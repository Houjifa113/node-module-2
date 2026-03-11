value = 90;
value = function(){};

function callsomeone(data){
    data(); 
}

cb = function(){
    console.log("I am a callback function");
}

callsomeone(cb);  

