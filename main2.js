var arrayNomeConvidado = [];

function submit() {

    var objInputNomeConvidado = document.getElementById("nomeConvidado");

    var inputNomeConvidado = objInputNomeConvidado.value.trim();

    if (inputNomeConvidado == "") {
        
        alert("Escreva o nome do convidado.");

    }
    else {

        arrayNomeConvidado.push(inputNomeConvidado);

        objInputNomeConvidado.value = "";

        document.getElementById("mostrar").style.display = "inline-block";
    }
}

function mostrar() {

    document.getElementById("div_array").innerHTML = "";

    for (var i = 0; i < arrayNomeConvidado.length; i++) {
        document.getElementById("div_array").innerHTML += arrayNomeConvidado[i] + "<br>";
    }

    document.getElementById("organizar").style.display = "inline-block";

}

function organizar() {

    arrayNomeConvidado.sort();
    mostrar();

}

function pesquisar() {
    var found = 0;

    var inputPesquisarNomeConvidado = document.getElementById("pesquisa").value.trim();

    if (inputPesquisarNomeConvidado == "") {

        alert("Escreva algo para pesquisar");

    }
    else {

        for (var i = 0; i < arrayNomeConvidado.length; i++) {

            if (inputPesquisarNomeConvidado == arrayNomeConvidado[i]) {
                found++;
            }
        }

        document.getElementById("text_nome_encontrado").innerHTML = "Nome econtrado " + found + " vezes.";
    }
}


