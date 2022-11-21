const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7},
    {title: '10th Joy', pages: 32, genre: 'action', rating: 8},
    {title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1},
    {title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9},
    {title: '300', pages: 600, genre: 'criminology', rating: 10},
    {title: 'Renewer', pages: 472, genre: 'biology', rating: 2},
];

const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

// Zad6. (2 pkt)
// Stwórz kompozycję która na tablicy „books” zlicza ilość liter w tytule (title) nie licząc spacji, gdzie
// strony (pages) są parzyste oraz genre kończy się na literkę „y”
const letters = (list) => list.filter(book => book.pages %2 === 0);
const genreEndsWith = (list) => list.filter(book => book.genre.endsWith('y'));
const noSpaces = (list) => list.map(book => book.title.replace(/ /g,"").length);

const kompoz1 = compose(letters, genreEndsWith, noSpaces);
console.log(kompoz1(books));


// Zad7. (2 pkt)
// Stwórz kompozycję która na tablicy „books” zlicza ilość pozytywnych ocen (rating > 5), gdzie
// strony (pages) są liczbą nieparzystą oraz tytuł (title) zawiera liczbę.
const odd = (list) => list.filter(book => book.pages %2);
const numberTitle = (list) => list.filter(book => book.title.match(/\d/g));
const rating = (list) => list.filter(book => book.rating > 5).length;

const kompoz2 = compose(numberTitle, odd, rating);
console.log(kompoz2(books));


// Zad8. (2 pkt)
// Stwórz kompozycję która na tablicy „books” zwraca drugi najdłuższy tytuł (title).
const title = (list) => list.map(book => book.title);
const sort = (list) => list.sort(((a, b) => a.length - b.length)).at(-2);

const kompoz3 = compose(title, sort);
console.log(kompoz3(books));