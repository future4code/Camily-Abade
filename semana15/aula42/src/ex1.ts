// se deixar como string e colocar um número ele reclama: Type 'number' is not assignable to type 'String'.
const minhaString: string = 'oie'

const meuNumero: number = 2

let numeroString: number | string = 'oie'
numeroString = 1

type pessoa = {nome: string, idade: number, corFavorita: CORES_ARCO_IRIS}
enum CORES_ARCO_IRIS {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

const novoObj: pessoa = {
    nome: 'Camily',
    idade: 18,
    corFavorita: CORES_ARCO_IRIS.AZUL
}

const novoObj2: pessoa = {
    nome: 'daniel ueno',
    idade: 31,
    corFavorita: CORES_ARCO_IRIS.AZUL
}

const novoObj3: pessoa = {
    nome: 'tiago',
    idade: 33,
    corFavorita: CORES_ARCO_IRIS.VERMELHO
}

const novoObj4: pessoa = {
    nome: 'bruna',
    idade: 30,
    corFavorita: CORES_ARCO_IRIS.AMARELO
}

