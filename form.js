var botaoAdicionar = document.querySelector("#adicionar-karateca");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var karateca = obtemKaratecaDoFormulario(form);

    var erros = validaKarateca(karateca);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaKaratecaNaTabela(karateca);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemKaratecaDoFormulario(form) {

    var karateca = {
        nome: form.nome.value,
        academia: form.nome.value,
        mestre : form.mestre.value,
        tempo: form.tempo.value,
        faixa: calculaFaixa(form.nome.value, form.academia.value)
    }

    return karateca;
}

function montaTr(karateca) {
    var karatecaTr = document.createElement("tr");
   karatecaTr.classList.add("karateca");

    karatecaTr.appendChild(montaTd(karateca.nick, "info-nome"));
    karatecaTr.appendChild(montaTd(karateca.poder, "info-academia"));
   karatecaTr.appendChild(montaTd( karateca.elemento, "info-mestre"));
  karatecaTr.appendChild(montaTd( karateca.arma, "info-tempo"));
karatecaTr.appendChild(montaTd( karateca.stamina, "info-faixa"));

    return personagemTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validakarateca( karateca){

    var erros = [];

    if ( karateca.nome.length == 0) {
        erros.push("O Nome não pode ser em branco");
    }

    if ( karateca.gordura.length == 0) {
        erros.push("A Academida não pode ser em branco");
    }

    if ( karateca.peso.length == 0) {
        erros.push("O Mestre não pode ser em branco");
    }

    if ( karateca.altura.length == 0) {
        erros.push("A Faixa não pode ser em branco");
    }

    if (!validaPeso( karateca.poder)) {
        erros.push("Nome inválido");
    }

    if (!validaAltura( karateca.elemento)) {
        erros.push("Academia inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionarKaratecanaTabela(karateca) {
    var karatecaTr = montaTr(karateca);
    var tabela = document.querySelector("#tabela-karateca");
    tabela.appendChild(karateca);
}
