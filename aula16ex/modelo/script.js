let numero = document.getElementById("numero")
let resultado = document.getElementById("res")
let selecionar = document.getElementById("selecionar")
let valores = []

function isnumber(num){
    if(num == "" || Number(num) > 100 || Number(num) < 1){
        return true
    } else {
        return false
    }
}

function adicionado(add){
    if (valores.indexOf(Number(add)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    resultado.innerHTML = ""
    if (isnumber(numero.value) == true){
        alert("[ERRO] - Valor inválido ou ja adicionado na lista!")
    } else {
        
        if (adicionado(numero.value) == true){
            alert("[ERRO] - valor ja adicionado!")
            numero.value = ""
        } else {
            valores.push(Number(numero.value))
            let opt = document.createElement("option")
            opt.text = `O valor ${numero.value} foi adicionado a lista!`
            selecionar.appendChild(opt)
            numero.value = ""
        }
    }
}

function verificar(){
    if (valores.length == 0){
        alert("[ERRO] - Nenhum valor adicionado!")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            } else if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        resultado.innerHTML = `${total} Valores no total foram adicionados a lista`
        resultado.innerHTML += `<p>O maior número da lista foi o número ${maior}</p>`
        resultado.innerHTML += `<p>O menor número da lista foi o número ${menor}</p>`
        resultado.innerHTML += `<p>A soma total de todos os número foi igual a : ${soma}</p>`
        resultado.innerHTML += `A média dos números foi de ${soma / total}`
    }
}

function limpar(){
    selecionar.innerHTML = ""
    resultado.innerHTML = ""
    valores = []
}