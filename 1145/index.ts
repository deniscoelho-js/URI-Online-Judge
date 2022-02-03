let colunas = 5
let numMax = 20

let contador = 0
let str = ""
for (let i = 1; i < numMax; i++){
    contador += 1
    if (contador === colunas) {
        contador = 0
        str += `${i}\n`
    }else{
        str += `${i} `
    }

}
str += `${numMax}`
console.log(str)

