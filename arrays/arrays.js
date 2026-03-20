// Array e uma estrutura de dados que permite colocar varios dados em
// uma so variavel imagine uma pratileira
//cada elemento possui uma posição, que é o indice (imdex)

// ARRAY DE FRUTAS

let frutas = [ "uva", "maçã", "pera"]

console.log(frutas)

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
//frutas[2] = "melancia"


console.log(frutas)

//adicionar = push
frutas.push("abacaxi")
frutas.push("caqui")

console.log(frutas)

frutas.pop()
console.log(frutas)

frutas.shift()
console.log(frutas)

//frutas.unshift("Abacaxi");
console.log(frutas)

let frutas_meio = frutas.slice(1,3)
console.log(frutas_meio)

let array = ['a', 'b', 'c', 'd','e','f','g', 'h'];
array.splice(5,3); // Remove um elemento no índice 2 ('c')
console.log(array);  // Resultado: ['a', 'b', 'd']


indicemelancia = frutas.indexOf('melancia')


console.log("o indice da melancia e o :" + indicemelancia)


const prompt = require('prompt-sync')

console.log("mercadinho")
console.log("prateleira")

//frutaescolhida =prompt("digite a fruta")

//indece  = frutas.indexOf(frutaescolhida)

//if(indece == -1){
  //  console.log("fruta n encontrada")
//
//}
    //else{
     //   console.log(`a fruta ${frutaescolhida} esta na prateleira:`)
  //  }


// FOR EACH
console.log("Usando for each")

frutas.forEach(fruta => {
    console.log("fruta: " + fruta)
});

