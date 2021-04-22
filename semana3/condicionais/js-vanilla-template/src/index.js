// ----------> Interpretação de código <---------- \\

/*
EXERCÍCIO 1:
O código faz uma pergunta ao usuário e usa condicionais para definir a resposta para ele. Se o usuário tirar uma nota com valor PAR, ele passa. SENÃO, ele reprova. Os números com pares (resto = 0) ele é aprovado. Número ímpares (resto ! 0, ele reprova)

EXERCÍCIO 2:

a- O código serve para de acordo com o nome da fruta passar o preço dela e isso é feito utilizando condicionais.
b- Para a fruta MAÇA, o valor impresso no console será de 2.25
c- eu acho que daria erro por não fechar a condicional 

EXERCÍCIO 3:

a- A primeira linha está pedindo um valor ao usuário.
b- A mensagem será "Esse número parrou no teste" e depois um erro do console.log(mensagem)
b.2- Se for um número negativo só vai aparecer o erro do console.log
c- Haverá erro por tem um bloco pai com um filho, fora do bloco Pai-Filho tem um console.log(mensagem), a variavel mensagem só foi definida dentro do escolpo, logo, fora dele ela não tem valor.



// ----------> EXERCICIO DE ESCRITA DE CÓDIGO  <---------- \\



EXERCÍCIO: 4 <-----------------------<-----------------------<-----------------------<-----------------------

const idadeUsuario = Number(prompt('Qual é a sua idade?'))
if (idadeUsuario >= 18){
    console.log('Você pode dirigir')

} else console.log('Você não pode dirigir')



let usuarioIdade = Number(prompt('Qual a sua idade?'))
switch (true){
    case  usuarioIdade >= 18:
        console.log('Você já pode dirigir!')
        break
    default:
        console.log('Você não pode dirigir ainda!')
    
    }

EXERCÍCIO: 5 <-----------------------<-----------------------<-----------------------<-----------------------

let usuarioPeriodo = String(prompt('Responda M(Matutino), V(Vespertino)) ou N(Noturno): Em qual período você estuda?'))

if (usuarioPeriodo == ' M') {
    console.log('Bom Dia!');
} else if (usuarioPeriodo == 'V') {
    console.log('Boa Tarde!');
} else if (usuarioPeriodo == 'N') {
    console.log('Boa Noite!!');
} else {
    console.log('Desculpe, eu não entendi')
}
    
EXERCÍCIO: 6 <-----------------------<-----------------------<-----------------------<-----------------------

const usuarioPeriodo = (prompt('Responda M(Matutino), V(Vespertino)) ou N(Noturno): Em qual período você estuda?'))
switch(true){
    case usuarioPeriodo == 'V':
        console.log('Bom Dia!!')
        break
    case usuarioPeriodo == 'M':
    console.log('Boa Tarde!!')
        break
    case usuarioPeriodo == 'N':
    console.log('Boa Noite!!')
        break
    default:
        console.log('Desculpa, eu não entendi :(')
        break
    }

EXERCÍCIO: 7 <-----------------------<-----------------------<-----------------------<-----------------------

let generoFilme = String(prompt('Qual o gênero do filme?'))
let valorFilme = Number(prompt('Qual o valor do ingresso?'))

if (generoFilme == 'fantasia' && valorFilme <= 14 ){
    console.log('Bom Filme!!');
} else{
    console.log('Escolha outro filme :( ')
}



//DESAFIO: 1 <-----------------------<-----------------------<


let generoFilme = String(prompt('Qual o gênero do filme?'))
let valorFilme = Number(prompt('Qual o valor do ingresso?'))


if (generoFilme == 'fantasia' && valorFilme <= 14 ){
    let snackFilme = String(prompt('Qual snack você vai comprar para acompanhar o filme?'))
    console.log(`Bom Filme!! com ${snackFilme}!`);
} else{
    console.log('Escolha outro filme :( ')
}


//DESAFIO: 2 <-----------------------<-----------------------<

let nomeCompleto = String(prompt('Qual o seu nome completo?'))
let tipoJogo = String(prompt('IN (Internacional) ou DO (Doméstico): Qual o tipo de jogo?'))
let etapaJogo = String(prompt('SF(Semi-final), DT(Decisão de terceiro lugar) ou FI(Final): Indique a etapa do jogo'))
let categoria = String(prompt('OPÇÕES: 1, 2, 3 ou 4: Indique a categoria'))
let quantidadeIngresso = String(prompt('Quantos ingressos você quer?'))


console.log(`--------Dados da Compra--------`)
console.log(`Nome do cliente: ${nomeCompleto}`)
console.log(`Tipo do jogo: ${tipoJogo}`)
console.log(`Etapa do Jogo: ${etapaJogo}`)
console.log(`Categoria: ${categoria}`)
console.log(`Quantidade de Ingressos: ${quantidadeIngresso}`)
console.log(`--------Valores--------`)


*/
