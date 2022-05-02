let vetor = []

let str1 = ''
let str2 = ''

console.log('vetor em orderm crescente')
for(let i = 10; i<=100; i+=10){
    console.log(vetor[i] = i)
    str1 += vetor[i] + ' '              // armazena o vetor para ser imprimido na mesma linha
}

console.log(str1)                      // imprime o vetor na mesma linha


console.log('\n\nvetor em orderm decrescente')
for(let j = 100; j>=10; j-=10){
    console.log(vetor[j])
}