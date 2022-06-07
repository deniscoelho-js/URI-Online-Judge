import prompt from "prompt-sync";

console.clear();

const readline = prompt();
let numMaximo = 0;
let arrNumeros: Array<number> = [];
let arrNumeros2: Array<number> = [];

const ordenarArray = (array: Array<number>): Array<number> => {
  return array.sort((a, b) => a - b);
};

numMaximo = +readline("Digite a quantidade de numeros: ");

for (let i = 0; i < numMaximo; i++) {
  arrNumeros.push(+readline(`digite o ${i + 1} numero: `));
}

//nao posso usar: arrNumeros2 = arrNumeros, pois isso afata os dois arrays, ou seja, os dois serão ordenados
// tenho que usar o spread operator para fazer a cópia
arrNumeros2 = [...arrNumeros];

console.log(`Array original: ${arrNumeros}`);
console.log(`Array ordenado: ${ordenarArray(arrNumeros2)}`);

arrNumeros.map((numero, index, arr) => {
  if (arrNumeros2[0] === arr[index]) {
    return (
      console.log(`Menor valor: ${arrNumeros2[0]}`),
      console.log(`Posição: ${index}`)
    );
  }
});
