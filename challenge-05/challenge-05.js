/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ['csgo', 'gtav', 'dota', 'r6'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arrayReturn(array) {
    return array;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(arrayReturn(myArray[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrayParam (x, y) {
    return x[y];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayValues = ['string', 30, false, undefined, NaN];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arrayParam(arrayValues, 0));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name) {
    var books = {
        htmlecss: {
            quantidadePaginas: 267,
            autor: 'Jon Duckett',
            editora: 'Alta Books'
        },
        javascript: {
            quantidadePaginas: 630,
            autor: 'Jon Duckett',
            editora: 'Alta Books'
        },
        sql: {
            quantidadePaginas: 450,
            autor: 'Michael',
            editora: 'Campus'
        }
    };
    
    if (name === undefined) {
        return books
    }
    return books.name
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
function paginasBook() {
    return "O livro " + book(htmlecss) + " tem " + book(htmlecss.quantidadePaginas) + " páginas!";
}

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
function autorBook() {
    return "O autor do livro " + book(htmlecss) + " é " + book(htmlecss.autor) + " .";
}

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
function editoraBook() {
    return "O livro " + book(htmlecss) + " foi publicado pela editora " + book(htmlecss.editora) + " .";
}
