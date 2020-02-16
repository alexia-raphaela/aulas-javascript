// Minhas primeiras variáveis globais
var numero = 3;
const nome = "Robert";
let lista = [];

function acessarVariaveisGlobais() {
    /* Acessando as variaveis que foram declaradas
       fora da função
    */
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