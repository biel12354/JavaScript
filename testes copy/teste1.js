
function tabuada(n){
    let tabu = ""
    for(let c = 1; c <= 10; c++){
        tabu += `ac${n *c} `
    }
    return tabu
}

console.log(tabuada(2))