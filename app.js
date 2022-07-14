//start by making objects out of the players and adding properties
const p1={
    score:0,
    button:document.querySelector('#p1button'),
    display:document.querySelector('#p1score'),
};
const p2={
    score:0,
    button:document.querySelector('#p2button'),
    display:document.querySelector('#p2score'),
};

const rButton=document.querySelector('#rbutton');
const btnContainer=document.querySelector('#btncontainer');
const gameSelect=document.querySelector('#maxgames');
//get all important elements
//make variables for score keeping
let maxScore=0;
let gameOver=false;

//this function checks the flag and if there has been maxScorrer
//and if not updates the score counter and display
//if the max score is reached it adds the winner and loser 
//classes to the players 
function scoreUpdate(scorrer,oponent)
{
   if(!gameOver)
   {
    scorrer.score++;
   }
   if(scorrer.score===maxScore)
   {
    gameOver=true;
    //add appropriate classes to winner and looser
    scorrer.display.setAttribute('class','winner');
    oponent.display.setAttribute('class','loser');
    scorrer.button.disabled=true;
    oponent.button.disabled=true;
   }
   scorrer.display.innerText=scorrer.score;
}
//make option for game select
for(let i=1;i<=20;i++)
{
    let tempNum=document.createElement('option');
    tempNum.setAttribute('value',i);
    tempNum.innerText=i;
    gameSelect.append(tempNum);
}
//add event listener to gameSelect to update the maxScore value
//and reset the game when needed
gameSelect.addEventListener('change',()=>{
    maxScore=parseInt(gameSelect.value);
    reset(p1);
    reset(p2);
});

//if the container is clicked check which button was it 
btnContainer.addEventListener('click',(e)=>{ //with use of Event Delegation
    if(e.target.innerHTML==='+1 Player One')
  {
      scoreUpdate(p1,p2);
  }
    else if(e.target.innerHTML==='+1 Player Two')
    {
      scoreUpdate(p2,p1);
    }
    else
    {
        reset(p1);
        reset(p2);
    }
});

//this function resests every property of the player objects
function reset(player){
    //if a click event happens on the btnContainer
        //but the target is either p1btn or p2btn
        //then is the reset button so zero all values        p1Score=0;
       
        player.score=0;
        player.display.innerText=0;
        gameOver=false;
        //remove all winner status classes
        player.display.classList.remove('winner','loser');
        player.button.disabled=false;
}