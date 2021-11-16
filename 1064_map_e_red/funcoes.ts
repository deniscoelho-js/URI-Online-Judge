export const reduzir = (red: number[]) => {
    return(
        red.reduce((acc, index) => {
            return(
                acc + index
            )
        })
    )
}


export const media = (numReduzidos: number, contador: number) => {
    return(
        numReduzidos / contador
    )
}