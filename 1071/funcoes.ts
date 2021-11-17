let contador = 0

export const verificaPrimo = (numero: number)=> {
    contador = 0
    for(let i = 1; i <= numero; i++){
        if(numero % i === 0){
            contador++
        }
    }
  
    if(contador > 2){
        return 1        //significa que o numero nao é primo, pois tem mais de dois divisores
    } else{
        return 0       // é primo
    }
  }