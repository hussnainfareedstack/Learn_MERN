
<h1>JavaScript by Sheryians Coding School</h1>

1. JavaScript Crash Course: <b>Master the Basics</b> in One Video! Ignite Your Front-End Mastery Series!

    ○ word vs keyword : 
        ● word jis ka koi meaning nai ha interprator me, like chacha, good. 
        ● keyword: jis ka meaning ho interprator me like for, if else, var, let, etc.

//======================================================================================//
    ○ variables and constants: 
        ● variables joh change ho sakte.
        ● constants joh change nahi hotay.

//======================================================================================//
    ○ var const let:
        ● var is available in ES5 and let and const introduced in ES6

    ○● the difference
        ● var and let used to create variables, var apne apko window object me add kerta ha jabke let and const nai add kerta. it's mean let and const provide some security and privacy.
        ● var function scoped hota ha.
        ● let braces scoped hota ha
        {
            function abcd(){
                for(var i=1; i<12; i++)
                {
                    console.log(i);
                }
                console.log(i); // var is accessible here also. var apne parent function me kahi bhi access ho sakta ha. to avoid this let can be used and this console.log(i) will show error i not defined, as obvious.
            }
        }

    ○● window object
        ● JS me kuch cheezay nahi ha mgar hum woh use kertay ha. joh ke browser me hoti ha. browser me ek object me woh cheezay hoti ha jesay window kahtay ha. like console.log(), alert, prompt, etc. 
        ● to see all these window object feature type in browser console: window. and after that expand it to see all features.

//======================================================================================//

    ○● browser context API
        ● Browser context API gives mainly 3 things which are "window, stack, heap". window is described above. let discuss other 2.
    ○● stack
        ● Simple first in last out. joh pehlay aye gha woh last me jayegha
    ○● heap memory
        ● Jitna bhi data hota ha code ma yah intermediate data during code running, it saves in heap(dynamic) memory.

//======================================================================================//

    ○● execution context
        ● Jab bhi koi function run hota ha toh woh apna imaginary container bna leta ha, jis me 3 cheezay hoti ha.
            1) variables
            2) functions inside that function
            3) lexical environment.
        iss imaginary container koh execution context kehtay ha.

    ○● lexical environment
        ● func kin cheezo koh access ker sakta ha kin koh nai.
        {
            function abcd(){
                var a= 2;
                function def(){
                    var b=4;
                }
                // abcd() cannot acces b here due to lexical environment restriction, also var b is func scoped.
            }
        }

//======================================================================================//
    ○ hoisting:
        ● variables and functions are hoisted which means there declarations moved on top of the code.
        like { var a=2; } 
        here var a; moved on top.

        also we can say that hum var koh bnanae se pehlay use ker saktay ha, but behined the scence is described above. 
        {
            console.log(a);
            var a=2;
        }
        ● but here console.log(a) we will get "undefined" printed. because value is assigned after this lines but var a; is declared already on top behined the scene, thats why we didn't get the error "not defined".
        example: 
        {
            console.log(b);
        }
        here we get error b is not defined.

//======================================================================================//

    ○ Types in js, primitives and Reference

        ● Primitives: numbers, string, null, undefined, boolean
            jisko copy kernay se real value copy ho jaye woh permitive value ha.
            {
                var a = 12;
                var b = a;

                b = b + 2;

                //now a is 12 and b is 14.
            }
            
        ● Reference: [] {} ()
            aisi value jisko koh copy kernay se real copy nai banti balky value ka reference pass hojata ha, woh Reference value ha.
            {
                var a = [1,2,3,4];
                var b = a;

                b.pop(); // to remove element from last.

                // 4 is removed from both a and b due to reference.
            }

        Note Tip: 
            How to tell primitive or referenced value? 
            
            Simple if braket ha koi bhi []{}() then it is refernced value otherwise primitve value.

//======================================================================================//

    ○● how to copy reference values
        ● we can copy with the help of Spread Operator ...
        {
            var a = [1,2,3,4];
            var b = [...a]; 
            // spread operator ... ke baad joh bhi likha ha us ki values koh copy kro or spread operator ki jagah rakh do.
        }
        ● Same way we can also copy objects
        {
            var obj = {name: Hussnain, age:27};
            var copyObj = {...obj};             // but we have to use array brackets.
        }

//======================================================================================//

    ○ conditional
        ● if else , else-if

    ○ if else else-if
        ● if(true) {} else {}

        here true: exact ho yah convert ho like 9<10 or 12>13 .

        but if("apple") this will also work on truthy or falsy basis.

        interview question if (-1) ?

//======================================================================================//

    ○● truthy vs falsy
        ●   JS me values truthy ya falsy ki basis per divide hoti ha
            ●● Falsy values are 0, false, undefined, null, NaN, document.all. 
            ●● everything else is truthy so if(-1), if("apple") are true and this condition will execute.

