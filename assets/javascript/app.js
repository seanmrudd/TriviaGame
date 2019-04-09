
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

var correct = 0;
var incorrect = 0;
var unanswered = 5;

$('.game-start').on('click', function () {
    $('.game-start').hide('.game-start');
    $('#game').show('#game');

    // setTimeout(endGame, 1000 * 5);

    // function endGame (){
    //     ('#timer').append(time);
    //     timeLeft = time;
    //     time--;
    // }

    function endgame() {
        $('#timer').hide(0, '#timer');
        $('#game').hide(0, '#game');
        $('#game-results').show(0, '#game-results');
        
        for (i=0;i<5;i++) {
            var choice = $('input[name="answer"'+i).val();
        }
        if(choice=='true'){
            correct++;
        }else if (choice=='false'){
            incorrect++
        }else unanswered--;
    }

    $('#finish').on('click', function () {
        endgame();
    })

    function countDown() {
        $('#timer').each(function () {
            var count = parseInt($(this).html());
            if (count !== 0) {
                $(this).html(count - 1);
            }
            if (count == 0) {
                clearInterval(countDown);
                endgame();
            }
        });
    };


    setInterval(countDown, 1000);

    $('#correct').text(": " + correct);
    $('#incorrect').text(": " + incorrect);
    $('#unanswered').text(": " + unanswered);

    // $('input[name="answer"]=="true"')
})