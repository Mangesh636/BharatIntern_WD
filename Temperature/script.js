let Celcius = document.getElementById('celsius');
let Fahrenheit = document.getElementById('fahrenheit');

function CtoF() {
    let output = ( parseFloat(Celcius.value) * 9/5) + 32;
    Fahrenheit.value = parseFloat(output.toFixed(2));
}

function FtoC() {
    let output = ( parseFloat(Celcius.value) - 32) * 5/9;
    Fahrenheit.value = parseFloat(output.toFixed(2));
}