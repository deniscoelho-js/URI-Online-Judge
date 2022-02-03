import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

let entrada = +readline('Digite o numero máximo: ')

let str = ''

while (entrada !== 0) {
  for (let i = 1; i <= entrada; i++) {
    // if (i === entrada) console.log(i + "\n");
    // else console.log(i);
    if (i === entrada){
       str += `${i}\n`;
      //  console.log(str)
      }
    else{
     str += `${i} `;
    //  console.log(str)
    }
  }
      entrada = +readline('Digite o numero máximo: ')
      console.log(str)
}