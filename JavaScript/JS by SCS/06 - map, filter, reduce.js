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

/*//   ● Array.filter()
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

//  ● Array.reduce()
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




