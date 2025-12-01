/*Apresentar os itens para javascript */
let botao = window.document.getElementById("botao");
let imgtaca = window.document.getElementById("taca");
let imgcaneca = window.document.getElementById("caneca");   
let imgportajoia = window.document.getElementById("portajoia");
let imggarrafa = window.document.getElementById("garrafa");
let imgtoalha = window.document.getElementById("toalha");
let imgplaca = window.document.getElementById("placa");
let imgchaveiro = window.document.getElementById("chaveiro");
let imgcardeno =  window.document.getElementById("cardeno");
let imgquebracabeca = window.document.getElementById("quebracabeca");
let imgsaco = window.document.getElementById("saco_de_roupa");
let imgbobbie = window.document.getElementById("Bobbie");
let imglivrodepintar = window.document.getElementById("livrodepintar");
/*Criar Funções */

imgtaca.addEventListener("mouseenter", ent1);
imgtaca.addEventListener("mouseout", sai1);

imgcaneca.addEventListener("mouseenter", ent2);
imgcaneca.addEventListener("mouseout", sai2);

imgportajoia.addEventListener("mouseenter", ent3);
imgportajoia.addEventListener("mouseout", sai3);

imggarrafa.addEventListener("mouseenter", ent4);
imggarrafa.addEventListener("mouseout", sai4);

imgtoalha.addEventListener("mouseenter", ent5);
imgtoalha.addEventListener("mouseout", sai5);

imgplaca.addEventListener("mouseenter", ent6);
imgplaca.addEventListener("mouseout", sai6);

imgchaveiro.addEventListener("mouseenter", ent7);
imgchaveiro.addEventListener("mouseout", sai7);

imgcardeno.addEventListener("mouseenter", ent8);
imgcardeno.addEventListener("mouseout", sai8);

imgquebracabeca.addEventListener("mouseenter", ent9);
imgquebracabeca.addEventListener("mouseout", sai9);

imgsaco.addEventListener("mouseenter", ent10);
imgsaco.addEventListener("mouseout", sai10);

imgbobbie.addEventListener("mouseenter", ent11);
imgbobbie.addEventListener("mouseout", sai11);

imglivrodepintar.addEventListener("mouseenter", ent12);
imglivrodepintar.addEventListener("mouseout", sai12);

/*Funções para mudar as imagens */
function clicar() {
    window.open("https://wa.me/message/ZDNNFKYWAXFCJ1?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnpBQQhRvBfS5dmYf4L9aU28diGfKwy37JeBQqN7qLmbdoBNtZyC5sNrmETIo_aem_1sA4E82PwYlPreX5XSTODQ");
}
function ent1() {
    imgtaca.src = "img/ultilidade/ultilidade1.jpg";
    
}

function sai1() {
    imgtaca.src = "img/produtos em branco/taca.png"
}

function ent2() {
    imgcaneca.src = "img/ultilidade/caneca2.jpg";
    imgcaneca.style.textAlign = "center";
}

function sai2() {
    imgcaneca.src = "img/produtos em branco/caneca.png"
}

function ent3() {
    imgportajoia.src = "img/ultilidade/portajoia.jpg";
}

function sai3() {
    imgportajoia.src = "img/produtos em branco/portajoia.png";
}

function ent4() {
    imggarrafa.src = "img/ultilidade/garrafa.jpg";
}

function sai4() {
    imggarrafa.src = "img/produtos em branco/garrafa.png";
}

function ent5() {
    imgtoalha.src = "img/ultilidade/toalha_de_rosto.jpg";
}


function sai5() {
    imgtoalha.src = "img/produtos em branco/toalha_de_rosto.png";
}

function ent6() {
    imgplaca.src = "img/ultilidade/placa_de_porta.jpg";
}

function sai6() {
    imgplaca.src = "img/produtos em branco/placa_de_porta.png";
}

function ent7() {
   imgchaveiro.src = "img/ultilidade/chaveiro.jpg";
}

function sai7() {
    imgchaveiro.src = "img/produtos em branco/chaveiro.png";
}

function ent8() { 
    imgcardeno.src = "img/papelaria/cardeno2.jpg";
}

function sai8() { 
    imgcardeno.src = "img/produtos em branco/caderno.png";
}

function ent9() {
    imgquebracabeca.src = "img/brinquedo/quebra cabeça.jpg";
}

function sai9() {
    imgquebracabeca.src = "img/produtos em branco/quebra cabeça.png";
}

function ent10() {
    imgsaco.src = "img/ultilidade/saco_de_roupa.jpg";
}

function sai10() {
    imgsaco.src = "img/produtos em branco/saco_de_roupa.png";
}


function ent11() {
    imgbobbie.src = "img/brinquedo/pintar1.jpg";
}

function sai11() {
    imgbobbie.src = "img/produtos em branco/pintar.png";
}

function ent12() {
imglivrodepintar.src = "img/brinquedo/livro de pintar.jpg";
}

function sai12() {
    imglivrodepintar.src = "img/produtos em branco/livro de pintar.png";
}
