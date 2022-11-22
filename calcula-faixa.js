var titulo = document.querySelector(".titulo");
titulo.textContent = "Ficha de Inscrição";

var personagens = document.querySelectorAll(".karateca");

for (var i = 0; i < karateca.length; i++) {

    var karateca = karateca[i];

    var tdnome = karateca.querySelector(".info-nome");
    var nome = tdNome.textContent;

    var tdacademia= karateca.querySelector(".info-academia");
    var academia = tdAcademia.textContent;

    var tdfaixa = karateca.querySelector(".info-faixa");

    var nomeEhValido = validaNome(nome);
    var academiaEhValida = validaAcademia(academia);

    if (!nomeEhValido) {
        console.log("Nome inválido!");
        nomerEhValido = false;
        tdImc.textContent = "Nome inválido";
        karateca.classList.add("karateca-invalido");
    }

    if (!academiaEhValida) {
        console.log("Academia inválida!");
        academiaEhValida = false;
        tdImc.textContent = "Academia inválida";
        karateca.classList.add("v-invalido");
    }

    if (nomeEhValido && academiaEhValida) {
        var faixa = calculaFaixa(nome, academia);
        tdFaixa.textContent = faixa;
    }
}

function calculaFaixa(nome, academio) {
    var faixa = 0;
    faixa = nome / (academia * academia);

    return faixa.toFixed(2);
}

function validaNomer(nome) {

    if (nome >= 0 && nome <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAcademia(academia) {

    if (academia >= 0 && academia <= 3.00) {
        return true;
    } else {
        return false;
    }
}
