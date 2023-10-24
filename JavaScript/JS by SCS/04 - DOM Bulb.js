
const light = document.querySelector(".bulb");
const on = document.querySelector("#on");
// const off = document.querySelector("#off");    

let btn = 0;

on.addEventListener("click",function(){           
   if(btn)
   {
        light.style.backgroundColor=" rgba(128, 128, 128, 0.911)";  
        light.style.boxShadow = "";  
        on.style.color ="red";
        on.innerHTML = "OFF"
        btn = 0;
   }
   else
   {
        light.style.backgroundColor="yellow";  
        light.style.boxShadow = "0.3rem 0.3rem 5rem yellow";  
        on.style.color ="green";
        on.innerHTML = "ON"
        btn = 1;
   }
    

    console.log(this, light); // if we write function() like this ()=> then this is "window" not "light"
});

// off.addEventListener("click",function(){
//     light.style.backgroundColor=" rgba(128, 128, 128, 0.911)";  
//     light.style.boxShadow = "";  
//     on.style.backgroundColor ="rgb(230, 248, 248)";
//     off.style.backgroundColor = "rgb(204, 219, 219)";

//     console.log(this, light); 
// });