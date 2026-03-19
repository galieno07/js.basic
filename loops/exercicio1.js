const prompt = require('prompt-sync')()

numero = parseFloat(prompt("Digite um numero para ver a tabuada: "));

 for (let i = 1; i <= 10; i++){
    console.log(numero + " X " + i + " = " + (numero*i))
 }
