import prompt from "prompt-sync";

console.clear();

const readline = prompt();

let jogadas = ["pedra", "papel", "tesoura"];

let jogada_maquina = () => {
  return jogadas[Math.floor(Math.random() * 3)];
};

let jogo = (jogador: string, maquina: string): string => {
  if (
    (jogador === "pedra" && maquina === "tesoura") ||
    (jogador === "papel" && maquina === "pedra") ||
    (jogador === "tesoura" && maquina === "papel")
  ) {
    return "Você venceu!!!";
  } else if (jogador === maquina) {
    return "Empate!";
  } else {
    return "Máquina ganhou!";
  }
};

let opcao: string = "j";
let jogador: string;
let maq: string;

while (opcao != "s") {
  console.log("j - Jogar: ");
  console.log("s - Sair ");

  opcao = readline("Escolha a opção: ").toLowerCase();
  switch (opcao) {
    case "j":
      jogador = readline(
        "Faça sua jogada: pedra, papel, tesoura? "
      ).toLowerCase();
      console.clear();
      maq = jogada_maquina();

      console.log(`Sua jogada: ${jogador}, jogada da maquina: ${maq}`);
      console.log(jogo(jogador, maq));
      console.log("");
      break;

    case "s":
      break;
  }
}
