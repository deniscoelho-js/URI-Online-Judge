export const Salario = (salario_fixo: number, vendas: number, ) => {
    return(
        (salario_fixo + (vendas * 0.15)).toFixed(2)
    )
}