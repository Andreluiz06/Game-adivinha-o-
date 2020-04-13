console.log('************************************');
console.log('*Bem vindo ao jogo da Adivinhação*');
console.log('************************************');

//variaveis de chutes
let numeroSecreto = 22;
let chute ;


// primeiro loop For
//usamos for quando se sabe quantas vezes se repete o loop
// nesse caso o loop se repete 3X
for (let i = 1; i<=3; i++){ 
    
    //imprime e ler dados do teclado para usuario 
    console.log('Qual o Seu Chute???');
    chute = prompt ("Digite um numero:");
    console.log('seu CHUTE foi...',chute); 
    console.log('Sua TENTATIVA de Nº',i);

    //para quando o chute for numero negativos
    // isso faz com que o sistema avise que o numero é negativo
    // e nao faz com que o jogador perca as tentaivas
    if (chute <= 0){
        
        console.log('Você não pode chutar numero NEGATIVOS 0.0');
        i--;
        continue;
    }

    //aqui entra o if
    //novo parametro para classificar maior ou menor que o Chute
    let maior = chute > numeroSecreto;
    if(chute == numeroSecreto){
        console.log('Parabéns!!! Você Acertou!!!');
        break;
     }else if(maior){
                 console.log('Seu Chute foi MAIOR que o Numero Secreto!!')
     }else{
                 console.log('Seu Chute foi MENOR que o Numero Secreto!!')
             }
    
}
console.log('Game Over X.X')