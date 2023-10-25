
const btn = document.querySelector(".card button");
const statusFriend = document.querySelector(".card #status");
let friend = 0;

btn.addEventListener("click",function(){
    if(!friend){
        btn.innerHTML = "Remove Friend";
        statusFriend.innerHTML = "Friend";
        statusFriend.style.color = "green";
        friend = 1;
    }
    else{
        btn.innerHTML = "Add Friend";
        statusFriend.innerHTML = "Stranger";
        statusFriend.style.color = "red";
        friend = 0;
    }
});