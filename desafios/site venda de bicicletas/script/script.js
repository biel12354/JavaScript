let botao = document.getElementById("botao")
let categorias = document.querySelector(".menu")
let imagem = document.querySelector("#img")
botao.style.color = "white"
categorias.style.top = "-100px"
imagem.style.top = "-58px"

imagem.style.transition = ".3s"

function clicar(){
    
    if (botao.style.color == "white"){
        botao.style.color = "blue"
        imagem.style.top = "0px"
        categorias.style.top = "0px"
        categorias.style.transition = "0s"
    } else {
        categorias.style.transition = "1s"
        botao.style.color = "white"
        imagem.style.top = "-58px"
        categorias.style.top = "-100px"
    }
    
}