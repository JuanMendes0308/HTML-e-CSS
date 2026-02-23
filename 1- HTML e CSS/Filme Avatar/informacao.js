let totalEntrevistados = 0;
let totalMasculino = 0;
let totalFeminino = 0;
let somaIdades = 0;

let opiniaoExcelente = 0;
let opiniaoBom = 0;
let opiniaoRegular = 0;
let opiniaoPessimo = 0;

function clicar() {
    const idadeInput = document.getElementById('idade');
    const masc = document.getElementById('masculino');
    const fem = document.getElementById('feminino');
    const excelente = document.getElementById('excelente');
    const bom = document.getElementById('bom');
    const regular = document.getElementById('regular');
    const pessimo = document.getElementById('pessimo');
    const divResposta = document.getElementById('resposta');

    let idade = parseInt(idadeInput.value);
    if (isNaN(idade) || idade <= 0) {
        alert("Por favor, insira uma idade válida.");
        return;
    }

    totalEntrevistados++;
    somaIdades += idade;

    if (masc.checked) totalMasculino++;
    if (fem.checked) totalFeminino++;

    if (excelente.checked) opiniaoExcelente++;
    else if (bom.checked) opiniaoBom++;
    else if (regular.checked) opiniaoRegular++;
    else if (pessimo.checked) opiniaoPessimo++;

    let mediaIdade = somaIdades / totalEntrevistados;
    
    const calcPerc = (valor) => ((valor / totalEntrevistados) * 100).toFixed(2);

    divResposta.innerHTML = `
        <hr>
        <h2>Resultado da Pesquisa Atualizado:</h2>
        <p><strong>1) Total de entrevistados:</strong> ${totalEntrevistados}</p>
        <p><strong>2) Homens:</strong> ${totalMasculino}</p>
        <p><strong>3) Mulheres:</strong> ${totalFeminino}</p>
        <p><strong>4) Porcentagem de Masculino:</strong> ${calcPerc(totalMasculino)}%</p>
        <p><strong>5) Porcentagem de Feminino:</strong> ${calcPerc(totalFeminino)}%</p>
        <p><strong>6) Média de idade:</strong> ${mediaIdade.toFixed(1)} anos</p>
        <p><strong>7) Porcentagem de Excelente:</strong> ${calcPerc(opiniaoExcelente)}%</p>
        <p><strong>8) Porcentagem de Bom:</strong> ${calcPerc(opiniaoBom)}%</p>
        <p><strong>9) Porcentagem de Regular:</strong> ${calcPerc(opiniaoRegular)}%</p>
        <p><strong>10) Porcentagem de Péssimo:</strong> ${calcPerc(opiniaoPessimo)}%</p>
    `;

    limparCampos();
}

const grupos = ['.input_genero', '.input_opiniao'];

grupos.forEach(classe => {
    const checkboxes = document.querySelectorAll(classe);

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                checkboxes.forEach(cb => {
                    if (cb !== this) cb.checked = false;
                });
            }
        });
    });
});

function limparCampos() {
    document.getElementById('idade').value = '';
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);
}