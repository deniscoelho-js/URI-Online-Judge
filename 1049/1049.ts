import prompt from 'prompt-sync'

const readline = prompt()

const palavra1 = readline('Caracteristica 1 do animal: ')
const palavra2 = readline('Caracteristica 2 do animal: ')
const palavra3 = readline('Caracteristica 3 do animal: ')


if(palavra1.toLocaleLowerCase() === "vertebrado"){
    if(palavra2.toLocaleLowerCase() === "ave"){
        if(palavra3.toLocaleLowerCase() === "carnivoro"){
            console.log('aguia')
        } else{
            console.log('pomba')
        }
    } else{ // se palavra2 nao for ave, cai aqui
        if(palavra3.toLocaleLowerCase() === 'onivoro'){
            console.log('homem')
        } else{
            console.log('vaca')
        }
    }
} else{     // se palavra 1 nao for vertebrado, cai aqui
    if(palavra2.toLocaleLowerCase() === 'inseto'){
        if(palavra3.toLocaleLowerCase() === 'hematofago'){
            console.log('pulga')
        } else{
            console.log('lagarta')
        }
    } else{
        if(palavra3.toLocaleLowerCase() === 'hematofago'){
            console.log('sanguessuga')
        } else{
            console.log('minhoca')
        }
    }
}