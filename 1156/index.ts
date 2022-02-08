let soma = 1
let num = 3
let den = 1

for(let i = 3; i <= 39; i+=2){
  soma+=(i/(den*=2))
}

console.log(soma.toFixed(2))