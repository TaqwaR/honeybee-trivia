//psuedocode -- trivia game

// variables:
var correct;
var wrong;



//functions
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

$("input").click(function() {
  checkAnswers();
});

$(".btn").click(function() {
  $(".results").html("<p> you got " + correct + " correct and " + wrong + " wrong.</p>");
});
