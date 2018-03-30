var welcome = prompt("Hello! Welcome to a quick psychology/mental illness tester that will test you and see whether you may be at risk of mental illness! Would you like to take a test ('Yes' or 'No')?");

var options = 0;

var array = [];


/*

SPACING BETWEEN VARIABLES, FUNCTIONS, AND OTHER CODE

*/


function arrayindexinsert(variable, index){
  if (variable == "a" || variable == "A" || variable == "1" || variable == "one" || variable == "One"){
    array[index] = 1;
  }
  else if (variable == "b" || variable == "B" || variable == "2" || variable == "two" || variable == "Two"){
    array[index] = 2;
  }
  else if (variable == "c" || variable == "C" || variable == "3" || variable == "three" || variable == "Three"){
    array[index] = 3;
  }
  else if (variable == "d" || variable == "D" || variable == "4" || variable == "four" || variable == "Four"){
    array[index] = 4;
  }
  else if (variable == "5" || variable == "five" || variable == "Five"){
    array[index] = 5;
  }
}

function arrayinsert(question, index, retry){
  if (question == "a" || question == "A" || question == "b" || question == "B" || question == "c" || question == "C" || question == "d" || question == "D"){
    arrayindexinsert(question, index);
  }
  else if ((question >= 1 && question <= 5) || (question == "one" || question == "One" || question == "two" || question == "Two" || question == "three" || question == "Three" || question == "four" || question == "Four" || question == "five" || question == "Five")){
    arrayindexinsert(question, index);
  }
    // !!!!! EXPERIMENTAL SECTION !!!!! //
  else{
    var tryagain = prompt("We're sorry, but your response does not mach a valid input. Try again!" + retry);
    if (tryagain != "a" || tryagain != "A" || tryagain != "b" || tryagain != "B" || tryagain != "c" || tryagain != "C" || tryagain != "d" || tryagain != "D" || tryagain < 1 || tryagain > 5 || tryagain != "one" || tryagain != "One" || tryagain != "two" || tryagain != "Two" || tryagain != "three" || tryagain != "Three" || tryagain != "four" || tryagain != "Four" || tryagain != "five" || tryagain != "Five"){
      tryagain = prompt("We're sorry, but your response does not mach a valid input. Try again!" + retry);
      arrayindexinsert(tryagain, index);
    }
    else{
      arrayindexinsert(tryagain, index);
    }
  }
    // !!!!! EXPERIMENTAL SECTION !!!!! //
}

function diagnosis(numberofoptions){
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
/////////////////////////////////////////////////////////////////////////////////////
}


/*

SPACING BETWEEN VARIABLES, FUNCTIONS, AND OTHER CODE

*/


if (welcome == "Yes" || welcome == "yes"){
  var initialquestion = prompt("Which test would you like to take?");
  console.log("TEST: " + initialquestion);
  if ((initialquestion == "Depression") || (initialquestion == "depression")){
    options = "A. Not at all, B. Several days, C. More than half of the days, D. Nearly every day";
    var depressionquestion1 = prompt("Little interest or pleasure in doing things over the last two weeks: " + options);
    arrayinsert(depressionquestion1, 0, "Little interest or pleasure in doing things over the last two weeks: " + options);
    var depressionquestion2 = prompt("Feeling down, depressed, or hopeless over the last two weeks: " + options);
    arrayinsert(depressionquestion2, 1, "Feeling down, depressed, or hopeless over the last two weeks: " + options);
    var depressionquestion3 = prompt("Trouble falling or staying asleep, or sleeping too much over the last two weeks: " + options);
    arrayinsert(depressionquestion3, 2, "Trouble falling or staying asleep, or sleeping too much over the last two weeks: " + options);
    var depressionquestion4 = prompt("Feeling tired or having little energy over the last two weeks: " + options);
    arrayinsert(depressionquestion4, 3, "Feeling tired or having little energy over the last two weeks: " + options);
    var depressionquestion5 = prompt("Poor appetite or overeating over the last two weeks: " + options);
    arrayinsert(depressionquestion5, 4, "Poor appetite or overeating over the last two weeks: " + options);
    var depressionquestion6 = prompt("Feeling bad about yourself - or that you are a failure or have let yourself or your family down over the last two weeks: " + options);
    arrayinsert(depressionquestion6, 5, "Feeling bad about yourself - or that you are a failure or have let yourself or your family down over the last two weeks: " + options);
    var depressionquestion7 = prompt("Trouble concentrating on things, such as reading the newspaper or watching television over the last two weeks: " + options);
    arrayinsert(depressionquestion7, 6, "Trouble concentrating on things, such as reading the newspaper or watching television over the last two weeks: " + options);
    var depressionquestion8 = prompt("Moving or speaking so slowly that other people could have noticed over the last two weeks: " + options);
    arrayinsert(depressionquestion8, 7, "Moving or speaking so slowly that other people could have noticed over the last two weeks: " + options);
    var depressionquestion9 = prompt("Thoughts that you would be better off dead, or of hurting yourself over the last two weeks: " + options);
    arrayinsert(depressionquestion9, 8, "Thoughts that you would be better off dead, or of hurting yourself over the last two weeks: " + options);
    var depressionquestion10 = prompt("If you've had any days with issues above, how difficult have these problems made it for you at work, home, school, or with other people?: A. Not difficult at all, B. Somewhat difficult, C. Very difficult, D. Extremely difficult.");
    arrayinsert(depressionquestion10, 9, "If you've had any days with issues above, how difficult have these problems made it for you at work, home, school, or with other people?: A. Not difficult at all, B. Somewhat difficult, C. Very difficult, D. Extremely difficult.");
    diagnosis(4);
  }
  else if ((initialquestion == "anxiety") || (initialquestion == "Anxiety")){
  options = "1 (Not at all) - 5 (All the time)";
  }
}
else if (welcome == "No" || welcome == "no"){
  console.log("Alright! We understand and thanks for taking the time to check out our project.");
}
else{
  console.log("We're sorry, but the input you provided is not a valid input to this question. Please restart the program and respond with 'Yes', 'yes', 'No', or 'no' as other answers will not be accepted.");
}


/*
OPPORTUNITIES
-----------
1.) Instead of defining new arrays for each test, create a global array and us it in
each question--since multiple tests cannot be run at the same time.
2.) Instead of having individual else if statements for inputs of 1-4 that did the
exact same as the inputs of a-d would do, merging the statements by adding || to the
a-b if else statements and putting it there.
*/

