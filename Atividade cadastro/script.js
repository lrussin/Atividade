function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var confemail = document.getElementById("confemail").value;
    var senha = document.getElementById("senha").value;
    var confsenha = document.getElementById("confsenha").value;

    if (nome === "" || sobrenome === "" || email === "" || confemail === "" || senha === "" || confsenha === "") {
      exibirMensagem("Por favor, preencha todos os campos!!!", "red");
      return false;
    }

    if (email !== confemail) {
      exibirMensagem("Os campos de email e confirmação de email não coincidem.", "red");
      return false;
    }

    if (senha !== confsenha) {
      exibirMensagem("Os campos de senha e confirmação de senha não coincidem.", "red");
      return false;
    }

    if (senha.length < 6 || senha.length > 10) {
      exibirMensagem("A senha deve ter no mínimo 6 caracteres e no maximo 10 caracteres.", "red");
      return false;
    }

    if (confsenha.length < 6 || confsenha.length > 10) {
      exibirMensagem("A confirmação de senha deve ter no mínimo 6 caracterese no maximo 10 caracteres.", "red");
      return false;
    }

    exibirMensagem("Formulário enviado com sucesso!", "green");
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("confemail").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("confsenha").value = "";
    return false;
  }

  function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("confemail").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("confsenha").value = "";
    var mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = ""; // Limpa a mensagem
  }

  function exibirMensagem(mensagem, cor) {
    var mensagemDiv = document.getElementById("mensagem");

    mensagemDiv.innerHTML = mensagem;
    mensagemDiv.style.background = cor;
    mensagemDiv.style.display = "block";
  
    // tempo da mensagem 5 (5000 milisegundos)
    setTimeout(function () {
      mensagemDiv.innerHTML = "";
      mensagemDiv.style.display = "none";
    }, 5000);
  }