//======================================================================================//

    ○● switch
        {
            switch(a)
            {
                case 0: "0";
                    break;
                case 1: "1";
                    break;
                default: "df";
            }
        }

//======================================================================================//

    ○ loops
        ● for and while
    ○ for while
        ● for :
        {
            for(var i=0; i<10; i++)
            {
                cosole.log(i+1);
            }
        }

        ● while :
        {
            var i=0;
            while(i<10)
            { 
                console.log(i+1);
                i++;
            }
        }

//======================================================================================//

    ○● foreach forin forof do-while
        ● forEach: works for arrays. used when we want to perform some operations with array data
        {
            var a = [1,2,3,4,5,5,6,6,7];
            a.forEach(function(val){
                console.log(a+2);
            });
        }
        ● forin: works for objects.  used when we want to perform some operations with objects
        {
            var obj = {
                Name: "Hussnain", 
                Age:27, 
                City: "Faisalabad"
            };

            console.log(obj.Name);

            for(var key in obj){
                console.log(key,": ", obj[key]);
                
            }
        }

        ● do while: jab apko ek bar toh loop lazmi chalana ho toh do while works.
        {
            var a = 20;
            do{
                console.log("hey")
                a++;
            }
            while(a<15);
        }


//======================================================================================//

    ○ functions
        ● mainly for three purposes, like resue code, code to run with different data, code to run when we want.
        ● totale 6 types to create functions. 3 in ES5 and 3 in ES6.

        {   
            function abcd(){
                //function statment.
            }

            function hello(){
                console.log("Hello")
            }

            hello(); // to run
        }

    ○ parameters aurguments
        ●
        {
            // here a,b,c are parameters.
            function abcd(a,b,c)
            {
                console.log(a, b, c);
            }

            // here 12,13,14 are arguments
            abcd(12,13,14); 
        }

//======================================================================================//

    ○● callback funcs : This is in Async JS. promises, callbacks, set time out, set intervel, async awaite
        ● Aisa code joh thori deer baad chaly ya chalana ho. is mey ek normal function hi hota ha but jab required time khatam ho toh ussay chala dety ha. or issi function koh call back func kahtay ha.
        Example:
        {
            setTimeOut(function(){
                console.log("I'm called after 2 seconds.")
            }, 2000);
        }

//======================================================================================//    

    ○● what is first class functions
        ● aisa function jis ko kisi value me store kery.
        {
            var a = function(){};
            // 2nd example:
            function abcd(a){
                a();
            }

            abcd(function(){console.log("hey");});
        }

//======================================================================================//

    ○ Arrays
        ● to store more than one values in a single variable
        {
            var a = [1,2,3,4];

            console.log(a[0]);
        }
        

    ○ push pop shift unshift splice
        ● push:
            to add new value in the end of array.
            {
                var a = [1,2,3];
                a.push(4);
                // a = [1,2,3,4]
            }
        
        ● pop:
            to remove a value from end of array.
            {
                var a = [1,2,3];
                a.pop();
                // a = [1,2]
            } 
        
        ● unshift: 
            to add new value at the start of array.
            {
                var a = [1,2,3];
                a.unshift(0);

                // a=[0,1,2,3]
            }

        ● shift:
            to remove a value from the start of array.
            {
                var a = [1,2,3];
                a.shift();
                //a=[2,3]
            } 
        ● splice:
            to remove value from array from any location.
            {
                var a = [1,2,3,4,5,6];
                a.splice(2,1); //kaha se, next kitni values

                // a = [1,2,4,5,6]
            }


//======================================================================================//

    ○● how arrays are made behind the scences
        ● arrays is JS stored as objects.
        {
            var a = [431,6,3,745];
            arr = {
                0: 431,
                1: 6,
                2: 3,
                4: 745
            };
        }

        so both typeof {}, and typeof [] both are objects.
        then how we can know that it is array or not. use below way
        -> Array.isArray([])

//======================================================================================//

    ○● how we can make negative indexes arrays in js?
        ● arr[-1] = 5;

//======================================================================================//

    ○ objects:
        ● to store details of a specific person/thing in a key-value pair.

        1: blank object:
        {
            var a = {};
        }

        2: filled object
        {
            var person = {
                // here before : are properties like DOB, name, etc. and age is a method/function
                DOB: 24,
                name: "Hussnain",
                email: hussnainfareed@outlook.com,
                linkedin: hussnainfareedDev,
                phone: +923001903012,
                age: function(){ return DOB-currentDate(); }  // methods...
            }

            // how to access?
            person.name;
        }

    ○ props vs methods:
        ● properties:
            properties are data memebrs like desribed above name, dob
        ● methods:
            property which have a value as a function, or just functions.


    ○ updating object properties:
        ● to update a properties value use below way
        {
            person.name = "Fareed";
        }

//======================================================================================//

    ○● how to delete objects
        ● delete obj.name;

//======================================================================================//

    ●●●● DOM : Document object moral



2. 
3. 

