let thumb_one = 'rgb(107, 150, 93)';
let thumb_two = 'rgb(181, 92, 144)';
let thumb_tree = 'rgb(227, 174, 168)';
let circle = document.getElementById('circle');
let div = document.getElementById('divimg');
let img = document.createElement("img");
div.appendChild(img);

function verde(){
    img.src = 'images/img1.png';
    circle.style.backgroundColor = thumb_one;
}
function rosa(){
    img.src = 'images/img2.png';
    circle.style.backgroundColor = thumb_tree;
    
}
function soft(){
    img.src = 'images/img3.png';
    circle.style.backgroundColor = thumb_two;
}

window.addEventListener('load',verde);