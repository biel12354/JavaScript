let array = [10, 20, 30, 50, 40, 10, 20]
for(let c = 0; c < array.length; c++){
    array += array[c] * array[c]
    
}
console.log(array)