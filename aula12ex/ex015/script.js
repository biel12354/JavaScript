function verificar(){
    let data = new Date()
    let anoatual = data.getFullYear()
    let ano = document.getElementById("ano")
    let genero = document.getElementsByName("genero")
    let idade = anoatual - Number(ano.value)
    let resultado = document.getElementById("res")
    if (ano.value.length == 0 || Number(ano.value) > anoatual || Number((ano.value) < 0) || Number(ano.value) < 1880){
        alert("[ERRO] - Preencha os dados corretamente e tente novamente!")
    } else if (genero[0].checked){
        if (idade < 12) {
            resultado.innerHTML = `Você é um menino com ${idade} anos de idade!`
            resultado.innerHTML += `<p><img src='bebe-menino.png' width='250px'></p>`
        } else if (idade > 12 && idade <= 18){
            resultado.innerHTML = `Você é um adolescente homem com ${idade} anos de idade!`
            resultado.innerHTML += `<p><img src='adolescente-homem.png' width='250px'></p>`
        } else if (idade > 18 && idade <= 30){
            resultado.innerHTML = `Você é um homem jovem com ${idade} anos de idade!`
            resultado.innerHTML += `<p><img src='jovem-homem.png' width='250px'></p>`
        } else if (idade > 30 && idade <= 55){
            resultado.innerHTML = `Você é um homem adulto com ${idade} anos de idade!`
            resultado.innerHTML += `<p><img src='homem-adulto.png' width='250px'></p>`
        } else {
            resultado.innerHTML = `Você é um homem idoso com ${idade} anos de idade!`
            resultado.innerHTML += `<p><img src='idoso.png' width='250px'></p>`
        }
    } else if (genero[1].checked){
        if (idade < 12) {
            resultado.innerHTML = `Você é uma menina com ${idade} anos de idade!`
            resultado.innerHTML += `<p><img src='bebe-menina.png' width='250px'></p>`
        } else if (idade > 12 && idade <= 18){
            resultado.innerHTML = `Você é uma adolescente mulher com ${idade} anos de idade!`
            resultado.innerHTML += `<p><img src='adolescente-mulher.png' width='250px'></p>`
        } else if (idade > 18 && idade <= 30){
            resultado.innerHTML = `Você é uma jovem mulher com ${idade} anos de idade!`
            resultado.innerHTML += `<p><img src='jovem-mulher.png' width='250px'></p>`
        } else if (idade > 30 && idade <= 55){
            resultado.innerHTML = `Você é uma mulher adulta com ${idade} anos de idade!`
            resultado.innerHTML += `<p><img src='mulher-adulta.png' width='250px'></p>`
        } else {
            resultado.innerHTML = `Você é uma mulher idosa com ${idade} anos de idade!`
            resultado.innerHTML += `<p><img src='idosa.png' width='250px'></p>`
        }
    }
}
function limpar(){
    let resultado = document.getElementById("res")
    let ano = document.getElementById("ano")
    ano.value = ""
    resultado.innerHTML = "Preencha os dados acima para saber o resultado"
}
