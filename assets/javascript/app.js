
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

$('#game').hide(0, '#game');

// setTimeout(sixtySeconds, 1000 * 60);
var time = 60;

$('.game-start').on('click', function () {
    $('.game-start').hide('.game-start');
    $('#game').show('#game');
    setTimeout(endGame, 1000 * 60);
    function endGame (){
        
    }

    function count(){
        time--;
        $('#timer').append(countDown)
    }
})