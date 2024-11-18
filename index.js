console.log('hello')
var buttonElementP = document.getElementById('buttonP');
var buttonElementMi = document.getElementById('buttonMi')
var buttonElementMu = document.getElementById('buttonMu')
var buttonElementDi = document.getElementById('buttonDi')
var inputElement1 = document.getElementById('number1');
var inputElement2 = document.getElementById('number2');
var result = document.getElementById('result')

buttonElementP.addEventListener('click', function (event) {

    var value1 = inputElement1.value;
    var value2 = inputElement2.value;
    var n1 = parseFloat(value1)
    var n2 = parseFloat(value2)
    var sum = n1 + n2;
    result.innerText = sum
    console.log(sum)
})

buttonElementMi.addEventListener('click', function (event) {

    var value1 = inputElement1.value;
    var value2 = inputElement2.value;
    var n1 = parseFloat(value1)
    var n2 = parseFloat(value2)
    var sum = n1 - n2;
    result.innerText = sum
    console.log(sum)
})

buttonElementMu.addEventListener('click', function (event) {

    var value1 = inputElement1.value;
    var value2 = inputElement2.value;
    var n1 = parseFloat(value1)
    var n2 = parseFloat(value2)
    var sum = n1 * n2;
    result.innerText = sum
    console.log(sum)
})

buttonElementDi.addEventListener('click', function (event) {

    var value1 = inputElement1.value;
    var value2 = inputElement2.value;
    var n1 = parseFloat(value1)
    var n2 = parseFloat(value2)
    var sum = n1 / n2;
    result.innerText = sum
    console.log(sum)
})



