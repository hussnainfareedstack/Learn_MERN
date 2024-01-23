
/*// ● What is a CallBack Function in javaScript
// A function which you pass to another functions

    setTimeout(function () {
        console.log("timer");
    }, 6000);

    function x(y) { // now it's a reponsibility of x to call it later when required.
        console.log("x");
        y();
    }
    x(function y() {
        console.log("y");
    }); // here y is a callback function
*/
// Javascript is a synchronous and single threaded language

/*// ● Blocking the main thread
        // to avoid the blocking of main thread we put the function or code who takes time to complete in a setTimeOut
        // so that main thread never blocks or wait for someone.
*/

/*// ● Power of callbacks ?
        // so due to First class functions, call bac functions and the ability to pass function makes javascript able to do async tasks.
        // to discuss furhter we will cover in Event Loop
*/

/*// ● Deep about Event Listeners - create EventListener
    document.querySelector("#clickMe").addEventListener("click", function xyz() {
        console.log("Button Clicked.");
    });
*/

/*// ● Closure Demo with Event Listeners
    // print how many times button clicked
    function attachEventListener() {
        let count = 0;

        document.querySelector("#clickMe")
        .addEventListener("click", function xyz() {
            console.log("Button Clicked.", ++count);
        });
    }
    attachEventListener()
*/

/*// ● Scope Demo with Event Listeners
    // you can see event Listerns in element section by cicking on which you want to see listeners in HTML document
*/

// ● Garbage Collection and removeEventListeners
    // EventListerns are heavy and more when we have closures with them, so we sometimes remove Event Listeners to faster our page.
