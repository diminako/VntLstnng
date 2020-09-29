let roundBtn = document.querySelector(".roundBtn");
let squareBtn = document.querySelector(".squareBtn");
let redBtn = document.querySelector(".redBtn");
let imageBtn = document.querySelector(".imageBtn");
let resetBtn = document.querySelector(".resetBtn");

let container = document.querySelector(".container")



roundBtn.addEventListener("click", function() {
    container.classList.add("round");
    container.innerHTML = "";
});

redBtn.addEventListener("click", function() {
    container.style.backgroundColor = "red";
    container.innerHTML = "";
})

imageBtn.addEventListener("click", function() {
    container.innerHTML = "<img src='barksalot.jpg' style='height:300px' />"
})

squareBtn.addEventListener("click", function() {
    container.classList.remove("round");
    container.innerHTML = "";
});

resetBtn.addEventListener("click", function() {
    container.classList.remove("round");
    container.style.backgroundColor = "rgb(43, 134, 146)"
    container.innerHTML = "";
})