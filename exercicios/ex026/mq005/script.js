 let itens = document.getElementById("itensMenu");

function clicarMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}

function alterarTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block';
    } else {
        itens.style.display = 'none';
    }
}


// function clickMenu() {
//     itens.classList.toggle("ativo");
// }