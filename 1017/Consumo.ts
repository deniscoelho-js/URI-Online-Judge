const Km_L: number = 12

export const Consumo = (vel: number, temp: number) => {
    return(
        +((vel * temp) / Km_L).toFixed(3)
    )
}