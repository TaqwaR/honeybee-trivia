

// variables:
var correct;
var wrong;
var totalSeconds = 60;
var myInterval;
var quizContent;
var resultsBtn;



//functions

///Clear document of quiz div
function clearQuiz() {
    quizContent = $("form").detach();
    resultsBtn = $("button").detach();
    $(".load-btn").append('<button type="button" class="btn btn-success btn-lg btn-spacing center-block">Start</button>');
};



////on click, displays quiz questions and answers
function clickStart() {
  $(".btn").click(function() {
    $(".load-btn").empty();
    $(".results-button").append(resultsBtn);
    $(".time-left").prepend(start());
    $(".quiz-div").append(quizContent);
  });
};

////displays results in results div/class, and stops interval timer
$(".results-button").click(function() {
    $(".results").html("<p> you got " + correct + " correct and " + wrong + " wrong.</p>");
    timeUp();
    clearQuiz();
});


////sets countdown timer
function start() {
  myInterval = setInterval(decreaseTotalSecs, 1000);
}


////decreases countdown timer by 10 second increments
function decreaseTotalSecs() {
  totalSeconds -= 1;
  console.log(totalSeconds);
  $(".time-left").text("You have " + totalSeconds + " seconds remaining.")

  if (totalSeconds == 0) {
    timeUp();
    alert("Time's up")
  }
}


////stops countdown timer
function timeUp() {
    clearInterval(myInterval);
}



////checks answers
function checkAnswers() {
  var question1 = $("input[name='question1']:checked").val();
  var question2 = $("input[name='question2']:checked").val();
  var question3 = $("input[name='question3']:checked").val();
  var question4 = $("input[name='question4']:checked").val();
  var question5 = $("input[name='question5']:checked").val();
  var question6 = $("input[name='question6']:checked").val();
  var question7 = $("input[name='question7']:checked").val();
  correct = 0;
  wrong = 0;

  if (question1 == "1/12 teaspoon of honey") {
      correct += 1;
    } else {
      wrong += 1
    }

  if (question2 == "50-100 flowers" ) {
      correct += 1;
    } else {
      wrong += 1
  }

  if (question3 == "1,000-3,000 eggs per day" ) {
    correct += 1;
  } else {
    wrong += 1
}

  if (question4 == "true") {
    correct += 1;
  } else {
    wrong += 1
}

  if (question5 == "true") {
    correct += 1;
  } else {
    wrong += 1
}

  if (question6 == "40,000 - 60,000") {
    correct += 1;
  } else {
    wrong += 1
}

  if (question7 == "2-3 miles") {
    correct += 1;
  } else {
    wrong += 1
}

  console.log(correct);
  console.log(wrong);
};

/////Process

clearQuiz();
clickStart();
checkAnswers()
$("input").click(function() { //adds up radio inputs and adds them to correct/wrong variables
  checkAnswers();
});
