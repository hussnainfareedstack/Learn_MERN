
//  DOM Baiscs
/*//  ● Topics:
        ● What is DOM?
        ● 4 Pillars of DOM
        ● Example of Bulb (or whatever clicking on the same button)
        ● Multiple Events
        ● Selecting Multiple Elements at same time
        ● setTimeout
        ● setInterval
        ● Future Projects
*/

/*//  ● What is DOM? 
        ● Document Object Model
        ● Represent structure of web page (Using Tree like structure)
        ● Each element - node in tree 
        ● These nodes can be accessed, modified, and manipulated using programming languages like JavaScript
*/

//  ● 4 Pillars of DOM
//        1) Selection of the elements
//            ● querySelector rgb(135, 133, 133)rgb(135, 133, 133)
//                i)  document.querySelector("#id_name/.class_name/element") ; //select only fist 
//                ii) document.querySelectorAll("#id_name/.class_name/element") ; //select many element and return nodeList
//                iii)we need to use forEach method get access of each element of nodeList(set Of Many Element) ;
//                        elem.forEach(function(e){ //logic }) ; 
                    {
                        const v = document.querySelector("h1"); /* #title */
                        console.log(v);
//                 ● Selecting Multiple Elements at same time
                        const h = document.querySelectorAll("h2"); // if we used querySelector() then it will only get first h2 not all.
                        console.log(h);
                        h.forEach(function(v){
                            console.log(v);
                        })     
                        
                    }

//            ● idSelector
//                ● document.getElementById("id_name") ; // don't use (#)
//
//            ● classSelector
//                ● document.getElementsByClassName("class_name") ; // don't use (.)
//
//        2) Changing HTML
//            ● changing html element inner content 
                {
                    // const a = document.getElementById("title");
                    const a = document.querySelector("#title"); // this way also same as above.
                    // a.innerHTML = "Title changed by innerHTML";
                    
                    // a.textContent = "Title Changed text"; 
                    // innerHTML used to place HTML content like <h1>HTML</h1> will show HTML while textcontent show "<h1>HTML</h1>"

                    document.querySelector("#title").innerHTML = "This way also correct"; 
                    // short way but if you need to use many times better to store in a variable
                    console.log(a);
                }
//
//        3) Changing CSS
//            ● You can change CSS Properties via JS. but have to use CamelCase 
//            ● like in CSS "background-color" but in JS "backgroundColor" . remove - and make next letter capital.
              {
                 const c = document.querySelector("h1");
                 c.style.backgroundColor = "orange"
              }
//
//        4) Event Listener
//            ● koi bhi event ho like click, hover, submit, toh us per listen ker ke react kerna.
//              elem.addEventListener("event" ,function(){ // changing css/HTML   }) ;
//              events ->  Mouse Events:click, dblclick, mousedown, mouseup, contextmenu,mouseout, mousewheel, mouseover
//                     Touch Events:touchstart, touchend, touchmove, touchcancel
//                     Keyboard Events:keydown, keyup, keypress
//                     Form Events: focus, blur, change, submit
//                     Window Events: resize, scroll, load, unload, hashchange

              {
                const el = document.querySelector("h1");
                el.addEventListener("click", function(){
                    console.log(this, el);
                    el.style.color = "yellow";
                    this.style.backgroundColor = "#000";
                    el.style.width = "50%";
                    this.style.textAlign = "center";
                    this.innerHTML = "I'm changed like you!";
                });
              }
//





/*//  ●  

*/

/*//  ●  

*/

/*//  ●  

*/

/*//  ●  

*/

/*//  ●  

*/















