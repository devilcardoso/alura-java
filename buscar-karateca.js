var botaoAdicionar = document.querySelector("#buscar-karateca");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-karateca.herokuapp.com/karateca");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var karateca = JSON.parse(resposta);

            karateca.forEach(function(karateca) {
                adicionaKaratecaNaTabel(karateca);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
