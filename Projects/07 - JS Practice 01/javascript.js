
let rectangle = document.querySelector("#rectangle");

rectangle.addEventListener("mousemove", function(dets){

    let pos = Math.floor(dets.x - rectangle.getBoundingClientRect().left);
    
    console.log("X: "+(pos%255));

    if(pos < 255)
        rectangle.style.backgroundColor = `rgb(0, 0, ${255-pos})`;
    else
        rectangle.style.backgroundColor = `rgb(${pos%255}, 0, 0)`;
    
});

rectangle.addEventListener("mouseleave", function(){
    rectangle.style.backgroundColor="white";
})

