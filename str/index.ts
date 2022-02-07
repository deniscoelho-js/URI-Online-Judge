import prompt from 'prompt-sync'

console.clear()

// inverter string

let texto = 'Lorem Ipsum is simply dummy'

// let t = texto.split('')   //separa a str
// console.log(t)            //imprime separada
// console.log(t.join(''))   //junta a str

let t = texto.slice(0,4)
console.log(t + ':')  //corta a string e acrescenta :
let t2 = texto.slice(5).split('').reverse().join('') //corta o restante da string, separa em um vetor, inverte e junta outra vez


console.log(t2)
// ------------------------------------------------------------------------------
// let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'

// let separa_texto = text.split(" ")
// console.log(separa_texto)
// console.log(separa_texto[separa_texto.length-1])

// let separa_alfabeto = text.split("")
// console.log(separa_alfabeto)
// ------------------------------------------------------------------------------

// let nome = 'Denis'
// let sobrenome = ' Coelho'

// let nomeCompleto = nome.concat(sobrenome)

// console.log(nomeCompleto)
// ------------------------------------------------------------------------------

// let texto = 'Dennis'
// let tex = texto.replace('nn', 'n') 

// console.log(tex)

// ------------------------------------------------------------------------------