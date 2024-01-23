
// How JavaScript Code run?
    // In javascript at start a Global Execution Context run, which have two phases.
    // 1. Memory: In this phase memory is assigned to a variables and a placeholder "undefined" put against them 
    //      and for functions, functions definition put against their functions names.
    // 2. Code: In this phase, Global Execution COntext is put in "Call Stack" and code is executed line by line.
    //      and when a function is invoked a new Exection Context Create against this function and put it in Call Stack,
    //      and this Function Execution Context is executed now and when completed popped up from call stack. 

/*//   ● Closure - Functions along with its lexical scope binded togather called closure.

    function y(){
        let a = 7 ;
        return function x(){
            console.log(a);
        }
        a=100;
        //return x; //same as above without return
    }
    let a = y(); // as we know when function executed it's execution context deleted and removed from call stack, 
    //so how function a can access let a=7; there comes closure. when function returned it's lexical scope also retunred. 
    console.log(a);
    a();   // as we know 

    // closure ratined if more parents
    function z1(){
        let b=900;
        function y1(){
            let a = 7 ;
            function x1(){
                console.log(a,b);
            }
            x1()
        }
        y1()
    }
    z1()

//
*/

/*//   ● SetTimeOut closure
    // print 1 to 5 in 1 ,2 3, ... seconds

    function y(){
        for(let i=1; i<=5; i++){
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        }
    }
    function y1(){
        for(var i=1; i<=5; i++){
            function close(x){
                setTimeout(() => {
                    console.log(x);
                }, x * 1000);
            }
            close(i)
        }
    }
    y()

    */

/*//   ● Closure is for Data Hiding and Encapsulation
    //so that no one can change value of variables.

    // function counter(){
    //     var count=0;
    //     return function incrementCounter(){
    //         count++;
    //         console.log(count)
    //     }
    // }

    // var counter1 = counter();
    // counter1();counter1();
    
    // var counter2 = counter();
    // counter2();counter2();counter2();
    
    //-------------------------------------------------------------------------------------------------------------//

    //=>●●  is it scalelabe, like we have to decrement also? no for that we have to create contrcutor function.

    function Counter(){
        let count =0;
        console.log(this);
        this.increamentCounter = ()=>{ count++; console.log(count)}
        this.decreamentCounter = ()=>{ count--; console.log(count) }
    }

    const counter1 = new Counter();
    const counter2 = new Counter();
    counter1.increamentCounter();counter1.increamentCounter();counter1.increamentCounter();counter1.decreamentCounter()
    counter2.increamentCounter();
*/
/*//    ● Smart Garbage Collector.
        //Garbage Collector is a program which freeze the memory of unused variables but as in closure inner function has 
        // closure with parent function and variables in that scope which are not used smartly Grabade collected.

        function x(){
            var i=10, j=20;
            return function y(){
                console.log(i);  // when at here you can check by console.log a=that j is not not defined, 
                //which is smartly garbage collected
            }
        }
        var fn1=x();
        fn1()
*/        

