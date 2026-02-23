const selectOpcao = document.getElementById("opcao");
const inputCapital = document.getElementById("capital");
const inputJuros = document.getElementById("juros");
const inputTaxa = document.getElementById("taxa");
const inputTempo = document.getElementById("tempo");
const btnEnviar = document.getElementById("enviar");
const campoResultado = document.getElementById("resultado");

function ajustarCampos() {
    const opcao = selectOpcao.value;

    [inputCapital, inputJuros, inputTaxa, inputTempo].forEach(input => {
        input.disabled = false;
        input.style.backgroundColor = "white";
    });

    if (opcao == "1") { 
        inputJuros.disabled = true;
        inputJuros.style.backgroundColor = "#e9ecef";
    } else if (opcao == "2") { 
        inputCapital.disabled = true;
        inputCapital.style.backgroundColor = "#e9ecef";
    } else if (opcao == "3") { 
        inputTaxa.disabled = true;
        inputTaxa.style.backgroundColor = "#e9ecef";
    } else if (opcao == "4") { 
        inputTempo.disabled = true;
        inputTempo.style.backgroundColor = "#e9ecef";
    }
}

function calcular() {
    let opcao = selectOpcao.value;
    let C = parseFloat(inputCapital.value);
    let J = parseFloat(inputJuros.value);
    let i = parseFloat(inputTaxa.value) / 100;
    let t = parseFloat(inputTempo.value);

    let resultado = "";

    if (opcao == 1) { 
        let M = C * Math.pow((1 + i), t);
        J = M - C;
        resultado = "Montante: R$ " + M.toFixed(2) + 
                    "<br>Juros: R$ " + J.toFixed(2);
    }

    else if (opcao == 2) { 
        C = J / (Math.pow((1 + i), t) - 1);
        resultado = "Capital: R$ " + C.toFixed(2);
    }

    else if (opcao == 3) {
        let M = C + J;
        i = Math.pow(M / C, 1/t) - 1;
        resultado = "Taxa: " + (i * 100).toFixed(2) + "%";
    }

    else if (opcao == 4) { 
        let M = C + J;
        t = Math.log(M / C) / Math.log(1 + i);
        resultado = "Tempo: " + t.toFixed(2) + " períodos";
    }

    campoResultado.innerHTML = resultado;
}

selectOpcao.addEventListener("change", ajustarCampos);
btnEnviar.addEventListener("click", calcular);

window.onload = ajustarCampos;