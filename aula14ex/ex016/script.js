let div = document.createElement("div")
let resultado = document.getElementById("res")
resultado.appendChild(div)
function contar(){
    let começo = document.getElementById("começo")
    let fim = document.getElementById("fim")
    let passo = document.getElementById("passo")
    let começovalor = Number(começo.value)
    let fimvalor = Number(fim.value)
    let passovalor = Number(passo.value)
    if (começo.value == "" || fim.value == "" || passo.value == ""){
        div.innerHTML = "<strong>[ERRO]</strong> - Impossivel contar!"
    } else {
        if (começovalor == 0 || começovalor < 0){
            alert("[ERRO] - Valor inválido! - Número 1 automaticamente adicionado em começo")
            começo.value = 1
            começovalor = 1
        } 
        if (fimvalor == 0 || fimvalor < 0){
            alert("[ERRO] - Valor inválido! - Número 1 automaticamente adicionado em fim")
            fim.value = 1 
            fimvalor = 1
        }
        if (passovalor == 0 || passovalor < 0){
            alert("[ERRO] - Valor inválido! - Número 1 automaticamente adicionado em passos")
            passo.value = 1
            passovalor = 1
        }
        div.innerHTML = ""
        div.innerHTML = "<p>Contando...</p>"
        for(let c = começovalor;c <= fimvalor; c += passovalor){
            div.innerHTML += ` \u{27A1} ${c}`
        }
        div.innerHTML += " Fim!\u{1F6AB}"

    }
    
}
