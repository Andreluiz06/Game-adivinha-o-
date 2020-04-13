console.log('************************************');
console.log('*Bem vindo ao jogo da Adivinhação*');
console.log('************************************');

//variaveis de chutes
let numeroSecreto = 22;
let chute ;
let nivel;
let totaldetentativas;


console.log('Qual nivel de Dificuldade?')
console.log("1 - Fácil 2 - médio 3 - Dificil:")
nivel = prompt(nivel);

//nivel de dificuldade
if (nivel == 1){
    totaldetentativas = 15;
}
if(nivel = 2){
    totaldetentativas = 10;
}
if (nivel = 3){
    totaldetentativas = 6;
}
//repetição for
for (let i = 1; i <= totaldetentativas; i++){ 
    
    //imprime e ler dados do teclado para usuario 
    console.log('Tentativa',i,' de ',totaldetentativas);
    totaldetentativas = prompt ("Digite um numero:",totaldetentativas);


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
    totaldetentativas++;
}
console.log('Você perdeu!! Tente Novamente!!');
