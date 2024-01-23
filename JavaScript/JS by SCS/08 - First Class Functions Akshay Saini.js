
/*// ● Function Statement - aka Function Declaration  VS Function Expression
    a()
    b()
    function a(){
        console.log("a called")
    }
    //a()

    // ● Function Expression
    var b= function(){
        console.log("b called")
    }
    //b()

    // -> the difference between function statement and function expression is basicaly hoisting, 
    // a will run as function copied in first phase of "Execution Context" while as b is variable, it is assigned placeholder "undefined" 
*/

/*// ● Anonymous Function
    // a function without any name is anonymus function, we use anonymous functions when we want to store it in a variable
    // function (){

    // }
*/

/*// ● Named Function Expression
    // a function which is named
    var bb= function xyz(){
        console.log("bb called", xyz)
    }
    // here you can see that we are assiging a function to variable also, in this way xyz is not in global scope but in var scope
    // so we cannot call it via xyz but can call it inside as you can see I have written in console.log(xyz)
    bb();
    //xyz();
*/

/*// ● Difference betweem paramters and Arguments
    function pa(parameter1, parameter2){
        console.log(parameter1, parameter2)
    }
    let argument1=1, argument2=2;
    pa(argument1,argument2)
*/

/*// ● First Class Functions    - aka     First Class Citizens
    // the ability to use function as values or pass to another function or get function returned from function 
    //are called first class function
    var fcf = function (xyz){
        return xyz;
    }

    function xyz(){
        console.log(xyz)
    }

    fcf(xyz)();
   ( fcf(function(){ console.log("anonymous")}) )();
*/

// ● Arrow Functions
    // function expression , function statements can be written via arrow functions also. 
    // we will study arrow functions in later.

 