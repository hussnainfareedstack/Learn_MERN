
const elem = document.querySelectorAll(".elem");

elem.forEach(function(item){
   
    // item.addEventListener("mouseenter",function(pos){
    //     y=pos.y;
    //     console.log("y = ",y);
    // });
    
    item.addEventListener("mousemove",function(pos){
        
        this.childNodes[3].style.opacity = 1;
        item.childNodes[3].style.left = pos.x+"px";
        this.childNodes[3].style.top = (pos.y % 112)+"px";    // 7rem(112) is the height of elem 
        
    })
    item.addEventListener("mouseleave",function(){
        this.childNodes[3].style.opacity = 0;
    })

});


// const main = document.querySelector("main");
// console.log(main.childNodes);

// main.childNodes[1].addEventListener("mousemove",function(pos){
//     this.childNodes[3].style.opacity = "1";
//     this.childNodes[3].style.left = pos.x+"px";
//     this.childNodes[3].style.top = pos.y+"px";
// });
// main.childNodes[1].addEventListener("mouseleave",function(){
//     this.childNodes[3].style.opacity = 0;
// });

// main.childNodes[3].addEventListener("mousemove",function(pos){
//     this.childNodes[3].style.opacity = "1";
//     this.childNodes[3].style.left = pos.x+"px";
//     this.childNodes[3].style.top = pos.y+"px";
// });
// main.childNodes[3].addEventListener("mouseleave",function(){
//     this.childNodes[3].style.opacity = "0";
// });

// main.childNodes[5].addEventListener("mousemove",function(pos){
//     this.childNodes[3].style.opacity = "1";
//     this.childNodes[3].style.left = pos.x+"px";
//     this.childNodes[3].style.top = pos.y+"px";
// });
// main.childNodes[5].addEventListener("mouseleave",function(){
//     this.childNodes[3].style.opacity = "0";
// });

// main.childNodes[7].addEventListener("mousemove",function(pos){
//     this.childNodes[3].style.opacity = "1";
//     this.childNodes[3].style.left = pos.x+"px";
//     this.childNodes[3].style.top = pos.y+"px";
// });
// main.childNodes[7].addEventListener("mouseleave",function(){
//     this.childNodes[3].style.opacity = 0;
// });