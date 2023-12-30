//====================================================================================================//
//------------------------ consider Readme.md file this file is for practice. ------------------------//
//====================================================================================================//

/*//1 the difference between var let const
var v = 2;
const c = 2;
let l = 2;

console.log(v, c, l);

function abcd(){
    for(var i=1; i<12; i++)
    {
        console.log(i);
    }
    console.log(i); // var is accessible here also. var apne parent function me kahi bhi access ho sakta ha. to avoid this let can be used and this console.log(i) will show error i not defined, as obvious.
}
abcd();
*/

/*//2 foreach loop

var a = [1,2,3,4,5,6,7,7,8];
a.forEach(function(val){
    console.log(val+2);
});
*/

/*//3 forin loop

var obj = {
    Name: "Hussnain", 
    Age:27, 
    City: "Faisalabad"
};

console.log(obj.Name);

for(var key in obj){
    console.log(key,": ", obj[key]);
    
}*/

/*//4 callback func example

setTimeout(() => { // "function(){}" or "() => {}" jiska koi name na ho ussay anounymous function kahtay ha.
    console.log("called after 2 seconds")
}, 2000);
*/

/*//5 first class function

//example
    var b = function(){};
// example
function abcd(a){
   //console.log(a);
   a();
}

abcd( function(){console.log("first class function");} );
*/

/*//6 how arrays are stored
var arr = [431,6,3,745];

// arr = {
//     0: 431,
//     1: 6,
//     2: 3,
//     4: 745
// };

arr[-1] = 0;
console.log(arr);
*/

//-----------------------------------------------------------------------//
// Object Copy
/*
// let obj1 ={
//     name: "Hussnain",
//     age: "27"
// };

// var obj2={...obj1};  

//to copy objects we have 3 ways, 
// 1. Spread  
// 2. Object.assign();
//          obj2= Object.assign({},obj1);
// 3. JSON.parse();
//          JSON.parse(JSON.stringify(obj1));

//NOTE: Spread and object.assign() do Shallow copy for values while JSON do Deep Copy.
// like if we have object within a object then inside object is {} refernced value then it is shallow copied.

// for more details read at: https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/ 
*/

//================================================================================================================