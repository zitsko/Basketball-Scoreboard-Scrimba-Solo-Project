let homeScoreEl =document.getElementById("home-score")
let guestScoreEl =document.getElementById("guest-score")
const homeScoreBtnOne = document.getElementById("home-score-btn-1")
const guestScoreBtnOne = document.getElementById("guest-score-btn-1")
const homeTeamName= document.getElementById("home-team")
const guestTeamName= document.getElementById("guest-team")
let homeScore=0
let guestScore=0 

function addPoints(team, points) {
  if (team === "home") {
    homeScore += points
    homeScoreEl.textContent = homeScore
      } else {
    guestScore += points
    guestScoreEl.textContent = guestScore
  } 
  highlightLeader()
} 

function highlightLeader(){
    if (homeScore > guestScore){
      homeTeamName.classList.add("highlight")
      guestTeamName.classList.remove("highlight")
    } else if(homeScore < guestScore){
       guestTeamName.classList.add("highlight") 
       homeTeamName.classList.remove("highlight")
    } else if(homeScore = guestScore){
      homeTeamName.classList.remove("highlight")  
      guestTeamName.classList.remove("highlight")
    }
}

function newGame (){
    homeScore=0
    guestScore=0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    homeTeamName.classList.remove("highlight")
    guestTeamName.classList.remove("highlight")
}

document.getElementById("newgame-btn").addEventListener("click",newGame)





