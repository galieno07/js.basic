const prompt = require("prompt-sync")();

let numero = 8;
let palpite;
let tentativa = 0;

palpite = Number(prompt("adivinhe o numero: "));

if (palpite === numero) {
  console.log("{correto}");
}

while (palpite !== numero) {
  tentativa++;

  console.log("__vc errou");

  if (palpite < numero) {
    console.log("**Numero esta acima**");
  } else {
    console.log("**Numero esta abaixo**");
  }

  if (tentativa >= 5) {
    console.log("Voce perdeu");
    break;
  }

  console.log("\n__Nova tentativa__");
  palpite = Number(prompt("Digite novamente: "));

  if (palpite === numero) {
    console.log("\n*Voce Acertou :)");
  }
}