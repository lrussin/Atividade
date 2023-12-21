function converter() {
    var valorElemento = document.getElementById('valor');
    var moedaElemento = document.getElementById('moeda');
    var resultadoElemento = document.getElementById('resultado');

    var valor = valorElemento.value;
    var moeda = moedaElemento.value;
    var moedaConvertida = moeda.replace('-', '');

    var url = "http://economia.awesomeapi.com.br/json/last/" + moeda;


    var json = new XMLHttpRequest();
    json.open("GET", url, true);
    json.onreadystatechange = function() {
    if (json.readyState == 4) {
        if (json.status === 200) {
            var data = JSON.parse(json.responseText);
            if (valor == "" || isNaN(valor)) {
                resultadoElemento.innerHTML = "Digite algum valor";
                exibirMensagem("Favor digitar um valor valido", "red")
            } else {
                var conversao = parseFloat(data[moedaConvertida].ask);
                var convertida = valor * conversao;
                var codigo = moeda.split('-');
                var codigoMoeda = codigo[codigo.length - 1];
                resultadoElemento.innerHTML = "O valor convertido é: " + convertida.toFixed(2) + " " + codigoMoeda;
                exibirMensagem("Conversão feita com sucesso", "MediumSeaGreen")
            }
        } else {
            exibirMensagem("Favor digitar um valor valido ou a requisição da moeda não existe","red")
            console.error("Erro na requisição: Código " + json.status);
        }
    }
}
json.send();
}

function exibirMensagem(mensagem, cor) {
    var mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.style.background = cor;
    mensagemDiv.style.display = "block";
    mensagemDiv.innerHTML = mensagem
    setTimeout(function () {
        mensagemDiv.style.display = "none";
    }, 5000);
}