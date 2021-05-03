//Exercício 1

function inverteArray(array) {
  let arrayInvertido = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i]);
  }
  return arrayInvertido;
}

console.log(inverteArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
  let filtrarNumeros = array.filter((numero) => {
    if (numero % 2 === 0) {
      return true;
    }
  });
  for (let i = 0; i < filtrarNumeros.length; i++) {
    filtrarNumeros[i] = filtrarNumeros[i] ** 2;
  }
  return filtrarNumeros;
}

//Exercício 3

function retornaNumerosPares(array) {
  let numerosPares = array.filter((numeros) => {
    if (numeros % 2 === 0) {
      return true;
    }
  });
  return numerosPares;
}

//Exercício 4

function retornaMaiorNumero(array) {
  return Math.max.apply(null, array);
}

//Exercício 5

function retornaQuantidadeElementos(array) {
  let totalElementos = array.length;
  return totalElementos;
}

//Exercício 6

function retornaExpressoesBooleanas() {
  return [false, false, true, true, true];
}

//Exercício 7

function retornaNNumerosPares(n) {
  let par = [];
  let i = 0;
  while (i < n * 2) {
    if (i % 2 === 0) {
      par.push(i);
    }
    i++;
  }
  return par;
}

// Exercício 8

function checaTriangulo(a, b, c) {
  if (a === b && b === c) {
    return "Equilátero";
  } else if (a != b && b != c && c != a) {
    return "Escaleno";
  } else {
    return "Isósceles";
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
  let maiorNumero;
  let menorNumero;
  let maiorDivisivelporMenor;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  maiorDivisivelporMenor = maiorNumero % menorNumero === 0;

  const diferenca = maiorNumero - menorNumero;

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelporMenor: maiorDivisivelporMenor,
    diferenca: diferenca,
  };
}

// Exercício 10

function segundoMaiorEMenor(array) {
  const arrayComDoisValores = segundoMaiorEMenor.map((valores) => {
    for (let i = 0; i < valores.length; i++)  
  });
  
  
}

//Exercício 11

function ordenaArray(array) {
  let buffer;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        buffer = array[j];
        array[j] = array[j + 1];
        array[j + 1] = buffer;
      }
    }
  }
  return array;
}

// Exercício 12

function filmeFavorito() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  };
  return filme;
}

// Exercício 13

function imprimeChamada() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  };  

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
  const retanguloInformacao = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2,
  };
  return retanguloInformacao;
}

// Exercício 15

function anonimizaPessoa(pessoa) {
  return {
    ...pessoa,
    nome: "ANÔNIMO",
  };
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
];

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
  const arrNew = arrayDePessoas.filter((idadeMaior) => {
    return idadeMaior.idade >= 20;
  });
  return arrNew;
}

// Exercício 16, letra B
function menoresDe18(arrayDePessoas) {
  const arrNewDois = arrayDePessoas.filter((idadeMenor) => {
    return idadeMenor.idade < 20;
  });
  return arrNewDois;
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
  const arrayNovo = array.map((numeroDoArray) => {
    return numeroDoArray * 2
  })
  return arrayNovo
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  const novoArray = array.map((numerosStrigs) => {
    return (numerosStrigs * 2).toString()
  })
  return novoArray
}

// Exercício 17, letra C

function verificaParidade(array) {
  const arrayDeParOuImpar = array.map((num) => {
    if (num % 2 === 0){
      return `${num} é par`
    }else {
      return `${num} é ímpar`
    }
  })
  return arrayDeParOuImpar
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
  const novoArr = pessoas.filter((podeEntrar) => {
    if (
      podeEntrar.altura >= 1.5 &&
      podeEntrar.idade > 14 &&
      podeEntrar.idade < 60
    ) {
      return true;
    }
  });
  return novoArr;
}

// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
  const novoArrDois = pessoas.filter((naoPodeEntrar) => {
    if (
      naoPodeEntrar.altura < 1.5 ||
      naoPodeEntrar.idade < 15 ||
      naoPodeEntrar.idade > 60
    ) {
      return true;
    }
  });
  return novoArrDois;
}

//Exercício 19

const consultasNome = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", dataDaConsulta: "04/05/2021" },
];

//Exercício 19, letra A

function ordenaPorNome() {
//ordenaArray() chamei a função
   let nomeOrdemAlfabetica = consultasNome.map((lista) => {
      return lista.nome
})
ordenaArray(nomeOrdemAlfabetica)

   let tudoOrganizado = consultasNome.filter((lista) => {
      for (let i = 0; i < consultasNome.length; i++){
         if (lista.nome === nomeOrdemAlfabetica[i]){
            return true
         }
      }
   })
   return tudoOrganizado
}

// Exercício 19, letra B

const consultasData = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", dataDaConsulta: "04/05/2021" },
];

function ordenaPorData() {}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

function atualizaSaldo() {
  // implemente sua lógica aqui
}
