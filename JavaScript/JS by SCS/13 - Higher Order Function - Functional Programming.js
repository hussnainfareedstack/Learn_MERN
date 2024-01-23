
// Higher order Functions: are the one which takes functions as a parameter or return functions.

// With higher order function we can achieve Functional Programming.

/*
const radius = [3, 1, 2, 4];

const area = function(radius){ 
    const output = [];

    for(let i=0; i<radius.length; i++)
        output.push(Math.PI * radius[i] * radius[i]);

    return output;
}

const circumference = function(radius){
    const output = [];

    for(let i=0; i<radius.length; i++)
        output.push(2 * Math.PI * radius[i]);

    return output;
}

const diameter = function(radius){
    const output = [];

    for(let i=0; i<radius.length; i++)
        output.push(2 * radius[i]);

    return output;
}

console.log(area(radius));
console.log(circumference(radius));
console.log(diameter(radius));
*/

// In above we are repeating out code, which don't Obey DRY Principal(Don't Repeat Yourself)
// Our code must be functional, modular.
// let mke above code functional

const radius = [3, 1, 2, 4];

const area = function(radius){
    return Math.PI * radius * radius;
}

const circumference = function(radius){
    return 2 * Math.PI * radius;
}

const diameter = function(radius){
    return 2 * radius;
}

// here calculateCircle() is a higher order Function and logicfn() is a callback function which are area, circumference, diameter.
const calculateCircle = function(radius, logicfn){
    const output = [];

    for(let i=0; i<radius.length; i++)
        output.push(logicfn(radius[i]));

    return output;
}

console.log(calculateCircle(radius, area));
console.log(calculateCircle(radius, circumference));
console.log(calculateCircle(radius, diameter));

// in this way we avoided repeating our code and achived functional programming.

// we can also use map which is same like our calculateCircle function.

console.log(radius.map(area));
// we can also call our function same like this, which will make it prototypal inheritance / polyfills

// in this way we can call this function via arrays.
Array.prototype.calculate = function(logicfn){
    const output = [];
    // here this will be pointing to the calling array.
    for(let i=0; i<this.length; i++)
        output.push(logicfn(this[i]));

    return output;
}
// now same syntax like map
console.log(radius.calculate(area))


