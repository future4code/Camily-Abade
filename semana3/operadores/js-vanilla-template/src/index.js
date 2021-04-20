//------------------> EXERCICIO 1 <------------------\\
/*

a. false
b. false
c. true
e. booleans

//------------------> EXERCICIO 2 <------------------\\

a. indefinido
b. null
c. 11
d. 0
e. 19
f. 25

//------------------> EXERCICIO 1 <------------------\\

const usuario =  prompt("Qual é a sua idade?")
const amigo =  prompt("Qual a ida de do seu melhor amigo?")
const diferenca = Number(usuario) - Number(amigo)
console.log(usuario > amigo)
console.log("A diferença de idades é de", diferenca)

//------------------> EXERCICIO 2 <------------------\\

const usuario =  prompt("Insira uma número par")
const diferenca = Number(usuario) % 2
console.log(diferenca)

//Quando o usuário adiciona uma número impar, o resultado do resto é = 1
//Quando o usuário adiciona uma número parent, o resultado é = 1

//------------------> EXERCICIO 3 <------------------\\

const listaDeTarefas = []
console.log(listaDeTarefas)
const pergunta1 = prompt('Qual a primeira coisa que você precisa fazer hoje?')
const pergunta2 = prompt('Qual a segunda coisa que você precisa fazer hoje?')
const pergunta3 = prompt('Qual a terceira coisa que você precisa fazer hoje?')

listaDeTarefas.push(pergunta1, pergunta2, pergunta3)
console.log(listaDeTarefas)
const finalizada1 = prompt('Finalizou a tarefa 0, 1 ou 2?')
listaDeTarefas.splice(finalizada1, 1)
console.log(listaDeTarefas)

//------------------> EXERCICIO 4 <------------------\\

const nomeDoUsuario = prompt('Qual é o seu nome completo?')
const emailDoUsuario = prompt('Qual é o seu email para contato?')
console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vindo ${nomeDoUsuario}!!`)


//------------------> DESAFIOS  <------------------\\

const fPk = (77 - 32)*5/9 + 273.15 // Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
console.log(fPk+" K")


const cPf = (80)*9/5 + 32 // Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
console.log(cPf+"°F")

const cPf2 = (30)*9/5 + 32 // Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
console.log(cPf2+"°F")

const fPk2 = (86 - 32)*5/9 + 273.15 // Valor 30C para K
console.log(fPk+" K")


//USUÁRIO ADD UM NÚMERO EM Celsius(°C)  PARA CONVERTER ---------_>


const conversaoUsuario = prompt('Add um valor em Celsius(°C) para converter em Kelvin(K) e Fahrenheit(°F)')

const cPf3 = (conversaoUsuario)*9/5 + 32 // Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
console.log(cPf2+"°F")

const fPk3 = (cPf3 - 32)*5/9 + 273.15 // Valor 30C para K
console.log(fPk+" K")




// DESAFIO SOBRE QUILOWATT-HORA \\




const calculadoraDeQuilowatt = ''
const quilowatt280 = 280*0.05
const quilowatt24h = quilowatt280*24
const quilowattDesconto = quilowatt24h-(quilowatt24h*0.15)
console.log(`${quilowatt280} reais por hora usada, supondo que você use por 24horas, então pagará ${quilowatt24h}`)
console.log(`Considerando 280Quilowatt-hora durante 24hr e com um desconto de 15%. O valor a ser pago será de: ${quilowattDesconto} `)




// DESAFIO 20lb para kg \\
const kg = 0.45
console.log(`20lb equivalem a aproximadamente ${20*kg} kg`)



// DESAFIO oz para kg \\
const kg = 0.028
console.log(`10.5Oz equivalem a aproximadamente ${10.5*kg} kg`)



// DESAFIO milha para metro \\
const metro = 1609.34
console.log(`100mi equivalem a aproximadamente ${100*metro} metros`)



// DESAFIO pes para metros \\
const metro = 0.3048
console.log(`50ft equivalem a aproximadamente ${50*metro} metros`)


// DESAFIO galão para litros \\
const litro = 3.78541
console.log(`103.56galequivalem a aproximadamente ${103.5*litro} litros`)



// DESAFIO galão para litros \\
const xicaras = (450*6)/25
console.log(`450xc equivalem a aproximadamente ${xicaras} litros`)



//DESAFIO USUÁRIO \\
const usuarioConverte = prompt('Quantas xícaras você quer converter para litro?')
const resultado = (usuarioConverte*6)/25
console.log(`${usuarioConverte} equivalem a aproximadamente ${resultado} litros`)