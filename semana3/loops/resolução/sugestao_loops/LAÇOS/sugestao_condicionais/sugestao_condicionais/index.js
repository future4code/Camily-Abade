// Exercícios de interpretação de código //

/*

EXERCÍCIO 1

O código verifica se o número digitado pelo usuário é par. Para números pares, será impresso no console: "Passou no teste." e para números ímpares, será impresso "Não passou no teste.".


EXERCÍCIO 2

a.  Ele permite determinar o preço de uma determinada fruta
b. "O preço da fruta Maçã é R$ 2.25"
c.  "O preço da fruta Pêra é R$ 5"


EXERCÍCIO 3

a. A primeira linha pede um número a ser digitado pelo usuário e faz o cast dele para o tipo Number.
b. Em qualquer um dos casos, nenhuma mensagem será impressa no console pois haverá um erro.
c. Haverá um erro no console pois a variável foi criada dentro do bloco if, então não tem como acessar essa variável dentro deste escopo.

*/

// Exercícios de escrita de código //

/*

EXERCÍCIO 4

let idade = Number(prompt("Qual a sua idade?"))

if (idade >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir, vai de Uber!")
}


EXERCÍCIO 5

const turno = prompt("Qual turno do dia você estuda?")

if (turno === "M") {
    console.log("Bom Dia!")
} else if (turno === "V") {
    console.log("Boa Tarde!")
} else if (turno === "N") {
    console.log("Boa Noite!")
}

EXERCÍCIO 6

const turno = prompt("Qual turno do dia você estuda?")

switch (turno) {
    case "M":
        console.log("Bom Dia!")
    break

    case "V":
        console.log("Bom Tarde!")
    break

    case "N":
        console.log("Bom Noite!")
    break
}


EXERCÍCIO 7

const genero = prompt("Qual o gênero de filme que vocês vão assistir?")
let preco = Number(prompt("Qual o preço do ingresso?"))

if (genero === "fantasia" && preco < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

*/