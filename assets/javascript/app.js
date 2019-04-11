var correct = 0;
var incorrect = 0;
var unanswered = 5;
var timerRunning = false;

function endgame() {
    $('#timer').hide(0, '#timer');
    $('#game').hide(0, '#game');
    $('#game-results').show(0, '#game-results');
    scoring1();
    scoring2();
    scoring3();
    scoring4();
    scoring5();
}

function countDown() {
    $('#timer').each(function () {
        var count = parseInt($('#timer').html());
        if (count !== 0) {
            $('#timer').html(count - 1);
        }
        if (count == 0) {
            clearInterval(count);
            endgame();
        }
    });
    if (!timerRunning) {
        setInterval(countDown, 1000);
        timerRunning = true;
    }
};

$('#game-start').on('click', function () {
    $('#game-start').hide('#game-start');
    $('#game').show('#game');
    countDown();
})

var answer1Array = [];
console.log(answer1Array);
var answer2Array = [];
console.log(answer2Array);
var answer3Array = [];
console.log(answer3Array);
var answer4Array = [];
console.log(answer4Array);
var answer5Array = [];
console.log(answer5Array);

$("input[type='radio']").on("click", function () {
    var answerOne = $("input[name='answer1']:checked").val();
    console.log(answerOne);
   answer1Array.unshift(answerOne)
});

function scoring1() {
    var answer1 = answer1Array[0];
    console.log(answer1Array);
    if(answer1 === 'correct') {
        correct++;
    } else if (answer1 === 'incorrect') {
        incorrect++;
    } else unanswered--;
    
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
    if(answer2 === 'correct') {
        correct++;
    } else if (answer2 === 'incorrect') {
        incorrect++;
    } else unanswered--;
    
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
    if(answer3 === 'correct') {
        correct++;
    } else if (answer3 === 'incorrect') {
        incorrect++;
    } else unanswered--;
    
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
    if(answer4 === 'correct') {
        correct++;
    } else if (answer4 === 'incorrect') {
        incorrect++;
    } else unanswered--;
    
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
    if(answer5 === 'correct') {
        correct++;
    } else if (answer5 === 'incorrect') {
        incorrect++;
    } else unanswered--;
    
$('#correct').text(": " + correct);
$('#incorrect').text(": " + incorrect);
$('#unanswered').text(": " + unanswered);
}

$('#finish').on('click', function () {
    endgame();
})


// $(document ).ready(function() {

//     startButton = $("<button>");

//     startButton.addClass("start");

//     $('#content').append(startButton);

//     $('.start').text('Game Start');

//     var Questions1 = ('<h1>This is question 1?</h1>')
//     var Answers1 = ('radiobuttons go in here with answers')

//     $(".start").on("click", function () {
//         $('.start').hide('.start');
//         $('#content').append(Question1);
//         $('#content').append(Answers1);
//     })
// })
// setTimeout(sixtySeconds, 1000 * 60);

// setTimeout(endGame, 1000 * 5);

// function endGame (){
//     ('#timer').append(time);
//     timeLeft = time;
//     time--;
// }