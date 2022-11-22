var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var karatecas = document.querySelectorAll(".karateca");

    if (this.value.length > 0) {
        for (var i = 0; i < karateca.length; i++) {
            var karateca = karatecas[i];
            var tdNome = karateca.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                karateca.classList.add("invisivel");
            } else {
                karateca.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < karatecas.length; i++) {
            var  karateca =  karatecas[i];
           karateca.classList.remove("invisivel");
        }
    }
});
