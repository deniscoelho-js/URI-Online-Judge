export interface Funcionario {
    
    numero: number,
    horas_trabalhadas: number,
    valor_hora: number
    
}

export const salario = (h_t: number, v_h: number ) => {
    return (h_t * v_h).toFixed(2)
}

/*
como compilar o codigo
ts-node ./1008/index
*/