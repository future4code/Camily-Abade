// export const links = (key) => { // variavel com letra minúscula é pq OU ela tem um valor Ou é uma função, Com letra maiúscula ela retorna um JSX
//   const URL = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camily/${key}`
//   return (URL)
// }

export const link = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camily/` 

export const header =  {'Content-Type': 'application/json'}


  export const body = (id, escolha) => { // variavel com letra minúscula é pq OU ela tem um valor Ou é uma função, Com letra maiúscula ela retorna um JSX
  
  return (
    {id: id, choice: escolha}
  )
}
