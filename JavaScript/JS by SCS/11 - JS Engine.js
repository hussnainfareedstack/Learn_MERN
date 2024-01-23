
// ● To run JavaScript code we need JavaScript Runtime Environment

// ● Javascript Runtime Environment
//    Javascript runtime environment have these things
//    ● JS Engine: run js code
//    ● APIs (in chrome it is through window object):  like setTimeout, console.log(), 
//    ● Microtask Queue : for async callback func which return promises or mutation observer
//    ● Callback Queue: for normal callback func like for eventlisterns

// ● List of JS Engines: https://en.wikipedia.org/wiki/List_of_ECMAScript_engines 

// ● Myths about JS Engine
//    ● JS Engine is not a machine but a program. 

// ● JS Engine Architechure
//    it executes code in 3 major steps
//    ● Parsing: 
//          Code is broken down into tokens, like "let a = 7;" here token are let, a, =, 7.
//          Syntax Parser now takes the code and convert it into AST( Abstract Syntax Tree).
//      {
//          //   ● Let's understand first before Compilation the Diff between Interprator and Compilor and what type JS have?
//          //      ● Interprator: 
//                      -> In this code is executed line by line. 
//                      -> In this Code run fast.
//          //      ● Compilor: 
//                      -> In this firstly all the code is compiled and a new optimized code produced and then executed.   
//                      -> In this Code is run efficiently.
//          //    ● Now what type is Javascript:
//                    -> Javascript behaves like both interpreted and compiled language, it depends on the JS Engine.
//                      -> When JS created at start it is just interpreted 
//                         but now most of the famous Engines uses of interprator and compilor both.
//                         so now it's purely on Engine it is interprator or JIT Compiled.
// 
//                      -> JIT Compilation means that engines uses mix of interprator and Compilor.
//      }
//    ● Compilation:
//          Here compilation and Execution works hand in hand.
//      ● JIT Compilation - Just in Time Compilation:
//          In this AST code is interprated and executed but interprated code also goes to compilor for optimization.
//          AOT: In some JS Engine there is AOT(Ahead of Time Compilation) where code is compiled which needs to be executed later,
//              and optimized it as much as possible and also produces the byte code which goes to execution phase.
//          
//    ● Execution:
//          And this Execution is possible due to Two things which are Memory Heap and Call Stack.
//          -> Memory Heap: is a place where all the variables and functions are assigned memory.
//             From here Garbage Collector removes the memory and for that it uses "Mark ans Sweep Algorithm."

//     Homework:
//        -> Study Mark and Sweep Algorithm
//        -> In compiler there are some other things for optimization purpose like
//             -> Inlining, Copy elign, Inline Caching

//   ● Fastest Javascript Engine
//        -> It's Google V8 Engine which is consider Fastest, but everyone in this race to make it's engine faster.
//        -> In V8 Google has ignition interprator and Turbo Fan(Compilor) for optimizing the code.
//        -> they have Garbage Collector Orinoco which uses Mark n Sweep Algorithm.
//        -> and also have Garbage Collector "Oil Pan" for different purpose. 

//  Languages are of three Types
//      -> Functional, Procedural and Object Oriented Programing Language
//  The Beauty of JS is that it can be used in any way of above !

