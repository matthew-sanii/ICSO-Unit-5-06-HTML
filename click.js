// JavaScript File
let response=document.getElementById("response");
let age;
let button;
button=document.getElementById("button");
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
    }
    else if (answerValue < age){
      response.innerHTML="Too low, try again";
      button.innerHTML="Try Again";
  }
    else if (answerValue > age){
      response.innerHTML="Too high, try again";
      button.innerHTML="Try Again";
      }
    else{
      response.innerHTML="invalid guess, try again";
    }
}
