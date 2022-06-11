// Definicao dos botoes de itens

let prato;
let bebida;
let sobremesa;

function SelecionarPrato(elemento) {
    let SelAnterior = document.querySelector(".prato .selecionado");

    if (SelAnterior !== null) {
        SelAnterior.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");

    prato = 1;

    LiberarPedido();
}

function SelecionarBebida(elemento) {
    let SelAnterior = document.querySelector(".bebida .selecionado");

    if (SelAnterior !== null) {
        SelAnterior.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");

    bebida = 1;

    LiberarPedido();
}

function SelecionarSobremesa(elemento) {
    
    let SelAnterior = document.querySelector(".sobremesa .selecionado");

    if (SelAnterior !== null) {
        SelAnterior.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");

    sobremesa = 1;

    LiberarPedido();
}

// Funcao de liberar para pedir comida

function LiberarPedido() {

    let BotaoBloqueado = document.querySelector(".pedido-bloqueado");
    let BotaoLiberado = document.querySelector(".pedido-liberado");

    if (prato && bebida && sobremesa) {
        BotaoBloqueado.classList.add("hide");
        BotaoLiberado.classList.remove("hide");
    }
        
    
}