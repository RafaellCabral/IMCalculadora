const form = document.querySelector('.form'); // capturamos o formulário do html
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('.Peso');
    const inputAltura = event.target.querySelector('.Altura');

    const Peso = Number(inputPeso.value);
    const Altura = Number(inputAltura.value);

    if (!Peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!Altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(Peso, Altura);
    const NivelImc = getNivelImc(imc);

    const msg = `Seu IMC é de ${ imc }(${ NivelImc }).`;

    setResultado(msg, true);


});



function getImc(Peso, Altura) {
    const imc = Peso / Altura ** 2;
    return imc.toFixed(2);
}


function getNivelImc(imc) {

    const nivel = ['Abaixo do peso', 'Peso normal', 'Acima do peso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    } else if (imc >= 34.9) {
        return nivel[4];
    } else if (imc >= 29.9) {
        return nivel[3];
    } else if (imc >= 24.9) {
        return nivel[2];
    } else if (imc >= 18.5) {
        return nivel[1];
    } else if (imc < 18.5) {
        return nivel[0];
    }
}



function criaP() {
    const P = document.createElement('P');
    return P;
}




function setResultado(msg, isValid) {
    const Resultado = document.querySelector('.Resultado');
    Resultado.innerHTML = '';


    const P = criaP();
    if (isValid) {
        P.classList.add('.Resultado');
    } else {
        P.classList.add('.Resultado-2');
    }
    P.innerHTML = msg;
    Resultado.appendChild(P);
}