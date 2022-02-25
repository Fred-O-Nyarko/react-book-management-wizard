import { Book, Books, IGenre } from "./types";

export function isInList(books: Book[], book: Book) {
  return !!books.find((book) => book.id === book.id || book.isbn === book.isbn);
}

export function isEmpty(obj: any) {
  return Object.keys(obj).length === 0;
}

export function isInGenres(genres: IGenre[], genre: IGenre) {
  return !!genres.find((g) => g.id === genre.id);
}

export function isEqual<T>(obj1: T, obj2: T) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
