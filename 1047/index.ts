import prompt from 'prompt-sync'

const readline = prompt()

const calculaTempo = (h_i: number, m_i: number, h_f: number, m_f:number) => {
    return(
        console.log(`O jogo durou ${h_f - h_i}:${m_f - m_i}`)
    )
}

const hor_inic = +readline('Digite a hora inicial: ')
const min_inic = +readline('Digite o minuto inicial: ')
const hor_final = +readline('Digite a hora final: ')
const min_final = +readline('Digite o minuto final: ')


calculaTempo(hor_inic, min_inic, hor_final, min_final)