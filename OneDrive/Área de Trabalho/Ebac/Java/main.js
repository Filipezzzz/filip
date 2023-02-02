const form = document.getElementById('formulario');


function valida(validador) {
    const numA = document.getElementsByClassName('primeiro');
    const numB = document.getElementsByClassName('segundo');
    const calculo = numA < numB;
    return calculo;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();



    if(!valida()) {
        alert("O primeiro número é maior que o segundo");
    }
    else {
        alert("O primeiro número é menor que o segundo, escolha outro.")
    }
})

console.log(form);
