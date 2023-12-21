document.getElementById("btn").addEventListener("click", (e) => {
    var texto = document.getElementById('texto').value;
    texto = texto.trim();
    var palavra = texto.split(/\s+/);
    palavra = palavra.filter(function(frase) {
      return palavra.length > 0;
    });
    document.getElementById('resultado').textContent = palavra.length + ' Palavra(s)';
});

document.getElementById("limpar").addEventListener("click", (e) => {
    document.getElementById('texto').value = '';
    document.getElementById('resultado').textContent = '';
});