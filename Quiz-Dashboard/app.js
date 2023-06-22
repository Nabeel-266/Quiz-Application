const quizStartHereBtns = document.querySelectorAll(".startHereBtn");
const blurOverlay = document.querySelector(".blurOverlay");
const instructions = document.querySelector(".instructionsModal");
const exitQuizBtn = document.querySelector(".exitQuizBtn");
const startQuizBtn = document.querySelector(".startQuizBtn");

quizStartHereBtns.forEach( (startBtn, index) => {
    startBtn.addEventListener("click", () => {
        blurOverlay.style.display = "none";
        instructions.style.transform = "scale(1)";
    })
})

exitQuizBtn.addEventListener("click", () => {
    setTimeout(function() {
        blurOverlay.style.display = "flex";
    }, 200)
    instructions.style.transform = "scale(0)";
})

startQuizBtn.addEventListener("click", () => {
    window.open("../Quiz-Queries/index.html")
})