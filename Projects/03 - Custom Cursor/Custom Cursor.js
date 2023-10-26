
const page = document.querySelector("#container");
const cursor = document.querySelector("#cursor");

page.addEventListener("mousemove", function(direction){
    cursor.style.left = direction.x +"px";
    cursor.style.top = direction.y+"px";
   
});