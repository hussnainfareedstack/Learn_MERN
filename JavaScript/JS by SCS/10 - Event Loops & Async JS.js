
// How JavaScript Code run?
    // In javascript at start a Global Execution Context run, which have two phases.
    // 1. Memory: In this phase memory is assigned to a variables and a placeholder "undefined" put against them 
    //      and for functions, functions definition put against their functions names.
    // 2. Code: In this phase, Global Execution Context is put in "Call Stack" and code is executed line by line.
    //      and when a function is invoked a new Exection Context Created against this function and put it in Call Stack,
    //      and this Function Execution Context is executed now and when completed popped up from call stack. 

// How CallBack Function works:
    // In setTimeOut-> a callback func and timer is attached, a timer->(setTimeOut) in browser "web API (window)" start and when completed, 
    // the callback func comes in "Callback Queue" and now "Event Loop (Work as a handler)" put this func from callback queue to call stack
    // when Call Stack got empty executing GEC, 
    // where this callback function now executes.

// How Event Listeners Work
    // .addEventListener is provided by the browser to the javascript engine through the "window"  object in form of WEB API
    // which is DOM API.
    // when you write like something "document. " it basically fetches from the DOM API and when you attach .addEventListener it 
    // register a Callback function against the event like "Click".
    // now that event handler remains in the WEB API, until we remove it or close the browser.
    // or when a registerd event happens in the HTML Page, the callback function comes in the Callback queue 
    // from where Event Loop put it in Call Stack 
/*    
    console.log("start");
    document.querySelector("#clickMe")
    .addEventListener("click",function cb(){
        console.log("callback called on button click")
    })
    console.log("end");
*/

// Event Loop
    // it's job is to continuously monitor the callback queue and call stack.
    // and if it sees that Call Stack is empty and there is a function waiting in the callback queue, 
    // then it will takes that function and remove from callback queue and push in Callstack. Now it will executed.

// Why do we need Callback Queue?
    // if user click more than one times then functions comes in callback queue and executed one by one. 
    // which is not possible if directly comes from "Web API"->window to Call Stack. 


// MicroTask Queue: How fetch() from Web API-> window works? -- MicroTask Queue-> have higher periority than Callback Queue
    // MicroTask Queue: Event Loop will give periority to Microtask queue and rather than Callback queue, 
    // means it check Microtask queue first and if it has any func in queue it will push it to Call Stack. 
    // Fetch: fetch is a Web API(window) function that gets data from the server and used for network calls.
    // fetch register a callback function in WEB API and make network call
    // when it gets data(promise) from server then push the callback function from WEB API and to MicroTask Queue.
/*
    console.log("start");

    setTimeout( function cbT() {
        console.log("CBT callback func")
    }, 5000);

    fetch ("https://picsum.photos/v2/list")
    .then(function cbF(){
        console.log("CBF fetch callback called")
    })
    .catch(function(err){
        console.log("Netflix API fetch error: "+err);
    })

    console.log("end");
*/

// Note: Even though there are million of lines executing in GEC and both MicroTask Queue and Callback Queue have func in waiting,
    // the event loop only push callback func to call stack when it got empty executing Global code.

// Q: What task(callback func) can comes in MicroTask Queue?
    // Ans: All func that comes from promises(like fetch, Axios ) and mutation observer(from DOM Tree) goes to MicroTask Queue.

// Callback Queue = Task Queue  -> same name.

// Starvation of Functions in Callback Queue
    // if a callback func in MicroTask Queue creates another callback func in MicroTask Queue and so on, 
    // then callback func in Callback Queue may be waiting for longer time and this called Starvation.

/*  Wow, these are some of the best doubts. ❤️
    1. When does the event loop actually start? 
        - Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job. ❤️

    2.  Are only asynchronous web API callbacks are registered in the web API environment? 
        - YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered 
        in the Web API environment. It's just those async callback functions that go through all this. 
        -- But EventListner Callback functions also goes to WEB API (window) and it is not async, 
            so how you say only async calback func goes to WEB API.

    3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? 
        - Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of 
        event listeners(for example click handlers), the original callbacks stay in the web API environment forever, 
        that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.

    4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 
        No, there are trust issues with setTimeout() 😅. The callback function needs to wait until the Call Stack is empty. 
        So the 0 ms callback might have to wait for 100ms also if the stack is busy.  It's a very beautiful concept, 
        and I've covered this in detail in the next episode of Namaste JavaScript. 🔥

*/

