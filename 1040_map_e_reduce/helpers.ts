import prompt from 'prompt-sync'

const readline = prompt()

export const reduzir = (red: number[]) => {
    return(
        red.reduce((acc, indice)=>{
            return(
                acc + indice
            )
        })
    )
}

export const media = (notas: number, peso: number) => {
    return(
        notas / peso
    )
}

export const resultado = (nota_final: number) => {
    if(nota_final >= 7.0){
        return(
            console.log(`Média: ${nota_final}\n Aluno aprovado!`)
        )
    } else if( (nota_final>=5.0) && (nota_final<=6.9)){
        return(
            console.log(`Média; ${nota_final}\nAluno em recuperação`),
            exame_final(nota_final)
        )
    } else{
        return(
            console.log(`Média: ${nota_final}\nAluno reprovado!`)
        )
    }
}

export const exame_final = (nota_final: number) => {
    const nota_exame = +readline('Digite a nota da prova final: ')
    const prova_final = (nota_final + nota_exame) / 2

    if(prova_final >= 5.0){
        return(
            console.log(`Aluno aprovado. \nMédia: ${prova_final}`)
        )
    } else{
        return(
            console.log(`Aluno reprovado. \nMédia: ${prova_final}`)
        )
    }
}