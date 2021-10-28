const reajuste: number[]  = [.04, .07, .1, .12, .15]

export const novoSalario = (salario: number) => {
    if((salario >= 0) && (salario <=400.00)){
        return(
            console.log(`Novo salario: ${(salario * (1 + reajuste[4])).toFixed(2)}`),
            console.log(`Reajuste de ${(salario * reajuste[4]).toFixed(2)}`),
            console.log(`Percentual de: ${reajuste[4] * 100}%`)
        )
    } else if((salario >= 400.01) && (salario <= 800.00)){
        return(
            console.log(`Novo salario: ${(salario * (1 + reajuste[3])).toFixed(2)}`),
            console.log(`Reajuste de ${(salario * reajuste[3]).toFixed(2)}`),
            console.log(`Percentual de: ${reajuste[3] * 100}%`)
        )
    } else if((salario >= 800.01) && (salario <= 1200.00)){
        return(
            console.log(`Novo salario: ${(salario * (1 + reajuste[2])).toFixed(2)}`),
            console.log(`Reajuste de ${(salario * reajuste[2]).toFixed(2)}`),
            console.log(`Percentual de: ${reajuste[2] * 100}%`)
        )
    }else if((salario >= 1200.01) && (salario <= 2000.00)){
        return(
            console.log(`Novo salario: ${(salario * (1 + reajuste[1])).toFixed(2)}`),
            console.log(`Reajuste de ${(salario * reajuste[1]).toFixed(2)}`),
            console.log(`Percentual de: ${reajuste[1] * 100}%`)
        )
    } else{
        console.log(`Novo salario: ${(salario * (1 + reajuste[0])).toFixed(2)}`),
        console.log(`Reajuste de ${(salario * reajuste[0]).toFixed(2)}`),
            console.log(`Percentual de: ${reajuste[0] * 100}%`)
    }
}