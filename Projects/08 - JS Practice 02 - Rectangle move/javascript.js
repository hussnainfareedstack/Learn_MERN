
let rect = document.querySelector("#rectangle");

window.addEventListener("mousemove", function(dets){
    
    //console.log(rect.getBoundingClientRect());
    let width = rect.getBoundingClientRect().width;
    // console.log(dets.x);
    // console.log(this.window.innerWidth)
    // console.log(`val: ${dets.x -width }`)

    if(dets.x < width)
        rect.style.left =  `${ (dets.x % width) + 50 }px`;
    else
        rect.style.left =  `${dets.x - width -50}px`;
})