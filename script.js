// Definicao dos botoes de itens

let PratoNome;
let PratoPreco;
let BebidaNome;
let BebidaPreco;
let SobremesaNome;
let SobremesaPreco;

function SelecionarPrato(elemento, preco) {
    const SelAnterior = document.querySelector(".prato .selecionado");

    if (SelAnterior !== null) {
        SelAnterior.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");

    PratoNome = document.querySelector(".prato .selecionado h2").innerHTML;
    PratoPreco = preco;

    LiberarPedido();
}

function SelecionarBebida(elemento, preco) {
    const SelAnterior = document.querySelector(".bebida .selecionado");

    if (SelAnterior !== null) {
        SelAnterior.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");

    BebidaNome = document.querySelector(".bebida .selecionado h2").innerHTML;
    BebidaPreco = preco;

    LiberarPedido();
}

function SelecionarSobremesa(elemento, preco) {
    
    const SelAnterior = document.querySelector(".sobremesa .selecionado");

    if (SelAnterior !== null) {
        SelAnterior.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");

    SobremesaNome = document.querySelector(".sobremesa .selecionado h2").innerHTML;
    SobremesaPreco = preco;

    LiberarPedido();
}

// Funcao de liberar para pedir comida

function LiberarPedido() {

    const BotaoBloqueado = document.querySelector(".pedido-bloqueado");
    const BotaoLiberado = document.querySelector(".pedido-liberado");

    if (PratoNome && BebidaNome && SobremesaNome) {
        BotaoBloqueado.classList.add("hide");
        BotaoLiberado.classList.remove("hide");
    }
}

// Funcao de criar o link do whatsapp

function FecharPedido() {

    const Nome = prompt("Digite aqui seu nome :D");
    const Endereco = prompt("E aqui o seu endereço ;)");

    let total = PratoPreco + BebidaPreco + SobremesaPreco;
    
    total = total.toFixed(2);

    const mensagem = 
    `Olá, gostaria de fazer o pedido:
    - Prato: ${PratoNome}
    - Bebida: ${BebidaNome}
    - Sobremesa: ${SobremesaNome}
    Total: R$ ${total}
    
    Nome: ${Nome}
    Endereço: ${Endereco}`;
    
    let link = encodeURIComponent(mensagem);

    window.open("https://wa.me/?text=" + link)

}