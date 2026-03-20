// ira rodar enquanto a condiçao for verdadeira

const prompt = require("prompt-sync")();

let numero = "8";
let palpite = prompt("adivinhe o numero :");
let tentativa = 0;

if (palpite === numero) {
  console.log("{correto}");
}

while (palpite !== numero) {
  console.log("__vc errou");
  tentativa++;

  if (palpite < numero) {
    console.log("**Numero esta a cima**");
  } else {
    console.log("**Numero esta a baixo**");
  }

  
  palpite = prompt(console.log("\n__Nova tentativa__"));
  if (palpite === numero) {
    console.log("\n*Voce Acertou :)");
  }
}
