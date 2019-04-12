//HTML loads "Trivia Game"
//HTML loads Start button

//Start Button pressed - Game starts

//First Question pops up with four answers

//User picks answer

//Depending if answer is correct, incorrect, or unanswered, moves to next page displaying status of player's guess

//Loop to second question with answers...

//After last question is revealed correct, incorrect, or unanswered, score page is revealed with stats

//Button appears to restart the game



//Declare Variables
var answeredCorrect = 0;
var answeredIncorrect = 0;
var unanswered = 5;

var questions = [];
questions[0] = 'Who is John?';
questions[1] = 'What is John?';
questions[2] = 'When is John?';
questions[3] = 'Where is John?';
questions[4] = 'How is John?';

console.log(questions);

var answers = [];
answers[0] = '<button class="question1" value="correct">Answer1</button></br><button class="question1" value="incorrect">Answer2</button></br><button class="question1" value="incorrect">Answer3</button></br><button class="question1" value="incorrect">Answer4</button>';
answers[1] = '<button class="btn1" value="correct">Answer1</button></br><button class="btn2" value="incorrect">Answer2</button></br><button value="incorrect">Answer3</button></br><button value="incorrect">Answer4</button>';
answers[2] = '<button class="btn1" value="correct">Answer1</button></br><button class="btn2" value="incorrect">Answer2</button></br><button value="incorrect">Answer3</button></br><button value="incorrect">Answer4</button>';
answers[3] = '<button class="btn1" value="correct">Answer1</button></br><button class="btn2" value="incorrect">Answer2</button></br><button value="incorrect">Answer3</button></br><button value="incorrect">Answer4</button>';
answers[4] = '<button class="btn1" value="correct">Answer1</button></br><button class="btn2" value="incorrect">Answer2</button></br><button value="incorrect">Answer3</button></br><button value="incorrect">Answer4</button>';

console.log(answers);

var promptCorrect = 'You are correct!';
var promptIncorrect = 'You are wrong!';
var promptUnanswered = 'Out of time!';

// var triviaObject = {
//     question1: {
//         questionOne: 'Who is John?',
//         answersOne: '<button value="correct">Answer1</button></br><button value="incorrect">Answer2</button></br><button value="incorrect">Answer3</button></br><button value="incorrect">Answer4</button>',
//         promptCorrect: 'You are correct!',
//         promptIncorrect: 'You are wrong!',
//         promptUnanswered: 'Out of time!'
//     },
//     question2: {
//         questionTwo: 'What is John?',
//         answersTwo: '<button value="correct">Answer1</button></br><button value="incorrect">Answer2</button></br><button value="incorrect">Answer3</button></br><button value="incorrect">Answer4</button>',
//     },
//     question3: {
//         questionThree: 'When is John?',
//         answersThree: '<button value="correct">Answer1</button></br><button value="incorrect">Answer2</button></br><button value="incorrect">Answer3</button></br><button value="incorrect">Answer4</button>',
//     },
//     question4: {
//         questionFour: 'Where is John?',
//         answersFour: '<button value="correct">Answer1</button></br><button value="incorrect">Answer2</button></br><button value="incorrect">Answer3</button></br><button value="incorrect">Answer4</button>',
//     },
//     question5: {
//         questionFive: 'Why is John?',
//         answersFive: '<button value="correct">Answer1</button></br><button value="incorrect">Answer2</button></br><button value="incorrect">Answer3</button></br><button value="incorrect">Answer4</button>',
//     },
// }
// console.log(triviaObject)
// //Click event game starts and Create 'for loop' to display question and answers

$('#game-start').on('click', function () {
    gameStart();
    $('#game-start').hide('#game-start');
})

function gameStart() {
    $('#questions').append(questions[0]);
    $('#answers').append(answers[0]);
}


//Player chooses an answer
// function gameStart() {
//     $('#questions').append(triviaObject.question1.questionOne);
//     $('#answers').append(triviaObject.question1.answersOne);
// }
console.log()
$('button').click(function () {
    var userGuess = $('<button>').val(this);
    console.log(userGuess);

    if (userGuess === correct) {
        answeredCorrect++;
    } else if (userGuess === incorrect) {
        answeredIncorrect++;
    } else unanswered--;
})
//Create if statement to determine right, wrong, or unanswered

//Give points

//Move on to "right or wrong" screen

//After "right or wrong" screen time out, move on to next question

//Display Stats page with Restart buttong