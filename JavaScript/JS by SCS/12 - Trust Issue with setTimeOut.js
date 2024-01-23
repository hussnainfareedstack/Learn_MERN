/*
console.log("start")

setTimeout(() => {
    console.log("Callback timeout called")
}, 5000);

console.log("end")

// blocking main thread (Call Stack) for 10 second to understand Global Execution Context.
let startTime = new Date().getTime();
console.log(startTime);
let endTime = startTime;

while( endTime < startTime + 10000){
    endTime = new Date().getTime();   // although  seTtimeOut comes after 5s in callback queue but this got is still running for 10s 
                                      // until this(GEC) not completed which will take min=10s calbback will not comes in call stack.
}

console.log("while loop expired.");

*/
