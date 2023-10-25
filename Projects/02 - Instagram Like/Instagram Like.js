
const card = document.querySelector(".card");
const heart = document.querySelector(".card i");

card.addEventListener("dblclick", function(){
    heart.style.opacity="100%";
    heart.style.transform = "translate(-50%,-50%) scale(1)";

    setTimeout(() => {
        heart.style.opacity="0%";
        heart.style.transform = "translate(-50%,-50%) scale(0)";
    }, 800);

});