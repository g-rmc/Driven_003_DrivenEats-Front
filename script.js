// Definicao dos botoes de itens

function SelecionarPrato(elemento) {
    let SelAnterior = document.querySelector(".prato .selecionado");

    if (SelAnterior !== null) {
        SelAnterior.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");
}

function SelecionarBebida(elemento) {
    let SelAnterior = document.querySelector(".bebida .selecionado");

    if (SelAnterior !== null) {
        SelAnterior.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");
}

function SelecionarSobremesa(elemento) {
    let SelAnterior = document.querySelector(".sobremesa .selecionado");

    if (SelAnterior !== null) {
        SelAnterior.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");
}