// JavaScript File
let response=document.getElementById("response");
document.getElementById("button").onclick=function(){Click()};
function Click(){
  let answer=document.getElementById("answer");
  let answerValue;
  answerValue=String(answer.value);
  let answer2=document.getElementById("answer2");
  answer2=Number(answer2.value);
  if (answerValue == "sunday" || answerValue == "Sunday" || answerValue == "saturday" || answerValue == "Saturday"){
    response.innerHTML="Time to relax for the weekend!"; // This innerHTML line returns that its the weekend.
  }
  else if (answer2<18 && (answerValue != "saturday" || answerValue != "sunday" || answerValue != "Sunday" || answerValue != "Saturday")){
    response.innerHTML="Time to go to school!"; // This innerHTML line returns that it's time for school.
}
  else if (answer2>=18 && (answerValue != "saturday" || answerValue != "sunday" || answerValue != "Sunday" || answerValue != "Saturday")){
    response.innerHTML="Time to go to work!"; // This innerHTML line returns that it's time for work.
}
}