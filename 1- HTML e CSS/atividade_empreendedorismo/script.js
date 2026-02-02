document.addEventListener("DOMContentLoaded", () => {
  const todosCheckboxes = document.querySelectorAll('input[type="checkbox"]');

  const calcularTudo = () => {
    let somaGlobal = 0;

    const blocosDeCategoria = document.querySelectorAll(".titulo_soma");

    blocosDeCategoria.forEach((bloco) => {
      let somaCategoria = 0;
      const displaySoma = bloco.querySelector(".soma");

      if (bloco.innerText.includes("Total")) return;

      let proximo = bloco.nextElementSibling;

      while (proximo && !proximo.classList.contains("titulo_soma")) {
        if (proximo.tagName === "SECTION") {
          const checkboxes = proximo.querySelectorAll('input[type="checkbox"]');
          const statusDiv = proximo.querySelector(".status");
          const marcados = Array.from(checkboxes).filter((cb) => cb.checked);

          if (marcados.length > 1) {
            statusDiv.textContent = "Erro";
            statusDiv.style.color = "red";
          } else {
            statusDiv.textContent = "Ok";
            statusDiv.style.color = "black";

            if (marcados.length === 1) {
              checkboxes.forEach((cb, index) => {
                if (cb.checked) {
                  somaCategoria += 5 - index;
                }
              });
            }
          }
        }
        proximo = proximo.nextElementSibling;
      }

      if (displaySoma) {
        displaySoma.textContent = somaCategoria;
        somaGlobal += somaCategoria;
      }
    });

    const campoTotal = document.querySelector(".total");
    if (campoTotal) {
      campoTotal.textContent = somaGlobal;
    }

    const resultadosFinais = document.querySelectorAll('.resultado_final');
     resultadosFinais.forEach(res => res.textContent = "--");

     if (somaGlobal >= 120) resultadosFinais[0].textContent = "X";
     else if (somaGlobal >= 90) resultadosFinais[1].textContent = "X";
     else if (somaGlobal >= 60) resultadosFinais[2].textContent = "X";
     else if (somaGlobal > 0) resultadosFinais[3].textContent = "X";
  };

  todosCheckboxes.forEach((cb) => {
    cb.addEventListener("change", calcularTudo);
  });
});
