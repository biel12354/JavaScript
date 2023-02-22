let botao = document.getElementById("botao")
let categorias = document.querySelector(".menu")
let imagem = document.querySelector("#img")
let main = document.getElementsByTagName("main")[0]
let imagens = [
    "imagens/trilha1.jpg",
    "imagens/trilha2.jpg",
    "imagens/trilha3.jpg"
]
let imagemtrilha = document.querySelector(".trilha")
botao.style.color = "white"
categorias.style.top = "-100px"
imagem.style.top = "-58px"
imagem.style.transition = ".3s"
let contador = 0

setInterval(function() {

    if (contador > 2){
        imagemtrilha.style.backgroundImage = `url("${imagens[0]}")`
        contador = 0
    } else {
        imagemtrilha.style.backgroundImage = `url("${imagens[contador]}")`
    }

    contador++
}, 2000)

function clicar(){
    if (botao.style.color == "white"){
        botao.style.color = "#5271ff"
        imagem.style.top = "0px"
        categorias.style.top = "0px"
        categorias.style.transition = "0s"
        main.style.top = "0px"
        main.style.transition = ".3s"
    } else {
        categorias.style.transition = "1s"
        botao.style.color = "white"
        imagem.style.top = "-58px"
        main.style.top = "-58px"
        categorias.style.top = "-100px"
    }
    
}