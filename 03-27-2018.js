var initialquestion = prompt("Which test would you like to take?");
var options = 0;

/*

SPACING BETWEEN VARIABLES, FUNCTIONS, AND OTHER CODE

*/

function abcdarrayinsert(question, array, index, retry){
  if (question == "a" || question == "A"){
    array[index] = 1;
    console.log("You chose 'A'.");
  }
  else if (question == "b" || question == "B"){
    array[index] = 2;
    console.log("You chose 'B'.");
  }
  else if (question == "c" || question == "C"){
    array[index] = 3;
    console.log("You chose 'C'.");
  }
  else if (question == "d" || question == "D"){
    array[index] = 4;
    console.log("You chose 'D'.");
  }
  else if (question == "1" || question == "one" || question == "One"){
    array[index] = 1;
    console.log("You chose '1'.");
  }
  else if (question == "2" || question == "two" || question == "Two"){
    array[index] = 2;
    console.log("You chose '2'.");
  }
  else if (question == "3" || question == "three" || question == "Three"){
    array[index] = 3;
    console.log("You chose '3'.");
  }
  else if (question == "4" || question == "four" || question == "Four"){
    array[index] = 4;
    console.log("You chose '4'.");
  }
  else if (question == "5" || question == "five" || question == "Five"){
    array[index] = 5;
    console.log("You chose '5'.");
  }
  // !!!!! EXPERIMENTAL SECTION !!!!! //
  else{
    var tryagain = prompt("We're sorry, but your response does not mach a valid input. Try again!" + retry);
    if ((tryagain != "a") || (tryagain != "A") || (tryagain != "b") || (tryagain != "B") || (tryagain != "c") || (tryagain != "C") || (tryagain != "d") || (tryagain != "D") || (tryagain != "1") || (tryagain != "2") || (tryagain != "3") || (tryagain != "4") || (tryagain != "5") (tryagain != "one") || (tryagain != "One") || (tryagain != "two") || (tryagain != "Two") || (tryagain != "three") || (tryagain != "Three") || (tryagain != "four") || (tryagain != "Four") || (tryagain != "five") || (tryagain != "Five")){
      tryagain = prompt("We're sorry, but your response does not mach a valid input. Try again!" + retry);
      arrayindexinsert(tryagain);
    }
    else{
      arrayindexinsert(tryagain);
    }
  }
  console.log(array);
  // !!!!! EXPERIMENTAL SECTION !!!!! //
}

function diagnosis(array, numberofoptions){
  function add(a, b){
    return a + b;
  }
  var length = array.length;
  var sumofquestions = array.reduce(add, 0);
  var score = sumofquestions/length;
  var test = initialquestion;
  console.log("You scored: " + score + " out of " + numberofoptions + ".");
// Jeremy helped me realize that this portion was flawed, because it would move to the else result if the score wasn't exactly 1, 2, or 3  
  if (score <= 1){
    console.log("You do not have: " + test);
  }
  else if ((score <= 2) && (score > 1)){
    console.log("You may have slight: " + test + ". Look more into " + test + " to find out more about it and whether you have it or not.");
  }
  else if ((score <= 3) && (score > 2)){
    console.log("You might have: " + test + ". It might be advised to seek additional advice and diagnostics from a mental health professional.");
  }
  else{
    console.log("You likely have: " + test + ". We advise that you see a mental health expert for further diagnosis and treatment");
  }
}

/*

SPACING BETWEEN VARIABLES, FUNCTIONS, AND OTHER CODE

*/

if ((initialquestion == "Depression") || (initialquestion == "depression")){
  console.log("TEST: " + initialquestion);
  var depressionarray = [];
  options = "A. Not at all, B. Several days, C. More than half of the days, D. Nearly every day";
  var depressionquestion1 = prompt("Little interest or pleasure in doing things over the last two weeks: " + options);
  abcdarrayinsert(depressionquestion1, depressionarray, 0, "Little interest or pleasure in doing things over the last two weeks: " + options);
  var depressionquestion2 = prompt("Feeling down, depressed, or hopeless over the last two weeks: " + options);
  abcdarrayinsert(depressionquestion2, depressionarray, 1, "Feeling down, depressed, or hopeless over the last two weeks: " + options);
  var depressionquestion3 = prompt("Trouble falling or staying asleep, or sleeping too much over the last two weeks: " + options);
  abcdarrayinsert(depressionquestion3, depressionarray, 2, "Trouble falling or staying asleep, or sleeping too much over the last two weeks: " + options);
  var depressionquestion4 = prompt("Feeling tired or having little energy over the last two weeks: " + options);
  abcdarrayinsert(depressionquestion4, depressionarray, 3, "Feeling tired or having little energy over the last two weeks: " + options);
  var depressionquestion5 = prompt("Poor appetite or overeating over the last two weeks: " + options);
  abcdarrayinsert(depressionquestion5, depressionarray, 4, "Poor appetite or overeating over the last two weeks: " + options);
  var depressionquestion6 = prompt("Feeling bad about yourself - or that you are a failure or have let yourself or your family down over the last two weeks: " + options);
  abcdarrayinsert(depressionquestion6, depressionarray, 5, "Feeling bad about yourself - or that you are a failure or have let yourself or your family down over the last two weeks: " + options);
  var depressionquestion7 = prompt("Trouble concentrating on things, such as reading the newspaper or watching television over the last two weeks: " + options);
  abcdarrayinsert(depressionquestion7, depressionarray, 6, "Trouble concentrating on things, such as reading the newspaper or watching television over the last two weeks: " + options);
  var depressionquestion8 = prompt("Moving or speaking so slowly that other people could have noticed over the last two weeks: " + options);
  abcdarrayinsert(depressionquestion8, depressionarray, 7, "Moving or speaking so slowly that other people could have noticed over the last two weeks: " + options);
  var depressionquestion9 = prompt("Thoughts that you would be better off dead, or of hurting yourself over the last two weeks: " + options);
  abcdarrayinsert(depressionquestion9, depressionarray, 8, "Thoughts that you would be better off dead, or of hurting yourself over the last two weeks: " + options);
  var depressionquestion10 = prompt("If you've had any days with issues above, how difficult have these problems made it for you at work, home, school, or with other people?: A. Not difficult at all, B. Somewhat difficult, C. Very difficult, D. Extremely difficult.");
  abcdarrayinsert(depressionquestion10, depressionarray, 9, "If you've had any days with issues above, how difficult have these problems made it for you at work, home, school, or with other people?: A. Not difficult at all, B. Somewhat difficult, C. Very difficult, D. Extremely difficult.");
  diagnosis(depressionarray, 4);
}
else if ((initialquestion == "anxiety") || (initialquestion == "Anxiety")){
  console.log("TEST: " + initialquestion);
  var anxietyarray = [];
  options = "1 (Not at all) - 5 (All the time)";
}
