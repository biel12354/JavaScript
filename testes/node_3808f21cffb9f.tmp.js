let data = new Date()
let segundos = data.getHours()
let segundo = 0

setInterval(function() {
    segundo = segundos
    console.log(segundo)
}, 1000)