import prompt from 'prompt-sync'

let numeros: number[] = []

let aux= 0;
const readline = prompt()

console.clear()

for(let i = 1; i <= 6; i++){
    numeros.push(+readline(`Digite o numero na pocisao ${i}: `))
}

numeros.map((num) =>{
    
    if(num > 0){
         aux++
    }
})

console.log(`${aux} números positivos`)