let timer = 60;
let numBubble = 102;
let score = 0;
let rn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}

function createBubbles(n){
    let clutter = "";

    for(let i=1; i<=n; i++)
    {
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }

    document.querySelector("#panelBody").innerHTML = clutter;
}

function runTimer(){

    let stopTimer = setInterval(() => {
        if(timer > 0)
        {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(stopTimer);
            document.querySelector("#panelBody").innerHTML = `<h2>Game Over </h2><h2> Your Score is ${score}</h2>`;
        }

    }, 1000);

}

function getNewHit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = rn;
}

//-------------------------------------------------------------------------------------//
createBubbles(numBubble);
runTimer();
getNewHit();
//-------------------------------------------------------------------------------------//
  function run() {     
    document.querySelector("#panelBody").addEventListener("click", function(dets){

        let bubblePressValue = Number( dets.target.textContent );

        if( bubblePressValue === rn){
            increaseScore();
            getNewHit();
            createBubbles(numBubble);
        }
    });
  }
  run();
//-------------------------------------------------------------------------------------//