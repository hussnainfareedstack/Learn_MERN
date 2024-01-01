
//===================================================//

/*  ES6 Topics
    ● let and const      - variables and constants
    ● arrow functions    - functions
    ● template literals  - ' " ka advance ``
    ● Default Parameters - function ki default values in parameter
    ● rest and spread    - ... ka different work in different context
    ● destructering      - arrays and objects se data bahar nikalna in variables
    ● classes            - to make objects from particular blueprints
    ● modules            - skip here used in react and it is 1 minute task to understand modules
    ● promises           - To take care of async part
    ● async await        - To take care of async part more elegantly(behtar)
    ● *try catch         - error handling
*/

/*  ● let and const 
        ○ let to make variables like in c++
        ○ const to make constant.
        ○ dono khud koh window object me add nai kertay.
        ○ dono braces {} scoped hota yah
*/

/*  ● arrow function
        ○ In old JS ES5 there are three types of functions which are
            - functions statement
            - function expression
            - anonymous functions
        
        ○ In new Js ES6, one new function added which is arrow function and has three ways to use
            - arrow functions
                {
                    let a = ()=>{};
                    a();  // also become first class function
                }
            - arrow functions with one parameter
            {
                let a = parm => { };
                a(12);
                // but if you want to add more than one parameters then () necessary like let a = (parm1, parm2)=>{};
            }
            - arrow functions with implicit return 
            {
                //implicit return matlab agar hum ne khud se return nai kya toh phir bhi return ho gha.
                let a = ()=>12; // remove {} now it will implicitly return.
                console.log(a());
            }
        
*/

/*  ● template literals - backtick ``
        ○ in old JS we use "" or '' to add strings with dynamics value like
            - let a = "hey "+2+2+"is equal to 4. and "+(2-2)+" is equal 0." ;

        ○ But in new JS ES6 there is a easy way with backticks
            - let a = `hey ${2+2} is equal to 4 and ${2-2} is 0`. // here we can easily use dynamics value and looking good also.
*/

/*  ● Default Parameters
        ○ same like c++
            {
                function print(parm1=1, parm2=2){
                    console.log(parm1, parm2);
                }

                print(4,6);
                print(3);
            }
*/

/*  ● rest and spread
        ○ both rest and spread is ... but there work is different
        ○ spread is used to spreading(bekhairnay ke liye) values where is is written
            {
                let arr = [1,23,344];
                let b = [...arr]; // yaha ... ki jaga arr ki values bekhair(spreading) jaye ghi.
            }
        
        ○ rest used hota ha jab apko bache hue values ek variable me dalna ho in array form
            {
                function print(a,b,c,...d){
                    console.log(a,b,c,d);
                }
                print(1,2,3,4,5,6,7);
            }
*/

/*  ● destructering
        ○ Array Destructering
            {
                let a = [1,2,3];
                let [b,c] = a; // in this way we are creating 2 variables b and c and copying 1 and 2 respectively.
                let [d,,e]= a; // in this way we can skip 2 and copy 1 and 3.
            }
        
        ○ Object destructering
            {
                let obj = {name: "hussnain", age: 26};
                let {age} = obj;  // jis bhi value koh bahar nikalna ho us koh {} me likhay. 
                                  // agar woh value na ho object me to undefined ho jaye gha variable
            }
*/

/*  ● classes  --pending
        ○ 
*/

/*  ● modules in react
        ○ 
*/

/*  ● promises refer - Async JavaScript.js
        ○ 
*/

/*  ● async await - Async JavaScript.js
        ○ 
*/

/*  ● try catch
        ○ try catch used to make if error occured at certain point then throw error at excute next code
        {
            //-------------------------//
            
            // console.log("hey");
            // console.log(hey);        //throws error and next line also not executed.
            // console.log("hey");

            //------------------------//
            
            console.log("hey");
            try{
                console.log(hey);
            }
            catch(err){
                console.log(err);
            }
            console.log("hey");

        }
*/
 

// Also learn in JS recommended by Namaste Javascript
// -> Optional Chaining
// -> map, filter, reduce, sort
// -> event bubbling
// -> Asynchronous Events --> callbacks, callbacks hell, promises, promise APIs , async await , try catch