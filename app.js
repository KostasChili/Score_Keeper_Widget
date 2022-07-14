const p1Button=document.querySelector('#p1button');
const p2Button=document.querySelector('#p2button');
const rButton=document.querySelector('#rbutton');
const p1ScoreDisplay=document.querySelector('#p1score');
const p2ScoreDisplay=document.querySelector('#p2score');
const btnContainer=document.querySelector('#btncontainer');
const gameSelect=document.querySelector('#maxgames');
//get all important elements
//make variables for score keeping
let p1Score=0;
let p2Score=0;
let maxScore=0;
let gameOver=false;

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
    reset();
})
//add event listener to the container of the button
//so each time a button is clicked
//we can see the target element and decide what to dp
btnContainer.addEventListener('click',(e)=>{ //with use of Event Delegation
    if(e.target.innerHTML==='+1 Player One')
  {
    //if event target is p1 then +1 his score
    //and update the textContent of the span element 
    if(!gameOver)
    {
        p1Score++;
    }
    if(p1Score===maxScore)
    {
     gameOver=true;
     //add appropriate classes to winner and looser
     p1ScoreDisplay.setAttribute('class','winner');
     p2ScoreDisplay.setAttribute('class','loser');
    }
    p1ScoreDisplay.textContent=p1Score;
  }
    else if(e.target.innerHTML==='+1 Player Two')
    {
        //same for player 2
        if(!gameOver)
        {
            p2Score++;
        }
        if(p2Score===maxScore)
        {
         gameOver=true;
         //add appropriate classes to winner and looser
         p2ScoreDisplay.setAttribute('class','winner');
         //or .classList.add('class name');
         p1ScoreDisplay.setAttribute('class','loser');
        }
        p2ScoreDisplay.textContent=p2Score;
      }
    else
    {
        reset();
    }
});

function reset(){
    //if a click event happens on the btnContainer
        //but the target is either p1btn or p2btn
        //then is the reset button so zero all values        p1Score=0;
        p2Score=0;
        p1Score=0;
        p1ScoreDisplay.textContent=0;
        p2ScoreDisplay.textContent=0;
        gameOver=false;
        //remove all winner status classes
        p1ScoreDisplay.classList.remove('winner','loser');
        p2ScoreDisplay.classList.remove('winner','loser');
}