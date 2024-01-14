// A declaração de variáveis em java scrip é simples.
// Diferente de outas linguagens, não é necessário informar o tipo da variável, pois o interpretador infere o seu tipo.

var nome = "Giropops";

/* ###################################################################### */

// Temos duas palavras reservadas para definir uma variável.
// VAR e LET.
// Quando usamos a primeira, estamos permitindo que ela seja usada em qualquer lugar do código. 
// Ou seja, seu escopo é global.
// Já a segunda, tem seu escopo limitado ao bloco de código o qual está sendo declarada.

var nomeGlobal = "Giropops Global"; //Global

{
    //Bloco de código para simular uma variável local
    let nomeLocal = "Giropos Local";

    console.log("Imprimindo a variável Local dentro do bloco: " + nomeLocal);

    console.log("Imprimindo a variável Global dentro do bloco: " + nomeGlobal);

}

console.log()

// essa linha levanta um erro de variável não definida.
// Para testar o erro a linha abaixo deve ser descomentada.
//console.log("Tentando imprimir a variável Local fora do bloco: " + nomeLocal); 

console.log("Imprimindo a variável Global fora do bloco: " + nomeGlobal);


/* ###################################################################### */

// Existe um tipo especial de varivável que se chama const.
// Seu funcionamento é diferente, chamamos de varíável por um hábito.
// Contudo, ela é uma constante, pois uma vez definida, se torna imutável.

const variavelImutavel = "Meu valor não pode ser mudado";
console.log(variavelImutavel);

//Tentando mudar o valor da constante
//Isso vai levantar em erro TypeError: Assignment to constant variable.
//variavelImutavel = "Mudando meu valor"; // Para testar descomente.

console.log(variavelImutavel);