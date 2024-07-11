alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (numeroSecreto < chute) {
            alert(`O numero secreto é menor que o ${chute}`);
        } else {
            alert(`O numero secreto é maior que o ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    
    }
}

let palavraTentativa = tentativas > 1 ?"tentativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

