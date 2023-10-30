
const data = [
    {
        dp: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?auto=format&fit=crop&q=80&w=387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1530505580493-3fa88046af67?auto=format&fit=crop&q=80&w=387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1518723276788-e08d67cf8927?auto=format&fit=crop&q=80&w=411&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1675130119382-6f891206f406?auto=format&fit=crop&q=80&w=387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://plus.unsplash.com/premium_photo-1675130119426-0b2c2379a190?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1440133197387-5a6020d5ace2?auto=format&fit=crop&q=80&w=387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1698281964068-be15d9e587bc?auto=format&fit=crop&q=80&w=1948&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=461&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1530047139082-5435ca3c4614?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }];

let users = "";
let stories_section = document.querySelector("#stories_container");
let story_screen = document.querySelector("#displayStory");

data.forEach(function (obj, i) {
    users += 
    `
    <div class="story_status_border">
        <div class="bg">
            <div class="story">
                <img id="${"img" + (i + 1)}" src="${obj.dp}"  alt="m-pic">
            </div>
        </div>
    </div>
    `;
});
stories_section.innerHTML = users;  //users div added.

stories_section.addEventListener("click", function(pos){
    // console.log((pos.target.id).slice(3));
    
    let user_story = data[(pos.target.id).slice(3) - 1].story;

    story_screen.style.display = "block";
    story_screen.style.backgroundImage = `url(${user_story})`;

    setTimeout(() => {
        story_screen.style.display = "none";
    }, 3000);

});
