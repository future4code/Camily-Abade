/*


//============== Exercício de interpretação  ==============\\ 
1
a. Vai ser impresso 10 e 50.
b. Não apareceria nada no console pq você não mandou ele printar alguma coisa. Voce só estaria retornando o resultado.

2
a. A Saída vai ser: Darvas. Caio
b. Vai aparecer no console: Amanda. Caio. Pq ainda tem um i < 2

3

//============== Exercício de Escrita de Código  ==============\\ 

4
a. 


function sobreMim(){
    console.log('Eu sou Camily, tenho 18 naos, moro em Curitiba e sou uma estudante')
}

sobreMim()



===========================================================================================================================
===========================================================================================================================
b.

function sobreMimComParâmetros(nome, boolean){

    if (boolean === true){
        console.log('Sou estudante')
    }
    else{
        console.log('Não sou estudante')
    }
}

sobreMimComParâmetros(true)


===========================================================================================================================
===========================================================================================================================
5
a.
function somaNumeros(num1, num2){
    soma = num1 + num2
    resultado = soma
    console.log(resultado)
}

somaNumeros(2, 4)


===========================================================================================================================
===========================================================================================================================
b.

function maiorOuIgual(num3, num4){
    if (num3 >= num4){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

maiorOuIgual(4, 5)



===========================================================================================================================
===========================================================================================================================
c.

function repetiraDezVezes(palavra){
    let i = 0;
    while(i < 10){
        console.log(palavra)
        i++
    }
}


repetiraDezVezes('Linda')


===========================================================================================================================
===========================================================================================================================
6
a. 

function totalDaLista(lista){
    
    console.log(lista.length)
}

totalDaLista([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])


===========================================================================================================================
===========================================================================================================================
b.

function numeroPar(lista1){
    if (lista1 % 2 === 0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

numeroPar(4)


===========================================================================================================================
===========================================================================================================================
c.

let arrayPar = [];
function vaiSerPar(lista){
    for (let i = 0; i < lista.length; i++){
        if (lista[i] % 2 === 0){
            arrayPar.push(lista[i])

        }
    }

}

vaiSerPar([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
console.log(arrayPar)


===========================================================================================================================
===========================================================================================================================
.d

function numeroPar(lista1){  //função da letra b
    if (lista1 % 2 === 0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

numeroPar(4)


let arrayPar = [];
function vaiSerPar(lista){      // função da letra b+c = letra D
    for (let i = 0; i < lista.length; i++){
        if (numeroPar(lista[i])){             // add minha funçao da letra c aqui 

        }
    }

}

vaiSerPar([10, 23, 45, 78, 90, 52, 35, 67, 84, 22])
console.log(vaiSerPar)