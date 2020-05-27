// JavaScript File
let response=document.getElementById("response");
let age;
let button;
button=document.getElementById("button");
let button2;
button2=document.getElementById("button2");
button2.style.display = "none";
age=Math.floor((Math.random() * 40) + 1);
let answer;
answer=document.getElementById("answer");
document.getElementById("button").onclick=function(){Click()};
function Click(){
  answer=document.getElementById("answer");
  let answerValue;
  answerValue=Number(answer.value);
  if (answerValue == age){
    response.innerHTML="You Win!"; // This innerHTML line returns that its the weekend.
    button2.style.display="block";
    button.style.display="none";
  }
  else if (answerValue < age){
    response.innerHTML="Too low, please try again";
    button.innerHTML="Try Again";
  }
  else if (answerValue > age){
    response.innerHTML="Too high, please try again";
    button.innerHTML="Try Again";
    }
  else{
    response.innerHTML="Invalid guess, try again";
  }
}
button2.addEventListener("click",hideshow,false);
function hideshow() {
  age=Math.floor((Math.random() * 40) + 1);
  button.style.display="block";
  button2.style.display="none";
  button.innerHTML="Guess";
  button2.style.textAlign="initial";
  button.style.textAlign="initial";
}