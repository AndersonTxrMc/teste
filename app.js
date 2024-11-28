alert('Boas Vindas ao jogo do numero secreto');
let numeroM = 5000;
let numeroS = parseInt(Math.random() * numeroM + 1);
console.log(numeroS);
let numeroE;
let tentativas = 1;

while(numeroE != numeroS){
    numeroE = prompt(`Escolha um numero de 1 a ${numeroM}`);

    if(numeroS == numeroE){
        break;
        
    } else{
        
        alert(' Você errou');
        if( numeroS > numeroE ){
            alert(`O numero secreto é maior que ${numeroE}`);
        } else{
            alert(`O numero secreto é menor que ${numeroE}`);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso você acertou o numero secreto é ${numeroS} com ${tentativas} ${palavraTentativa}`);
// if(tentativas > 1){
//    alert(`Isso você acertou o numero secreto é ${numeroS} com ${tentativas} tentativas`);
// } else{
//    alert(`Isso você acertou o numero secreto é ${numeroS} com ${tentativas} tentativa`);
// }

// Isso é um comentario 