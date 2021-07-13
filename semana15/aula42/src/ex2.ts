
type amostra = {
    numeros: number[], 
    obterEstatisticas: (numeros: number[]) => {estatistica: estatistica}
}

type estatistica = {maior: number, menor: number, media: number}

function obterEstatisticas(numeros: number[]): estatistica{ //numeros é a entrada

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    // saídas vv
    const estatisticas: estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}