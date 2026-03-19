// Estrutura de controle
//executar numeros de codigo

array = ["uva", "maçã", "pera", "melancia", "abacate", "pera"];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

for (let i = 0; i <= 3; i++) {
  //alvo fixo
  console.log("Futas: " + array[i]);
}


for (let i = 0; i < 3; i++) {
  console.log("Futas: " + array[i]);
}

//alvo movel
for (let i = 0; i < array.length; i++) {
  //'frutas[i]' acessa o elemento no índice atual
  console.log("Elemento no índice: "+ array[i]);
}
