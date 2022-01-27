import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

const numero = +readline('Digite o número: ')

let [a,b,c] = [1,1,1]

for(let i = 0; i < numero; i++){
  let aux = 0;
  for(let j = 0; j < numero - 1; j++){    
    aux++
    if(aux < 2){
      console.log(`${a} ${b = a * a} ${c = a * b}`)  
    }
    
  }
  console.log(`${a} ${b+=1} ${c+=1}`)
  a++
  aux = 0
}