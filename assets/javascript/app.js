//Set variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timerRunning = false;
var minusTime;

var answer1Array = [];
            // console.log(answer1Array);
var answer2Array = [];
            // console.log(answer2Array);
var answer3Array = [];
            // console.log(answer3Array);
var answer4Array = [];
            // console.log(answer4Array);
var answer5Array = [];
            // console.log(answer5Array);


//Create function that will end the game.  Will be used if player submits or if time runs out.
function endgame() {
    $('#timer').hide(0, '#timer');
    $('#game').hide(0, '#game');
    $('#game-results').show(0, '#game-results');
    scoring1();
    scoring2();
    scoring3();
    scoring4();
    scoring5();
    clearInterval(minusTime);
}

//Function for a countdown timer
function countDown() {
    $('#timer').each(function () {
        var count = parseInt($('#timer').html());
        if (count !== 0) {
            $('#timer').html(count - 1);
        }
        if (count == 0) {
            clearInterval(minusTime);
            endgame();
        }
    });
    if (!timerRunning) {
        minusTime = setInterval(countDown, 1000);
        timerRunning = true;
    }
};

//Function to start game.
$('#game-start').on('click', function () {
    $('#game-start').hide('#game-start');
    $('#game').show('#game');
    countDown();
})

//Function to put last on click value into the [0] index of array.  That [0] index value is used to score with.
$("input[type='radio']").on("click", function () {
    var answerOne = $("input[name='answer1']:checked").val();
    console.log(answerOne);
    answer1Array.unshift(answerOne)
});

//Function to see if answer is right, wrong, or if left alone, unanswered
function scoring1() {
    var answer1 = answer1Array[0];
    console.log(answer1Array);
    if (answer1 === 'correct') {
        correct++;
    } else if (answer1 === 'incorrect') {
        incorrect++;
    } else unanswered++;

    $('#correct').text(": " + correct);
    $('#incorrect').text(": " + incorrect);
    $('#unanswered').text(": " + unanswered);
}

$("input[type='radio']").on("click", function () {
    var answerTwo = $("input[name='answer2']:checked").val();
    console.log(answerTwo);
    answer2Array.unshift(answerTwo)
});

function scoring2() {
    var answer2 = answer2Array[0];
    console.log(answer2Array);
    if (answer2 === 'correct') {
        correct++;
    } else if (answer2 === 'incorrect') {
        incorrect++;
    } else unanswered++;

    $('#correct').text(": " + correct);
    $('#incorrect').text(": " + incorrect);
    $('#unanswered').text(": " + unanswered);
}

$("input[type='radio']").on("click", function () {
    var answerThree = $("input[name='answer3']:checked").val();
    console.log(answerThree);
    answer3Array.unshift(answerThree)
});

function scoring3() {
    var answer3 = answer3Array[0];
    console.log(answer3Array);
    if (answer3 === 'correct') {
        correct++;
    } else if (answer3 === 'incorrect') {
        incorrect++;
    } else unanswered++;

    $('#correct').text(": " + correct);
    $('#incorrect').text(": " + incorrect);
    $('#unanswered').text(": " + unanswered);
}

$("input[type='radio']").on("click", function () {
    var answerFour = $("input[name='answer4']:checked").val();
    console.log(answerFour);
    answer4Array.unshift(answerFour)
});

function scoring4() {
    var answer4 = answer4Array[0];
    console.log(answer4Array);
    if (answer4 === 'correct') {
        correct++;
    } else if (answer4 === 'incorrect') {
        incorrect++;
    } else unanswered++;

    $('#correct').text(": " + correct);
    $('#incorrect').text(": " + incorrect);
    $('#unanswered').text(": " + unanswered);
}

$("input[type='radio']").on("click", function () {
    var answerFive = $("input[name='answer5']:checked").val();
    console.log(answerFive);
    answer5Array.unshift(answerFive)
});

function scoring5() {
    var answer5 = answer5Array[0];
    console.log(answer5Array);
    if (answer5 === 'correct') {
        correct++;
    } else if (answer5 === 'incorrect') {
        incorrect++;
    } else unanswered++;

    $('#correct').text(": " + correct);
    $('#incorrect').text(": " + incorrect);
    $('#unanswered').text(": " + unanswered);
}

//Function to end the game if submit button is clicked
$('#finish').on('click', function () {
    endgame();
})