let arrayPost = []

function adicionaPost(){
    let tituloPost = document.getElementById("titulo-post")
    let autorPost = document.getElementById("autor-post")
    let conteudoPost = document.getElementById("conteudo-post")
    let imagemDoPost = document.getElementById("imagem")

    const objectPost = {'titulo': tituloPost.value, 'autor': autorPost.value, 'conteudo': conteudoPost.value, 'imagem': imagemDoPost};
    arrayPost.push(objectPost);   
    console.log(arrayPost)
    console.log(objectPost)

    document.getElementById("container-de-posts").innerHTML +=`<h3>${objectPost['titulo']}</h3>`
    document.getElementById("container-de-posts").innerHTML +=`<h4>${objectPost['conteudo']}</h4>`
    document.getElementById("container-de-posts").innerHTML +=`<img src="${'imagem'}">`
    document.getElementById("container-de-posts").innerHTML +=`<h6>${objectPost['autor']}</h6>`
    
    tituloPost.value = ""
    autorPost.value = ""
    conteudoPost.value = ""


}


