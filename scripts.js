// Minhas primeiras variáveis globais
var numero = 3;
const nome = "Robert";
// Constantes não podem ser modificadas
// nome = "Alexia";
let lista = [];


function acessarVariaveisGlobais() {
    /* Acessando as variaveis que foram declaradas
       fora da função
    */
    console.log("função acessarVariaveisGlobais")
    console.log(numero * numero);
    console.log(numero)
    console.log(nome)
    console.log(lista)

}

// Chamada de função antes da reatribuição
acessarVariaveisGlobais()

// Reatribuição de valor na variável numero
numero = 8
console.log("variavel numero foi reatribuida", numero)

// criei um bloco de função
function mostrarGreen() {
    // Chamei uma função que já existia 
    console.log("A função mostrarGreen() foi chamada");
}

// Chamei a função mostrarGreen() que eu criei
mostrarGreen()

acessarVariaveisGlobais()

lista = [
    1993,
    2001,
    numero = 3 * 2,
    numero,
    numero * numero,
    lista,
    nome
]

function mostrarLista() {
    console.log("funçao mostrarLista")
    console.log(lista)

}

mostrarLista()

function criarVariaveisLocais() {
    console.log("função para acessar paises")

    // Esta variável é local
    var paises = [
        "França",
        "Inglaterra",
        "Romenia",
        "Canada",

    ]
    console.log(paises)
}

if (lista.length > 10) {
    console.log("O tamanho da lista é diferente de 10")

} else {
    console.log("O tamanho da lista é:", lista.length)
}

var paises = [
    "França",
    "Inglaterra",
    "Romenia",
    "Canada",

]

criarVariaveisLocais()

// Variável local não pode ser acessada fora do escopo local
console.log(paises)

// Se for maior que do que a quantidade de itens ou se for igual a qautidade itens, ele irá executar
if (lista.length >= 10) {
    console.log(lista.length)
}

// Criando Arrays
var array = ['Alexia', 'Robert', 2019];

function acessarArray() {
    console.log(array)

}

acessarArray()

if (array.length > 10) {
    console.log("A quantidade de array é igual a 0")

} else {
    console.log("A quantidade de Array é:", array.length)
}
var pessoa = {};