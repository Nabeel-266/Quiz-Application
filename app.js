const mainOverlay = document.querySelector(".mainOverlay");

setTimeout(function() {
    mainOverlay.style.display = "none";
}, 3000);


function startingQuiz() {
    window.location.href = "./Quiz-Dashboard/index.html"
}