// list  all elements

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const timer = document.getElementById("timer");
const progress = document.getElementById("progress");
const renderanswer = document.getElementById("check");
const finalscore = document.getElementById("score")
const save = document.getElementById("save");

// create questions and choices & answers for each question

var questions = [

    {
        title : "What kind of coding language is Javascript ?",
        choices :["Scripting" , "design", "Coffee"],
        correct : "Scripting"
    },
    {

        
        title : "What can you store in an Array?",
        choices : ["number", "letter" , "all of the above"],
        correct : "all of the above"

    },
    {

        title : "What does JS stand for?",
        choices : ["Just Sing", "Javascript" ,"just syntax" ],
        correct : "Javascript"

    }

];

// create two variables, the first one is the index of the starting question(the first question), 
//which is 0 & the second is the index of the last question.


const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 4;
let score = 0;
var myVar ;
function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.title + "</p>";
    choiceA.innerHTML = q.choices[0];
    choiceB.innerHTML = q.choices[1];
    choiceC.innerHTML = q.choices[2];
}

start.addEventListener("click", startQuiz);
function startQuiz () {

    start.style.display = "none";
    renderQuestion();
    quiz.style.display ="block";
    rendertimer ();

}

function rendertimer () {
    myVar = setInterval (function () {
        --count;
        timer.innerHTML ="timer" + count;
        if (count === 0) { 
            clearInterval(myVar);
            quiz.style.display = "none";
            renderscore ();
        }
    }, 10000 ) ;

}

function checkAnswer(answer) {
    console.log(answer);
    if(answer == questions[runningQuestion].correct){
        score++;
        console.log(questions[runningQuestion].correct)
        renderanswer.innerHTML = "Correct";
    } else {
        renderanswer.innerHTML = "Wrong";
    }

    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        clearInterval(myVar);
        renderscore();
    }
    

function renderscore() {
    quiz.style.display ="none";
    progress.style.display = "block";
    var scorePercent = 100 * score / questions.lenght;
    finalscore.value = scorePercent
    save.value = scorePercent;
}

function myFunction () {
    var x = document.getElementById("finalscore").value;
    addscore.textContent = x;
}

function startagain(){
    startQuiz ();

}

}
