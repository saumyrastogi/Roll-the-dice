


document.addEventListener("click", afterclick);
function afterclick() {
  var randomvar=Math.floor(Math.random()*6)+1;
  var randomimg="dice"+ randomvar +".png";
  var randomsrc="images/"+ randomimg ;
  document.querySelectorAll("img")[0].setAttribute("src", randomsrc);
  var randomvar1=Math.floor(Math.random()*6)+1;
  var randomimg1="dice"+ randomvar1 +".png";
  var randomsrc1="images/"+ randomimg1 ;
  document.querySelectorAll("img")[1].setAttribute("src", randomsrc1);
  if(randomvar>randomvar1)
  {
    document.querySelector("h1").innerHTML="🚩 Player 1 wins! Click to play again.";
  }
  else if (randomvar<randomvar1)
  {
    document.querySelector("h1").innerHTML="🚩 Player 2 wins! Click to play again.";

  }
  else {
    document.querySelector("h1").innerHTML="Draw! 💨Click to play again.";
  }

}
