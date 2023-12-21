let jogador = 'X';
let jogo = ['', '', '', '', '', '', '', '', ''];
let jogoAtivo = true;

function jogadas(index) {
    if (!jogoAtivo || jogo[index] !== '') {
        return;
    }

    jogo[index] = jogador;
    document.getElementById('quadro').children[index].innerText = jogador;

    if (Vencedor()) {
        document.getElementById('status').innerText = `${jogador} venceu!`;
        jogoAtivo = false;
    } else if (jogo.every(cell => cell !== '')) {
        document.getElementById('status').innerText = 'Empate!';
        jogoAtivo = false;
    } else {
        jogador = jogador === 'X' ? 'O' : 'X';
        document.getElementById('status').innerText = `É a vez de ${jogador}`;
    }
}

function Vencedor() {
    const Combinacoes = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return Combinacoes.some(combinacoes => {
        const [a, b, c] = combinacoes;
        return jogo[a] !== '' && jogo[a] === jogo[b] && jogo[a] === jogo[c];
    });
}

function mostrarSobreposicao(message) {
    document.getElementById('resultado-messagem').innerText = message;
    document.getElementById('sobreposicao').style.display = 'flex';
}

function ocultarSobreposicao() {
    document.getElementById('sobreposicao').style.display = 'none';
}

function reiniciarJogo() {
    jogador = 'X';
    jogo = ['', '', '', '', '', '', '', '', ''];
    jogoAtivo = true;

    const cells = document.getElementById('quadro').children;
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }

    document.getElementById('status').innerText = 'Começou o jogo!';
}

