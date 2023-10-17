
<h1>JavaScript by Sheryians Coding School</h1>

1. JavaScript Crash Course: <b>Master the Basics</b> in One Video! Ignite Your Front-End Mastery Series!

    ○ word vs keyword : 
        ● word jis ka koi meaning nai ha interprator me, like chacha, good. 
        ● keyword: jis ka meaning ho interprator me like for, is else, var, let, etc.

//======================================================================================//
    ○ variables and constants: 
        ● variables joh change ho sakte.
        ● contants joh change nahi hotay.

//======================================================================================//
    ○ var const let:
        ● var and let used to create variables, var apne apko window object me add kerta ha jabke let nai add kerta. it's mean let provide some security and privacy.

//======================================================================================//
    ○● the difference
    ○● window object
    ○● browser context API
    ○● stack
    ○● heap memory
    ○● execution context
    ○● lexical environment
    

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
        ●

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
        ●

//======================================================================================//

    ○● switch
        ●

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
        ●

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

    ○● callback funcs

//======================================================================================//    

    ○● what is first class functions


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

//======================================================================================//

    ○● why we can make negative indexes arrays in js?

//======================================================================================//

    ○● practice questions and scenarios

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
                // here before : are properties like DOB, name...
                DOB: 24,
                name: "Hussnain",
                email: hussnainfareed@outlook.com,
                linkedin: hussnainfareedDev,
                phone: +923001903012,
                age: function(){ return DOB-currentDate(); }
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

//======================================================================================//

    ○● practice, questions, scenarios


//======================================================================================//

    ●●●● DOM : Document object moral



2. 
3. 

