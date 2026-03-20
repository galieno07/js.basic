//2- Um zoológico precisa organizar a lista de seus animais. Atualmente, a lista animais contém: "Gato", "Cachorro", "Pássaro". O zoológico adquiriu um novo animal, um elefante, e ele deve ser adicionado ao final da lista. Além disso, o zoológico decidiu transferir o gato para outro local, então ele deve ser removido da lista. Exiba a lista atualizada
 array_animais = ['gato', 'cachorro', 'passaro']

 console.log("zooologico"= array_animais)

array_animais.push('elefante')
console.log("novo"= array_animais)

array_animais.shift()
console.log("novo"= array_animais)//


//3- Durante um levantamento internacional, foi criada uma lista de países chamada paises, que contém: "Brasil", "Argentina", "Chile", "Uruguai". Sua tarefa é contar quantos países estão listados e exibir essa informação.

array_paises = ['Brasil ', 'Argentina ', 'Chile ', 'Uruguai']
console.log(array_paises)
console.log('numero de paises: ' + array_paises.length)

//4- Em uma pesquisa, você tem um array de números chamado numeros: [10, 20, 30, 40, 50]. Você precisa localizar o índice do número 30 dentro do array para usar essa informação em um relatório para encontrar o índice e exibi-lo.

array_numeros =  [10, 20, 30, 40, 50]

console.log(array_numeros)
console.log( "O indice e " + array_numeros.indexOf(30))

//5- Uma lista de alimentos contém: "Arroz", "Feijão", "Batata", "Macarrão", "Carne". Para uma receita específica, você só precisa dos ingredientes "Feijão" e "Batata". Crie uma nova lista que contenha apenas esses dois ingredientes e exiba o resultado.


array_alimentos =  ["Arroz", "Feijão", "Batata", "Macarrão", "Carne"]

novo_array = array_alimentos.splice(1,2)

console.log("novos alimentos " + novo_array)