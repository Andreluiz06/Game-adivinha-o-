console.log('************************************');
console.log('*Bem vindo ao jogo da Adivinhação*');
console.log('************************************');
//variaveis de chutes
let numeroSecreto = 42;
let chute ;

//imprime e ler dados do teclado para usuario    
console.log('qual é o seu chute???');
chute = prompt ("Digite um numero:");
console.log('seu chute foi...',chute);

// segunda versão com if e else para + variações de acerto e erro
 if(chute == numeroSecreto){
     console.log('Parabéns!!! Você Acertou!!!');
  }else{
      let maior = chute > numeroSecreto;
      //antes era if (chute > numeroSecreto)
          if(maior){
              console.log('Seu Chute foi MAIOR que o Numero Secreto!!')
          }else{
              console.log('Seu Chute foi MENOR que o Numero Secreto!!')
          }
     }
     console.log('Game Over X.X')
