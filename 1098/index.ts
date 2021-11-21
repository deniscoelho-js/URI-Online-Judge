let i = 0
let j = 1
let aux = 0

while(i <= 8){
    while(aux < 3){
        console.log(`I = ${(i).toFixed(2)} J = ${(j.toFixed(2))}`)
        aux++
        j += 1
    }
    aux = 0
    j -= 3
    i += .2
    j += 0.2
}