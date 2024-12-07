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

var ButtonRequest = document.getElementById('request');
console.log(ButtonRequest)

ButtonRequest.addEventListener('click',function(event){
    fetch('http://dummyjson.com/test')
    .then(resp => console.log(resp))







})

function add(n1,n2){ 
    return n1+n2;
}
var a1=1000000000;
var a2=1000000000000000000000000000000;
var result = add(a1,a2);
console.log(result);