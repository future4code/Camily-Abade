// ---------> EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO <--------- \\

//exercício 1
// O código ta fazendo um laço e cada vez que esse laço termina o valor do i vai somando no valor.
// o resultado final é uma soma de todos os valores = 10.

//exercício 2
//A- Vai ser impresso os número maiores que 18
//B- Sim. Só tirar o if e manter o console.log

// ---------> EXERCÍCIOS DE ESCRITA DE CÓDIGO <--------- \\

//=============================================================
//a) Imprima cada um dos valores do array

let arrayOiriginal = [13, 23, 33, 43, 53, 63, 73, 83, 93, 103]

for (let index = 0; index < arrayOiriginal.length; index++) {
    console.log(`${arrayOiriginal[index]}`)
}


//=============================================================
//b) Imprima cada um dos valores do array original divididos por 10

let arrayOiriginal = [13, 23, 33, 43, 53, 63, 73, 83, 93, 103]

for (let index = 0; index < arrayOiriginal.length; index++) {
    console.log(`${arrayOiriginal[index]/10}`)
}


//=============================================================
//c) Crie um novo array contendo, somente, os números pares do array original.

- NÃO CONSEGUI FAZER


//=============================================================
//d)imprima o index e os valores do array da seguinte forma: "O elemento do índex i é: numero"

let arrayOiriginal = [13, 23, 33, 43, 53, 63, 73, 83, 93, 103]
let valorMaximo = 0
let valorMinimo = 0

for (let i = 0; i < arrayOiriginal.length; i++){ 
    console.log(`${i}. ${arrayOiriginal[i]}`)
}

//=============================================================
//e)

let arrayOiriginal = [13, 23, 33, 43, 53, 63, 73, 83, 93, 103]
let valorMaximo = 0
let valorMinimo = 14

for (let i = 0; i < arrayOiriginal.length; i++){ 
    if (arrayOiriginal[i] > valorMaximo){
        valorMaximo = arrayOiriginal[i];
    }
    if (arrayOiriginal[i] < valorMinimo){
        valorMinimo = arrayOiriginal[i]
    }

}

console.log(`O valor máximo é: ${valorMaximo}. O valor mínimo é: ${valorMinimo} `)