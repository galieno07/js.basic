const prompt = require('prompt-sync')()

let nota1 = parseFloat(prompt("Digite primeira nota: "));
let nota2 = parseFloat(prompt("Digite segunda nota: "));
let nota3 = parseFloat(prompt("Digite terceira nota: "));

console.log(nota1, nota2, nota3);

let media = (nota1 + nota2 + nota3) / 3;

console.log("Media " + media);

if (media >= 7) {
  console.log("aluno aprovado");
} else if (media > 5 && media < 7) {
  console.log("aluno em recuperação");
} else {
  console.log("Aluno reprovado");
}
