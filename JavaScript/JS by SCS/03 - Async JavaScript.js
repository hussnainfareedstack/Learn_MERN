
/* Topics:
    ● what is sync and async?
    ● What is Async js?
    ● JS is not asynchronous

    ● Story of Async
    ● Single and Multi Threading
    ● callbacks
    ● promises
    ● then and catch
    ● try and catch
    ● async await
    ● 5 use cases from real world

    ● [concept aside]
    ● concurrency and parallelism
    ● throtling

*/

/*//  ● what is sync and async?
//     ● sync: only 1 job running at a time, or one by one running jobs. 
//     ● async: multiple jobs at a time or behind the scene running.
//         ● Some Async code examples in Js: setTimeout, setInterval, promises, fetch, axios, XMLHTTPRequest, async await.
//          else evrything is sync code.
*/

/*//  ● What is Async js?
//      ● when our code/program is depending on another server response, then we try to write asyc code rather than sync to avoid blockage.
//      ● So that our remaining program is runing and when response received from server then run code which is waiting for that info.
//      ● example "setTimeout(callback, timeInMS)" here callback means everytime is any function.
        {
            console.log("hey1");
            
            setTimeout(  () => { console.log("hey2");}  ,  5000); // this is async code, above and below are sync code.

            console.log("hey3");
        }
*/

/*//  ● JS is not asynchronous
//      ● Yes, it is write. Actually consider there are two stacks main and side stack. 
//      ● sync code is running in main stack and async code moves to side stack. when main stack got empty and then check the side stack,
//      ● if its completed "then move it to main stack and shows the code output or execute it" otherwise wait unit completed in side stack.
//  ● Event Loop: that communication between main stack and side stack is called EventLoop. EventLoop moves things from side stack to main.
        {
            console.log("hey1");    //sync
            console.log("hey2");    //sync
            setTimeout(()=>{console.log("hey3");}, 0);      //async
            console.log("hey4");    //sync
        }
        // here main and side is not running at same time. But actually JS computing some part from main and then switch to side stack
        // and compute its some part, and this switching moves too fast between two stacks but not running at same time. 
        // now you understood that JS is single threaded/ or sync only.
*/

/*//  ● Story of Async: 
//      ● described above section already that how it is single threaded or sync.   */

/*//  ● Single and Multi Threading
//      ● described in JS is not async" already. Mutli threading means 2 or more thing working at same time. multi threading
//      ● also called concurrency.  */ 

/*//  ● callbacks
//      ● fetch, axios(a package used to call APIs), promises, setTimeout, setInterval, XMLHTTPRequest,
//      ● when the requests completed from above asyncs then it return to these for output: callbacks, then and catch, async await.
//
//      ● callbacks is a normal func, but runs when request completed from async code.      */

/*//  ● promises
//      ● Promises means that a given code will run in future. There are 2 stages
//          1) Resolve : the code will run. 
//          2) Reject: The code will not run due to any issue or error.
//      ● we can save promises in a variable.
//      ● the request from these 2 stages handle by then and catch. 
//          1) then: if resolve state then it will run in then.
//          2) catch: if reject state then it will handled by catch.
        {
            // Example1: Intro
            // let ans = new Promise((res, rej)=>{
            //     if(false)
            //         return res();
            //     else
            //         return rej();
            // });

            // ans.then( ()=>{ console.log("Resolved."); } ).catch(function(){ console.log("Rejected."); });
        

            //Example2: Generate a random numner 0-9, if it is below 5 then resolved.
            // let ans = new Promise(function(res, rej){
            //     let num= Math.floor(Math.random()*10);

            //     if(num<5)
            //         return res();
            //     else
            //         return rej();
            // });

            // ans
            //     .then(()=>{ 
            //         console.log("Below");
            //     })
            //     .catch(()=>{
            //         console.log("Above");
            //     });


            //Example3: First come to home, then open gate and then close the gate. cook food and eat food. 
            //          open incognito mood. now take sleep as you tired. 

            let ans1 = new Promise((res,rej)=>{
                return res("First come to home.");
            });
            let ans2 = ans1.then((data)=>{
                console.log(data);
                return new Promise((res, rej)=>{
                    return res("Open gate and close gate.");
                });
            });
            let ans3 = ans2.then((data)=>{
                console.log(data);
                return new Promise((res, rej)=>{
                    return res("Cooke Food and eat food.");
                });
            }); 
            let ans4 = ans3.then((data)=>{
                console.log(data);
                return new Promise((res, rej)=>{
                    return res("Open Incognito mood.\nNow take sleep as you tired.");
                });
            }); 
            ans4.then((data)=>{
                console.log(data);
            });


        }
*/


//  ● then and catch : already used and explained above.
//  ● try and catch

/*//  ● async await
//      ● Used to reduce code lines. 
//      ● Method: where async code used make it's nearest function to async and write await where then used or async code written.
        {
            //normal async with then
            // function abcd(){
            //     fetch(`https://randomuser.me/api/`)
            //     .then(function(raw){
            //         return raw.json();
            //     })
            //     .then(function(data){
            //         console.log(data);
            //     });
            // }
            // abcd();

            //async await
            async function abcd(){
                let raw = await fetch(`https://randomuser.me/api/`); // put await everywhere where async code written, here fetch is async
                let data = await raw.json();                            // here raw is async as it is waiting for data to come.
                // agar hum yaha await nai lagaye gay toh yeh execute ho jaye ghi data anay ka wait kiye begair, 
                // kyu ke yeh main stack per hi ha, side stack(async) me nai gayi.
                console.log(data);
            }
            abcd();
        }
*/

/*//  ● 5 use cases from real world
//    ● Nodejs me db me async await .then ka kaafi use kertay
//    ● fetch and axios: React me kaafi use hotay jab backend se data latay toh (async await, .then) 
//    ● setTimeout: async me use hotay
//    ● setInterval: yeh bhi async me jab bhi koi data lana ho or wait kerna ho.
*/

//  ● [concept aside]
//      ● concurrency and parallelism
//          ● Concurrency: main and side stack koh side by side chalana, yah 2 codes koh 1 hi time chalana. 
//          ● Parallelism: depends on processors and it's cores to run code
//      ● throtling: kisi code ki number of executions koh control kerna



// practice
/*let x=10;

const y=()=>{
    console.log(x);
                    //if x is not decalred or defined anywhere within the function then it will access outside x value,
                    // otherwise inside. same as c++.
    let x=20;
    // var x=20;
};
y();
*/

//console.log(a); //for let it says cannot access a before initialization, but for var undefined 
                    //because for var hoisting done, with initializing as ‘default’ value 
                    //let and const : Hoisting is done, but not initialized (this is the reason for the error 
                    //when we access the let variable before declaration/initialization
//let a=10;

//------------------------------------Hoisting var let const------------------------------------//

//hoisting for var:
//hoisting done, with initializing as ‘default’ value

//hoisting for let and const:
//Hoisting is done, but not initialized (this is the reason for the error 
//when we access the let variable before declaration/initialization


// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a let variable before it is declared will result in a ReferenceError.
// The variable is in a "temporal dead zone" from the start of the block until it is declared:

//----------------------------Scope of var let const-------------------------------------------//

//var: The scope of a var variable is functional scope.
//let and const: The scope of a let and const variable is block scope.




