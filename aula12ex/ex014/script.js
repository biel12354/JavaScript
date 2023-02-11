function carregar(){
    let msg = document.getElementById("msg")
    let imagem = document.getElementById("img")
    let agora = new Date()
    let hora = agora.getHours()
    if (hora > 6 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas da manhã`
        imagem.src = "manha.png"
        document.body.style.backgroundColor = "#837993"
    } else if (hora > 12 && hora <= 17) {
        msg.innerHTML = `Agora são ${hora} horas da tarde`
        imagem.src = "tarde.png"
        document.body.style.backgroundColor = "#af5921"
    } else {
        msg.innerHTML = `Agora são ${hora} horas da noite`
        imagem.src = "noite.png"
        document.body.style.backgroundColor = "#042042"
    }
}