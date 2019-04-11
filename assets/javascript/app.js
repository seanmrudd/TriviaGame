
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

var correct = 0;
var incorrect = 0;
var unanswered = 5;
var timerRunning = false;

function endgame() {
    $('#timer').hide(0, '#timer');
    $('#game').hide(0, '#game');
    $('#game-results').show(0, '#game-results');
}

function countDown() {
    $('#timer').each(function () {
        var count = parseInt($('#timer').html());
        if (count !== 0) {
            $('#timer').html(count - 1);
        }
        if (count == 0) {
            clearInterval(countDown);
            endgame();
        }
    });
    if (!timerRunning) {
        setInterval(countDown, 1000);
        timerRunning = true;
    }
};

$('.game-start').on('click', function () {
    $('.game-start').hide('.game-start');
    $('#game').show('#game');
    countDown();

    $("input[type='radio']").on("click", function () {
        var answer = $("input[name='answer1']:checked").val();
        console.log(answer);
        if (answer === 'correct') {
            correct++;
        }
    });

    $('#finish').on('click', function () {
        endgame();
    })

    $('#correct').text(": " + correct);
    $('#incorrect').text(": " + incorrect);
    $('#unanswered').text(": " + unanswered);

})
