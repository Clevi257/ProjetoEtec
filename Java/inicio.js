const tamanhoMaximo = 40;
const tamanhoMinimo = 15;
const tamanhoPadrao = 25;

function alterarFonte(tamanho) {
    if (tamanho >= tamanhoMinimo && tamanho <= tamanhoMaximo) {
        document.querySelectorAll("*").forEach(elemento => {
            elemento.style.fontSize = tamanho + "px";
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Aumentar").addEventListener("click", function () {
        let tamanhoAtual = parseInt(window.getComputedStyle(document.body).fontSize);
        if (tamanhoAtual < tamanhoMaximo) {
            alterarFonte(tamanhoAtual + 2);
        }
    });

    document.getElementById("Diminuir").addEventListener("click", function () {
        let tamanhoAtual = parseInt(window.getComputedStyle(document.body).fontSize);
        if (tamanhoAtual > tamanhoMinimo) {
            alterarFonte(tamanhoAtual - 2);
        }
    });

    document.getElementById("Normal").addEventListener("click", function () {
        alterarFonte(tamanhoPadrao);
    });
});



