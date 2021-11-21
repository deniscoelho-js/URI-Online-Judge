let i = 1
let j = 7
let aux_i = 0

while(i <= 9){
    while(aux_i < 3){        
        console.log(`I = ${i} J = ${j}`)
        aux_i++
        j--
    }
    aux_i = 0
    i += 2
    j += 5
}