//===================================================//

/*  ● Topics: Map, Filter, reduce
    ● 
*/

/*//  ● Array.map()
//        ○ if we want to transform an array to new form like create new array by * 2 or with 3 or get binary of every element.
            {
                const arr = [5, 1, 3, 2, 6]; // [10,2,6,4,12] , [15,3,9,6,18] , ["101", "001", "011", "010", "110"]

                function double(x){
                    return x*2;
                }
                function triple(x){
                    return x*3;
                }
                function binary(x){
                    return x.toString(2);
                }

                 const output = arr.map(binary);  // this way also correct
                 
                // the below is the real way but in above double is replaced by this code you can check by console.log(double);
                // const output = arr.map(function double(x){    
                //     return x*2;
                // });  

                console.log(output)
            }
*/

/*//  ● Array.filter()
//         ○   used to filter array elements on custom requirments like get odd, even, /3 , less tha 4, negative, etc.
            {
                const arr = [5 ,1, 3, 2, 6];
                function isOdd(x){
                    return  x % 2;  //x % 2 !=0; //same x % 2 is sey bhi 0 ya 1 hi aye gha 1 aya to "if()" true ho gha
                }
                function isEven(x){
                    return  x % 2 === 0; // === compare datatypes also
                }
                function gt4(x){
                    return x > 4;
                }

                //const output = arr.filter(gt4);
                const output = arr.filter( x => x>3 ); // this way also correct arrow function with 1 parameter and with implicit return.
                console.log(output);
            }
*/

/*//  ● Array.reduce()
//        ○   to process all the elements of array and give a single value
//            -> let's find a sum of array with simple function to understand better
            {
                const arr = [5, 1, 2, 3, 6];
                // let sum = 0;
                // function findSum(arr){

                //     for(let i=0; i<arr.length; i++){
                //         sum += arr[i];
                //     }
                //     return sum;
                // }
                // console.log(findSum(arr));

                // now lets do with reduce
                // reduce inside func takes 2 parm 
                //-> curr is refer to arr values 
                //-> prev(acc-acumulator) used to proces values and store result and it is initialized after {},here);
                
                const sum = arr.reduce(function(prev, curr){ // finding sum of arr
                    return prev += curr;
                },0);

                const max = arr.reduce(function(prev, curr){
                    if(prev < curr)
                        prev = curr;
                    return prev;
                },-1);

                console.log(max);
            }

*/

/*//  ● Tricky map Example

       {
            const users = [
                {firstName: "Hussnain", lastName: "Fareed", age: 26},
                {firstName: "Donald", lastName: "Trump", age: 75},
                {firstName: "Elon", lastName: "Musk", age: 42},
                {firstName: "Steve", lastName: "Jobs", age: 53}
            ];

            const fullNames = users.map( x => x.firstName+" "+x.lastName );
            console.log(fullNames);
       }
*/

/*//  ● Tricky reduce Example
//   -> How many people with different ages like { 26: 2, 75: 1, 42: 1}
    {
        const users = [
            {firstName: "Hussnain", lastName: "Fareed", age: 26, 11:1},
            {firstName: "Donald", lastName: "Trump", age: 75, 11:0},
            {firstName: "Elon", lastName: "Musk", age: 42, 11:0},
            {firstName: "Steve", lastName: "Jobs", age: 26, 11:0}
        ];

        const output = users.reduce(function(acc, curr){
            if(acc[curr.age]){
                acc[curr.age] = ++acc[curr.age];            // acc[curr.age] += 1; //same also
            }
            else{
                acc[curr.age] = 1;
            }
            return acc;
        }, {} );
        
        console.log(output);
        //console.log(users[0]["age"])
    }
*/

/*//  ● Tricky filter Example chaining   --HomeWork do this with reduce 
//  -> find first name of peoples whose age is less than 30
    {
        const users = [
            {firstName: "Hussnain", lastName: "Fareed", age: 26},
            {firstName: "Donald", lastName: "Trump", age: 75},
            {firstName: "Elon", lastName: "Musk", age: 42},
            {firstName: "Steve", lastName: "Jobs", age: 26}
        ];

        const output = users.filter( x =>  x.age < 30 ).map(x => x.firstName);

        console.log(output)

    }
*/
/* //HomeWork -> find first name of peoples whose age is less than 30 with reduce
{
    const users = [
        {firstName: "Hussnain", lastName: "Fareed", age: 26},
        {firstName: "Donald", lastName: "Trump", age: 75},
        {firstName: "Elon", lastName: "Musk", age: 42},
        {firstName: "Steve", lastName: "Jobs", age: 26}
    ];

    const output = users.reduce((names,curr)=>{
        if(curr.age < 30){
            names.push(curr.firstName);
        }
        return names;
    },[])

    console.log(output)

}
*/


/*
@jagrutsharma9150
1 year ago (edited)
Things learned:
1. map method is used when we want transformation of whole array.
2. filter is used when we want to filter the arrar to obtain required value.
3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.
5. Homework:
const output = user.reduce(function(acc, curr){
    if (curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, [ ])

console.log(output);
*/

