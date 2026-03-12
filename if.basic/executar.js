const prompt = require("prompt-sync")();


let imposto;
let salario = parseFloat(prompt("Digite seu salario: "))

if(salario <= 2.000){
    console.log("Insento de imposto")
}
else if (salario >=2.001 && salario <=3.500) {
    imposto=salario *0,10;
    console.log("vc teve 10% descontado")
}
