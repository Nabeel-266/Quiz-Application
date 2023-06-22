// -------> For HTML Quiz Questions Objects (Constructor) <--------
function HtmlQueries(quesNum, question, option1, option2, option3, option4, correct) {
    this.quesNum = quesNum;
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.correctAns = correct;
};

const htmlQuery1 =
new HtmlQueries ('1', 'What does HTML stands for?', 'Hyper Text Material Language', 'Hyper Text Markup Language', 'Hyper Tool Markup Language', 'Hyper Text Multitask Language', 'Hyper Text Markup Language');
const htmlQuery2 = 
new HtmlQueries ('2', 'Choose the correct HTML element for the largest heading', '<head>', '<h1>', '<h6>', '<heading>', '<h1>');
const htmlQuery3 =
new HtmlQueries ('3', 'What is the correct HTML element for inserting a line break?', '<break>', '<lb>', '<linebreak>', '<br>', '<br>');
const htmlQuery4 =
new HtmlQueries ('4', 'Choose the correct HTML element to define important text', '<b>', '<important>', '<strong>', '<i>', '<strong>');
const htmlQuery5 =
new HtmlQueries ('5', 'Choose the correct HTML element to define emphasized text', '<italic>', '<i>', '<emphasize>', '<em>', '<em>');
const htmlQuery6 =
new HtmlQueries ('6', 'How can you open a link in a new tab/browser window?', '<a href="url" target="_blank">', '<a href="url" target="_new">', '<a href="url" target="_nextTab">', '<a href="url" target="_newTab">', '<a href="url" target="_blank">');
const htmlQuery7 =
new HtmlQueries ('7', 'Which of these elements are all <table> elements?', '<table> <head> <tfoot>', '<table> <td> <tt>', '<table> <tr> <td>', '<thead> <body> <tfoot>', '<table> <tr> <td>');
const htmlQuery8 =
new HtmlQueries ('8', 'How can you make a numbered list?', 'dl', 'ul', 'ol', 'nl', 'ol');
const htmlQuery9 =
new HtmlQueries ('9', 'What is the correct HTML for inserting an image?', '<image src="image.jpg" alt="myImage">', '<img href="image.jpg" alt="myImage">', '<img src="image.jpg" alt="myImage">', '<img src="image.jpg">myImage</img>', '<img src="image.jpg" alt="myImage">');
const htmlQuery10 =
new HtmlQueries ('10', 'In HTML, onblur and onfocus are:', 'Style attributes', 'HTML elements', 'Event Attributes', 'HTML tags', 'Event Attributes');

// -------> For HTML Quiz Questions Array <--------
const htmlQuestions = [htmlQuery1, htmlQuery2, htmlQuery3, htmlQuery4, htmlQuery5, htmlQuery6, htmlQuery7, htmlQuery8, htmlQuery9, htmlQuery10];
// console.log(htmlQuestions)


// --------------------> For Timer <----------------------
const remainingTimer = document.querySelector('.remainingTimer');
const timebar = document.querySelector('.timebar');
let skipAnsCounter = 0;
let counter;

const startTiming = (time) => {
    counter = setInterval(timer, 1000);
    function timer(){
        timebar.classList.add("animateTimebar");
        remainingTimer.innerText = time;
        time--;

        if(time < 0){
            skipAnsCounter++;
            nextQue();
            // console.log(skipAnsCounter, "---> Skipped Ans");
        }
        if(time < 9){
            remainingTimer.innerText = "0" + remainingTimer.innerText;
        }
    }
    if(counter > 10){
        clearInterval(counter);
        remainingTimer.innerText = "0"
    }
    // console.log(counter, "---> Counter VAl");
};


// --------------------> For Next Question <----------------------
const nextQueBtn = document.querySelector(".nextQueBtn");
const question = document.querySelector(".question");
const queryOptOne = document.querySelector(".queryOptOne");
const queryOptTwo = document.querySelector(".queryOptTwo");
const queryOptThree = document.querySelector(".queryOptThree");
const queryOptFour = document.querySelector(".queryOptFour");
const quesStatus = document.querySelector(".quesStatus");
const totalQue = document.querySelector(".totalQue");
const options = document.getElementsByName("option");
const quizQueryArea = document.querySelector(".quizQueryArea");
const quizResultArea = document.querySelector(".quizResultArea");
const correctAns = document.querySelector('.correctAns');
const wrongAns = document.querySelector('.wrongAns');
const skipQue = document.querySelector('.skipQue');
const quizStatus = document.querySelector('.quizStatus');

let index = 0;
let timeValue = 19;
let userAns;
let correctAnsCounter = 0;
let wrongAnsCounter = 0;


function nextQue() {
    
    options.forEach((option) => {
        if(option.checked){
            userAns = option.nextElementSibling.innerText;

            if(htmlQuestions[index - 1].correctAns === userAns){
                correctAnsCounter++;
            } 
            else {
                wrongAnsCounter++;
            }
        }
        option.checked = false;
        nextQueBtn.style.transform = "scale(0)"
    })

    
    if(index > htmlQuestions.length - 1){
        correctAns.innerHTML = correctAnsCounter < 10 ? `0${correctAnsCounter}` : `${correctAnsCounter}`;
        wrongAns.innerHTML = wrongAnsCounter < 10 ? `0${wrongAnsCounter}` : `${wrongAnsCounter}`;
        skipQue.innerHTML = skipAnsCounter < 10 ? `0${skipAnsCounter}` : `${skipAnsCounter}`;

        if(correctAnsCounter <= 2){
            quizStatus.innerHTML = "Poor";
        }
        else if(correctAnsCounter > 2 && correctAnsCounter <= 4){
            quizStatus.innerHTML = "Keep Practicing";
        }
        else if(correctAnsCounter > 4 && correctAnsCounter <= 6){
            quizStatus.innerHTML = "Nice";
        }
        else if(correctAnsCounter > 6 && correctAnsCounter <= 8){
            quizStatus.innerHTML = "Good";
        }
        else{
            quizStatus.innerHTML = "Excellent";
        }

        clearInterval(counter);
        quizQueryArea.classList.add("hide");
        quizResultArea.classList.remove("hide");
    }
    else{
        question.innerText = `${htmlQuestions[index].quesNum}. ${htmlQuestions[index].question}`;
        queryOptOne.innerText = htmlQuestions[index].option1;
        queryOptTwo.innerText = htmlQuestions[index].option2;
        queryOptThree.innerText = htmlQuestions[index].option3;
        queryOptFour.innerText = htmlQuestions[index].option4;
        quesStatus.innerText = htmlQuestions[index].quesNum;
        totalQue.innerText = htmlQuestions.length;
        
        index++;
    }
    
    timebar.classList.remove("animateTimebar");
    clearInterval(counter);
    startTiming(timeValue);

}
nextQue();


// ------> If Checked Option then Next Btn Show  
options.forEach((option) => {
    option.addEventListener("click", () => {
        nextQueBtn.style.transform = "scale(1)"
    })
})

