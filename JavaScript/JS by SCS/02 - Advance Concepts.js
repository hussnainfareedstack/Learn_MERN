
/* Topics:
  ● Higher End Functions
  ● Constructor Functions
  ● first class functions
  ● new Keyword
  ● iife
  ● prototype
  ● prototypal inheritance
  ● this call apply bind
  ● pure and impure functions
  ● closures.
*/

/*// ○● Higher End Functions: 
//      ● essay func joh paramter me another function accept kery ya function return kery.
        {
            function abcd(){        // these funcs used in closures
                return function(){};
            } 
            // 2nd example
            function f2(val){
        
            }
            f2(function(){});
        
            //3rd example: like forEach function is a higher order func because it always accept a func in parameter. 
        } 
*/

/*// ○● Constructor Functions:
//    ● jab apko almost ek hi properties ke bohat se elements chahiye ho.
//    ● when this func invoked with new keyword, returns object 
//          and when we used this keyword inside it, return an object with all it's properties and methods.
//    ● constructor func have "this" keyword used in it and called with new keyword
        {
            function circularButton(color){
                this.radius = 2;
                this.color = color;
                this.icon = false;
                this.pressable = true;
            }

            var greenBtn = new circularButton("Green");
            var redBtn = new circularButton("Red");
        }
*/

/*//  ○● First Class Function
//      ● if function are treated as variable and we can save them, pass them to another function
        {
            var v = function(){
                console.log("First class func.");
            }

            console.log(v());
        }
*/

/*//  ○● new Keyword
//      ● new keyword creates a blank object and run func written after new,
//              and add properties and methods written after this keyword in that func. 
//              Now a new object is created. as we seen in constructor func Practice
        {
            function abcd(){
                this.age = 12;
            }

            new abcd();
            {
                age: 12;
            }
        }
*/

/*//  ○● iife : Immediately invoked function expression
//      ●  essa function joh foran run ho jaye. to make private variables.
//               like jQuery, $(), gasp,
//      ● how to make: write any function enclosed in () and after it write this braces to call ()
//      ● iife coomonly used to create private scope for code, so that variable and functions defined in it are not accesible outside
        {
            (
                function(){
                }
            ) ()
            // example 2 for private variables
            let ans = (function(){
                            let privateVal = 12;    // this is a private var, we can't access it outside or via console.

                            return {   // returning an object
                                getter: function(){
                                    console.log(privateVal);
                                }
                                ,
                                setter: function(val){
                                    privateVal = val;
                                }
                            };
                      })();
        }
*/

/*//  ○● Prototype
//      ● JS by default adds a property called [[Prototype]] to every object when created.
//      ● Prototype contains many helper properties and methods to use for our tasks.
//      ● we can see these all prototype properties by writing any object name with . on console.
*/ 

/*//  ○● Prototype Inheritance
//      ● JS provides some extra features to every objects through prototype inheritance.
//      ● we can also add our inheritance from one object to another object
        {
            var Human = { 
                canFly: false,
                canTalk: true,
                canWalk: true,
                haveEmotions: true,
            }

            var Student = {
                canMakeWebsites: true,
                knowJavascript: true
            }

            // here comes prototype inheritance
            Student.__proto__ = Human;
            // now you can check inherited properties from human in student on console by wrtting "Student."
        }
*/

/*//  ○● this call apply bind
//      ● this keyword have different properties in different contexts.
//      ● Global: window, function: window, method: object name(like obj). 
//      ● Note: when a function is within an object it called as method.  
        {
            // global : this -> window
            console.log(this);
            
            // function : this -> window
            function abcd(){
                console.log(this);
            }
            abcd();
            
            // method: this -> object name(obj) 
            var obj = { 
                name: "Hussnain", 
                specs: function(){console.log(this);} 
            }
            obj.specs();
            
            // DOM: eventlistener
            // this is equal to anything which is written before .addEventlistner
            {
                var btn = document.querySelector("button");
                 console.log(btn);
                
                btn.addEventListener("click", function(){
                    console.log(this);
                    this.style.color = "red";
                    this.style.padding = "20px";
                    this.style.border = "2px solid black";
                    // button.style.color = "red"; 
                });
            }
        }

//      ● Call : agar ap function me kisi object koh pass ya point kerwana chahtay ho toh call use hota
            {
                function abcd(){
                    console.log(this);
                    console.log(this.name, this.age);
                }
                let obj = {name:"Hussnain", age:24};
                abcd.call(obj);
            }

//      ● Apply : there is minor difference just in calling function vs "Call"
            {
                function abcd(val1,val2,val3){
                    console.log(this, val1, val2, val3);
                    // console.log(this.name, this.age);
                }
                let obj = {name:"Hussnain", age:24};
                
                //In Call: we can pass obj for this and then after provide arguments
                abcd.call(obj,1,2,3);
                
                //In Apply:  we can pass obj for "this" and then provide arguments in array
                abcd.apply(obj, [11,22,33]);
            }

//      ● Bind : Just bind kerta ha object koh func ke sath, baad me ap iss koh jab merzi chala ly. mostly used in React
            {
                function abcd(){
                    console.log(this);
                }
                let obj = {age:20};

                let binded = abcd.bind(obj);
                binded();
            }
*/

/*//  ○● Pure and Impure Functions
//      ● Pure functions has these 2 characteristics:
//          1) gives same output everytime against same input
//          2) does not change global variables value.
//     <> pure example:
            {
                function abcd(a,b){
                    return (a*b);
                }

                let ans1 = abcd(2,3);
                let ans2 = abcd(2,3);
                console.log("ans1: ", ans1, "ans2: ", ans2);
            }
//     <> Impure function example:
            {
                function abcd(val){
                    return Math.random() * val;
                }

                
                let ans1 = abcd(2);
                let ans2 = abcd(2);
                console.log("ans1: ", ans1, "ans2: ", ans2);
            }

*/


