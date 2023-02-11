let login = [
    document.getElementById("email"),
    document.getElementById("senha")
]
let email = [
    ["gabriel200512354@gmail.com", "gbfernandesrj12"]
]

function logar(){
   if (email[0].indexOf(login[0].value && login[1].value) == -1){
    alert("Email ou senha inválidos!")
   } else {
    alert("Acesso liberado!")
   }
}