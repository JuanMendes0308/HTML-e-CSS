document.addEventListener("DOMContentLoaded", () => {
    const valores = [5, 4, 3, 2, 1];

    const secoes = document.querySelectorAll("section");
    const blocosSoma = document.querySelectorAll(".titulo_soma .soma");
    const totalEl = document.querySelector(".total");

    function atualizarPontuacoes() {
        let totalGeral = 0;
        let indiceBloco = -1;
        let somaCategoria = 0;

        secoes.forEach(secao => {
            if (secao.previousElementSibling?.classList?.contains("titulo_soma")) {
                if (indiceBloco >= 0) {
                    mostrarX(blocosSoma[indiceBloco], somaCategoria);
                }
                indiceBloco++;
                somaCategoria = 0;
            }

            const checks = secao.querySelectorAll("input[type='checkbox']");
            checks.forEach((check, i) => {
                if (check.checked) {
                    somaCategoria += valores[i];
                    totalGeral += valores[i];
                }
            });
        });

        if (indiceBloco >= 0) {
            mostrarX(blocosSoma[indiceBloco], somaCategoria);
        }

        totalEl.textContent = totalGeral;
        atualizarResultadoFinal(totalGeral);
    }

    function mostrarX(elemento, pontos) {
        let quantidadeX = Math.round(pontos / 5);
        elemento.textContent = "X".repeat(quantidadeX) + ` (${pontos})`;
    }

    function atualizarResultadoFinal(total) {
        const resultados = document.querySelectorAll(".resultado_final");
        resultados.forEach(r => r.textContent = "--");

        if (total >= 120) resultados[0].textContent = "X";
        else if (total >= 90) resultados[1].textContent = "X";
        else if (total >= 60) resultados[2].textContent = "X";
        else resultados[3].textContent = "X";
    }

    document.querySelectorAll(".respostas").forEach(grupo => {
        const checks = grupo.querySelectorAll("input[type='checkbox']");
        checks.forEach((check, index) => {
            check.addEventListener("change", () => {
                if (check.checked) {
                    checks.forEach((c, i) => {
                        if (i !== index) c.checked = false;
                    });
                }
                atualizarPontuacoes();
            });
        });
    });
});
