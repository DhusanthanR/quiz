var questions = [{            
    "question":"Web page are written using ?",
    "option1":"FTP",
            "option2":"HTTP",
            "option3":"HTMP",
            "option4":"URl",
            "answer":"3"
        },
        {
            "question":"Which of the following is an advantage of using JavaScript ?",
            "option1":"Less server interaction",
            "option2":"Immediate feedback to the visitors",
            "option3":"Increased interactivity",
            "option4":"All of the above",
            "answer":"4"
        },
        {
            "question":"Which built-in method combines the text of two strings and returns a new string ?",
            "option1":"append()",
            "option2":"concat()",
            "option3":"attach()",
            "option4":"None of the above",
            "answer":"2"
        },{
            "question":"Which of the following defines a measurement in centimeters ?",
            "option1":"%",
            "option2":"cm",
            "option3":"em",
            "option4":"ex",
            "answer":"2"
        },{
            "question":"Which of the following value of cursor shows it as crosshair or plus sign ?",
            "option1":"crosshair",
            "option2":"default",
            "option3":"pointer",
            "option4":"move",
            "answer":"1"
        },{
            "question":"Which of the following attribute triggers an abort event ?",
            "option1":"offline",
            "option2":"onabort",
            "option3":"abort",
            "option4":"onbeforeonload",
            "answer":"2"
        },{
            "question":"Which of the following attribute triggers event when the document goes offline ?",
            "option1":"onloadedmetadata",
            "option2":"onloadstart",
            "option3":"onmessage",
            "option4":"onffline",
            "answer":"4"
        },{
            "question":"When were the first recorded Olympic held ?",
            "option1":"825 BC",
            "option2":"776 BC",
            "option3":"320 Bc",
            "option4":"80 AD",
            "answer":"2"
        },{
            "question":"Who was the First Test Centurion in Indian cricket ?",
            "option1":"VinuMankad",
            "option2":"C.K.Naidu",
            "option3":"Lala Amarnath",
            "option4":"Mansur All Pataudi",
            "answer":"3"
        }
        ,{
            "question":"The term 'Beamer is associated with .",
            "option1":"Football",
            "option2":"Hockey",
            "option3":"Cricket",
            "option4":"Chess",
            "answer":"3"
        }];


var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;


// var container = document.getElementById('quiz-content');
var content = document.querySelector('.content');
var questionEl = document.getElementById('question');

var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

loadQuestion = questionIndex => {
    var q =questions[questionIndex];
    questionEl.textContent = (questionIndex + 1+".") +" " + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion(){
    var selectOption = document.querySelector('input[type=radio]:checked');
    if(!selectOption){
        alert('Select the Option');
        return;
    } 
    var answers = selectOption.value; 
    if(questions[currentQuestion].answer == answers){
        score +=10;
    }
    selectOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totQuestions){
        content.classList.add('d-none');
        resultCont.style.display = '';
        let output = 0;
         const timer = setInterval(() => {
             resultCont.querySelector('span').textContent = `${output}%`;
             if(output === score){
                 clearInterval(timer);
             }
             else{
                 output++;
             }
         }, 15);
        
        return;
    }
    refresh = (e) => location.reload();


    loadQuestion(currentQuestion);

};
loadQuestion(currentQuestion);