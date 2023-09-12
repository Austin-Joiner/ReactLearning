const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring

const book = getBook(2);
book;
// books;

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
// destructuring so it saves lione of code
// title;
// author;
console.log(author, title, genres); // console.log the title and author

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre] = genres;
const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // add remaing genres to be listed in the array must be the last thing in the array break down

console.log(primaryGenre, secondaryGenre); // this will let you call on what is in the [] that is part of genres instead of typin git all out like above lines
console.log(genres); // this will log all genres
console.log(primaryGenre, secondaryGenre, otherGenres); // this will show the first 2 genres then in a seperate array will list of the remaining

// const newGenres = [genres, "epic fantasy"]; // this adds the new genre outside of the array
const newGenres = [...genres, "epic fantasy"]; // this will layout each genre in the array so when making a new array called newGenre it is in the array with the others
newGenres;

// const updatedBook = { book, moviePublicationDate: "2001-12-19" };// this will add the new property into a seperate object under the whole object
// const updatedBook = { ...book, moviePublicationDate: "2001-12-19" }; // with the spread operator it will combine them into a new object called updatedBook
// updatedBook;
const updatedBookFix = {
  ...book, // showing all properties from book
  moviePublicationDate: "2001-12-19", // adding a new property
  pages: 1200,
}; // this will overwrite the previous pages property to the new 1242
updatedBookFix;
console.log(updatedBookFix);

const summary = `This is the summary of the book, ${title}, It is a great story. By: ${author}, Published on: ${
  publicationDate.split("-")[0] // you split the date by the - then grab the first in the array which the date is formatted yyyy-mm-dd so its [0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`; // conditional to true or false on movie adaptation.
summary;

const pagesRange =
  updatedBookFix.pages > 1000 ? "over a thousand" : "less than 1000"; // pages > 1000=condition ?=if "over a thousand"=result :=elseif "less than 1000"=result;
pagesRange;
console.log(`The book has ${pagesRange} pages`);

// original function vs arrow function
//original function
// function getYear(str) { //function decleration
//   return str.split("-")[0];
// }
// console.log(getYear(publicationDate));
//arrow function
// const getYear = (str) => {  // another way to write the arrow if it needed more
//  return str.split("-")[0]
// };
const getYear = (str) => str.split("-")[0]; // function expression
console.log(getYear(publicationDate));

const newSummary = `This is the summary of the book, ${title}, It is a great story. By: ${author}, Published on: ${
  getYear(publicationDate) // you split the date by the - then grab the first in the array which the date is formatted yyyy-mm-dd so its [0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
newSummary;

console.log(true && "Some String"); // true so it moves on to next
console.log(false && "Some String"); // false so it stops and doesnt move on at all
console.log(hasMovieAdaptation && "this book has a movie"); // if it does it will continue to the string if it is false will stop right there and not display the string
//falsy: 0, '', null, undefined
console.log("jonas"); // this is truthy it will show the string that follows
console.log("jonas" && "show if true"); // this is truthy it will show the string that follows
console.log(0 && "show if true");

console.log(true || "some String"); // || is oppsotie of && and will display true and stop following lines
console.log(false || "some string"); // this will pass to the following lines if false

console.log(book.translations.spanish);

const spanishTranslate = book.translations.spanish || "NOT Translated"; // will make it show spanish translation or show not translated if its false
spanishTranslate;

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong;

const rightCount = book.reviews.librarything.reviewsCount ?? "no data";
rightCount;

function getTotalReviewCount(book) {
  const goodRead = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything.reviewsCount;
  return goodRead + librarything;
}
console.log(getTotalReviewCount(book));
