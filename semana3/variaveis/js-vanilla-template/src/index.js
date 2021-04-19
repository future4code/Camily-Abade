/* 
1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

a = 10
b = 10

console.log(b)

b = 5
console.log(a, b)

RESPOSTA:

console.log(a, b)

a = 10
b = 10

===========

2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c)

RESPOSTA:

a = 20
b = 10
c = 10

======== 
*/






/*

EXERCÍCIO 


a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    const novoNome 



b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    const novaIdade 



c) Imprima no console o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    console.log(typeof novoNome)
    console.log(typeof novaIdade)



d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    ' Uncaught SyntaxError: Missing initializer in const declaration ' erro quando rodei no console pq eu não declarei um valor, pdoeria ser string ou number se eu tivesse declarado isso.




d) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

const novoNome = [prompt('Qual é o seu nome?')]
const novaIdade = [prompt('Qual é a sua idade?')]
console.log(typeof novoNome)
console.log(typeof novaIdade)



e) Novamente, imprima no console o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

    Eu add um prompt e pra ele tudo é object, eu queria que fosse 1 string e 1 Number.




f) Para finalizar, imprima no console a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

const novoNome = [prompt('Qual é o seu nome?')]
const novaIdade = [prompt('Qual é a sua idade?')]
console.log("Olá! " + novoNome + "," + " você tem " + novaIdade + " anos")






2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui). Imprima-as com as respostas no console da seguinte forma:



const perguntaUm = [prompt('Olá! Qual é o seu nome?')]
const perguntaDois = [prompt('Quanto anos você tem?')]
const perguntaTres = [prompt('Qual o seu email para contato?')]
const perguntaQuatro = [prompt('Uma senha para seu login: ')]
const perguntaCinco = [prompt('Pergunta de segurança: Qual o nome do seu animal de estimação?')]


console.log('É um prazer te conhecer ' + perguntaUm + ", meu nome é Isa :) \n") 
console.log(' ')
console.log('1. qual é o seu nome?')
console.log('Resposta: ' + perguntaUm)
console.log(' ')
console.log('2. Quantos anos você tem?? ')
console.log('Resposta: ' + perguntaDois + ' anos') 
console.log(' ')
console.log('3. qual é o seu email para contato? ')
console.log('Resposta: ' + perguntaTres)
console.log(' ')
console.log('4. Qual a sua senha para login?')
console.log('Resposta: ' + perguntaQuatro)
console.log(' ')
console.log('5. Para pergunta de segurança: Qual é o nome do seu animal de estimação?')
console.log('Resposta: ' + perguntaCinco)





3. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    a) Imprima no console o array completo

    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no  console a nova lista



const comida = Array('Bolo de Chocolate', 'Chocolate', 'Melancia', 'Fondue', 'Broa com gotas de chocolate')
console.log(comida)

console.log('Essas são minhas comidas preferidas:')
console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])

const comidaUsuario = [prompt ('Qual a sua comida favorita?')]

console.log('Essas são minhas comidas preferidas:')
console.log(comida[0])
console.log(comidaUsuario[0])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])


const quiz = ['Você está com o cabelo preso?', 'Você usou caneta preta hoje', 'Suas unhas estão pintadas?'];
const quizResposta = [false, true, false];

console.log(`${quiz[0]} ${quizResposta[0]}`) 
console.log(`${quiz[1]} ${quizResposta[1]}`) 
console.log(`${quiz[2]} ${quizResposta[2]}`) 


*/
