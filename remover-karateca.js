var karatecas = document.querySelectorAll(".karateca");

var tabela = document.querySelector("#tabela-karateca");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
