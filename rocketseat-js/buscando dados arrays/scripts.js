/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
      category: "Riqueza",
      books: [
          {
              title: "Os segredos da mente milionária",
              author: "T. Harv Eker",
          },
          {
              title: "O homem mais rico da Babilônia",
              author: "George S. Clason",
          },
          {
              title: "Pai rico, pai pobre",
              author: "Robert T. Kiyosaki e Sharon L. Lechter",
          },
      ],
  },
  {
      category: "Inteligência Emocional",
      books: [
          {
              title: "Você é Insubstituível",
              author: "Augusto Cury",
          },
          {
              title: "Ansiedade – Como enfrentar o mal do século",
              author: "Augusto Cury",
          },
          {
              title: "Os 7 hábitos das pessoas altamente eficazes",
              author: "Stephen R. Covey",
          },
      ],
  },
];

const totalCategory = booksByCategory.length;
console.log(totalCategory)
for (let category of booksByCategory) {
  console.log(`Total de livros da categoria ${category.category}: ${category.books.length}`)
}

function countAuthors() {
    let authors = [];
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors()

function findTitlesOfAugustoCury() {
    let booksOfAugustoCury = []
    for (let category of booksByCategory) {
        for (let book of category.books)
        {
            if (book.author === "Augusto Cury"){
                booksOfAugustoCury.push(book.title)
            }
        }
    }

    console.log("Livros do Augusto Cury: ", booksOfAugustoCury)
}

findTitlesOfAugustoCury()

function findTitlesOfAuthor(author) {
    let booksOfAuthor = []
    for (let category of booksByCategory) {
        for (let book of category.books)
        {
            if (book.author === author){
                booksOfAuthor.push(book.title)
            }
        }
    }
    if (booksOfAuthor.length == 0){
        console.log("Não achei o autor")
    }
    else{
        console.log(`Livros do ${author}:  ${booksOfAuthor.join(", ")}`)
    }

    
}

findTitlesOfAuthor("Augusto Cury")