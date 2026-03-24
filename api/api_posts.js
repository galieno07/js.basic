const prompt = require(`prompt-sync`)()

function mostramenu(){
console.log("-- PROGRAMA DE LISTAR POSTS --")
console.log(`MENU DE OPÇÕES:
1 - LISTAR TODOS OS POSTS
2 - LISTAR POSTS DE UM USUARIO ESPECIFICO   `)
}


//criação das funções
function listartodosPosts(){
    console.log("\n ---- TODOS OS POSTS ----")

    fetch("https://jsonplaceholder.typicode.com/posts&quot;")
        .then(response => response.json())
        .then(posts => console.log(posts))
}
function listartodosPostsporusuario(){
    console.log("\n ---- TODOS OS POSTS ----")

    fetch("https://jsonplaceholder.typicode.com/posts&quot;")
        .then(response => response.json())
        .then(posts => console.log(posts))
}





escolha = prompt("Digite a opcao desejada: ")

if (escolha == "1") {
    console.log("\n ---- TODOS OS POSTS ----")

    fetch("https://jsonplaceholder.typicode.com/posts&quot;")
        .then(response => response.json())
        .then(posts => console.log(posts))
}
else {

    console.log("\n ---- POSTAGENS DO USUARIO ----")

    console.log("\n Digite o ID do usuario (1 a 10) para ver seus posts")

    let idusuario = prompt("ID do usuario: ")

    fetch("https://jsonplaceholder.typicode.com/posts?userId=&quot; " + idusuario)
        .then(response => response.json())
        .then(posts => console.log(posts))
}