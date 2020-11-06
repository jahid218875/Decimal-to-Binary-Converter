const result = document.getElementById('result');
const submit = document.getElementById('submit');

function binary(e){
    e.preventDefault();

    var num = document.getElementById('number').value;

    if ( num === '') {
        alert("Enter a number")
    } else if ( num < 0) {
        alert("Enter posetive number")
    } else {
        result.style.visibility = 'visible'
    }

    binaryNumber = Number(num).toString(2);
    result.innerText = binaryNumber
}

submit.addEventListener('click', binary);