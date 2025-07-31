let question;
let Answer1;
let Answer2;
let Answer3;
let questionNumber;
let correctAnswer;
let ourAnswer;
let correctAudio;

let answeredQuestions = [];

let QuestionsOfTen;

let HasFinished;

function LoadQuestion() {
    if(questionNumber === 0){
        question.innerHTML = "Who was the first american president?";
        correctAnswer = 2;
        Answer1.innerHTML = "Abraham Lincoln";
        Answer2.innerHTML = "George Washington";
        Answer3.innerHTML = "Thomas Jefferson";
    }
    else if(questionNumber === 1){
        question.innerHTML = "When did World War II start?";
        correctAnswer = 1;
        Answer1.innerHTML = "1939";
        Answer2.innerHTML = "1938";
        Answer3.innerHTML = "1940";
    }
    else if(questionNumber === 2){
        question.innerHTML = "When did the Berlin wall fall?";
        correctAnswer = 3;
        Answer1.innerHTML = "1975";
        Answer2.innerHTML = "1991";
        Answer3.innerHTML = "1989";
    }
    else if(questionNumber === 3){
        question.innerHTML = "Who discovered America?";
        correctAnswer = 3;
        Answer1.innerHTML = "Amerigo Vespucci";
        Answer2.innerHTML = "Ferdinand Magellan";
        Answer3.innerHTML = "Christopher Colombus";
    }
    else if(questionNumber === 4){
        question.innerHTML = "Which country launched the first satellite into space?";
        correctAnswer = 2;
        Answer1.innerHTML = "United States";
        Answer2.innerHTML = "Soviet Union (USSR)";
        Answer3.innerHTML = "China";
    }
    else if(questionNumber === 5){
        question.innerHTML = "Who was Napoleon?";
        correctAnswer = 2;
        Answer1.innerHTML = "A Spanish king";
        Answer2.innerHTML = "A French military leader and emperor";
        Answer3.innerHTML = "An English philosopher";
    }
    else if(questionNumber === 6){
        question.innerHTML = "What was the Cold War?";
        correctAnswer = 1;
        Answer1.innerHTML = "A political tension between the USA and USSR after WWII";
        Answer2.innerHTML = "A civil war in Russia";
        Answer3.innerHTML = "A war in Alaska";
    }
    else if(questionNumber === 7){
        question.innerHTML = "When was the French Revolution?";
        correctAnswer = 2;
        Answer1.innerHTML = "1879";
        Answer2.innerHTML = "1789";
        Answer3.innerHTML = "1812";
    }
    else if(questionNumber === 8){
        question.innerHTML = "Who was Adolf Hitler?";
        correctAnswer = 1;
        Answer1.innerHTML = "Nazi german dictator";
        Answer2.innerHTML = "Empeor of Austria";
        Answer3.innerHTML = "French General";
    }
    else if(questionNumber === 9){
        question.innerHTML = "When did World War II end?";
        correctAnswer = 3;
        Answer1.innerHTML = "1944";
        Answer2.innerHTML = "1946";
        Answer3.innerHTML = "1945";
    }

    QuestionsOfTen.innerHTML = answeredQuestions.length + 1;
}

function CheckAnser1(){
    ourAnswer = 1;
    if(ourAnswer === correctAnswer){
        answeredQuestions.push(questionNumber);
        GetNewQuestion();
        correctAudio.play();
    }
}
function CheckAnser2(){
    ourAnswer = 2;
    if(ourAnswer === correctAnswer){
        answeredQuestions.push(questionNumber);
        GetNewQuestion();
        correctAudio.play();
    }
}
function CheckAnser3(){
    ourAnswer = 3;
    if(ourAnswer === correctAnswer){
        answeredQuestions.push(questionNumber);
        GetNewQuestion();
        correctAudio.play();
    }
}

function GetNewQuestion(){
    if(answeredQuestions.length === 10){
        question.innerHTML = "All questions answered!";
        Answer1.style.display = "none";
        Answer2.innerHTML = "Restart";
        Answer3.style.display = "none";

        Answer2.addEventListener("click", Reload);
        HasFinished = true;
        return;
    }

    do {
        questionNumber = Math.floor(Math.random() * 10);
    } while (answeredQuestions.includes(questionNumber));

    LoadQuestion();
}


window.onload = function(){
    question = document.getElementById("Question");
    Answer1 = document.getElementById("Button1");
    Answer2 = document.getElementById("Button2");
    Answer3 = document.getElementById("Button3");

    Answer1.addEventListener("click", CheckAnser1);
    Answer2.addEventListener("click", CheckAnser2);
    Answer3.addEventListener("click", CheckAnser3);

    correctAudio = new Audio('correct.mp3');

    QuestionsOfTen = document.getElementById("QuestionsAnswered");

    HasFinished = false;

    GetNewQuestion();
};

function Reload(){
    location.reload();
}
