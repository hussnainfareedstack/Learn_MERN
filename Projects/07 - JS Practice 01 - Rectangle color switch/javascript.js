
let rectangle = document.querySelector("#rectangle");

rectangle.addEventListener("mousemove", function(dets){

    //let pos = Math.floor(dets.x - rectangle.getBoundingClientRect().left);
    
    console.log("X: "+(dets.offsetX));

    if(dets.offsetX < 255)//(pos < 255)
        rectangle.style.backgroundColor = `rgb(0, 0, ${255 - dets.offsetX})`; //or use 255 - pos
    else
        rectangle.style.backgroundColor = `rgb(${dets.offsetX % 255}, 0, 0)`;
    
});

rectangle.addEventListener("mouseleave", function(){
    rectangle.style.backgroundColor="white";
})

