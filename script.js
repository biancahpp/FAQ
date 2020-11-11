
const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const button3 = document.getElementById('btn-3');
const button4 = document.getElementById('btn-4');
const button5 = document.getElementById('btn-5');

function showAnswer1 () {
    let display = document.getElementById('q1').style.display;
    if (display == 'none'){
    document.getElementById('q1').style.display = 'block';
    }
    else {
    document.getElementById('q1').style.display = 'none';
    }
}
function showAnswer2 () {
    let display = document.getElementById('q2').style.display;
    if (display == 'none'){
    document.getElementById('q2').style.display = 'block';
    }
    else {
    document.getElementById('q2').style.display = 'none';
    }
}
function showAnswer3 () {
    let display = document.getElementById('q3').style.display;
    if (display == 'none'){
    document.getElementById('q3').style.display = 'block';
    }
    else {
    document.getElementById('q3').style.display = 'none';
    }
}
function showAnswer4 () {
    let display = document.getElementById('q4').style.display;
    if (display == 'none'){
    document.getElementById('q4').style.display = 'block';
    }
    else {
    document.getElementById('q4').style.display = 'none';
    }
}
function showAnswer5 () {
    let display = document.getElementById('q4').style.display;
    if (display == 'none'){
    document.getElementById('q4').style.display = 'block';
    }
    else {
    document.getElementById('q4').style.display = 'none';
    }
}

button1.addEventListener ('click', showAnswer1);
button2.addEventListener ('click', showAnswer2);
button3.addEventListener ('click', showAnswer3);
button4.addEventListener ('click', showAnswer4);
button5.addEventListener ('click', showAnswer5);
