function submitAnswers(answers){

  var total = answers.length;
  var score = 0;
  var choice = []
  for(var i = 1; i <= total; i++){
    choice[i] = document.forms["quiz"]["q"+i].value;
  }
  for(i = 1; i <= total; i++){
    if(choice[i] == answers[i - 1]){
      score=score+3;
    }else{
      score=score-1;
    }
  }
  alert("You scored " + score + " out of " + total*3);
  return false;
}
