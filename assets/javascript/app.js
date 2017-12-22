
//////variables:
//================================
var correct;
var wrong;
var totalSeconds = 41;
var myInterval;
var quizContent;
var resultsBtn;

//////functions
//================================

//clear document of quiz div
function clearQuiz() {
    quizContent = $("form").detach();
    resultsBtn = $("button").detach();
    $(".load-btn").append('<button type="button" class="btn btn-success btn-lg btn-spacing center-block"><h3>Start</h3></button>');
};

//on click, displays quiz questions and answers
function clickStart() {
  $(".btn").click(function() {
    $(".load-btn").empty();
    $(".results-button").append(resultsBtn);
    $(".time-left").prepend(start());
    $(".quiz-div").prepend(quizContent);
  });
};

//sets countdown timer
function start() {
  myInterval = setInterval(decreaseTotalSecs, 1000);
}

//decreases countdown timer by 10 second increments
function decreaseTotalSecs() {
  totalSeconds -= 1;
  $(".time-left").text("You have " + totalSeconds + " seconds remaining.")

  if (totalSeconds === 0) {
    timeUp();
    // alert("Time's up")
    quizContent = $("form").detach();
    resultsBtn = $("button").detach();
    $(".results").html("<p>You got " + correct + " correct and " + wrong + " wrong.</p>");
    gifOptions();
  }
}

//stops countdown timer
function timeUp() {
    clearInterval(myInterval);
    checkAnswers()
}

//checks answers
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

  if (question1 == "1/12 tsp of honey") {
      correct += 1;
    } else {
      wrong += 1
    }

  if (question2 == "50-100 flowers" ) {
      correct += 1;
    } else {
      wrong += 1
  }

  if (question3 == "1,000-3,000 eggs/day" ) {
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
};

function gifOptions() {
  if (correct >= 5) {
    $(".results").append('<img src="./assets/images/pooh.gif" alt="winne the pooh eating honey">');
    $(".results").append('<p>...A fellow bee aficionado!😍</p>')
  } else if (correct >= 3) {
    $(".results").append('<img src="./assets/images/slow-bees.gif" alt="slow flying bees">');
    $(".results").append("<p>Not bad! Curious to learn more? Check out the <a href='http://www.dcbeekeepers.org/annual-beginning-beekeeping-course-information'>DC Beekeeper's annual class.</a></p>")
  } else {
    $(".results").append('<img src="./assets/images/bee-illus.gif" alt="flying bee illustration">');
    $(".results").append("<p><a href='http://a.co/24vmewQ'>Honeybee Deomcracy</a> is a great read. You'll be a pro in no time.</p>")
  }
}

//////Process
//================================
clearQuiz();
clickStart();


//displays results in 'results' div/class, and stops interval timer
$(".results-button").click(function() {
    checkAnswers();
    console.log(correct);
    console.log(wrong);
    $(".results").html("<p>You got " + correct + " correct and " + wrong + " wrong.</p>");

    gifOptions();

    timeUp();
    clearQuiz();
    $('.load-btn').empty();
});
