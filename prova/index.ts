console.clear()

let resultado

function func(x: number, y: number): number {
  if(y===0){
    return x
  } else{
    return func(y, x%y)
  }
}

resultado = func(9,3)

console.log(resultado)