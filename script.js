var col1 = document.getElementsByName("color1")[0];
var col2 = document.getElementsByName("color2")[0];
var css = document.querySelector("h3");
var body = document.querySelector("body");

function changeColor() {
    body.style.background = 
    "linear-gradient(to right, "
    + col1.value + 
    ", " 
    + col2.value 
    + ")";
    
    css.textContent = body.style.background + ";"
}

col1.addEventListener("change", changeColor);

col2.addEventListener("change", changeColor);