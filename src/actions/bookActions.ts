import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "./actionTypes";
import { Book } from "../types/bookTypes";

export const addBook = (book: Book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const deleteBook = (id: number) => ({
  type: DELETE_BOOK,
  payload: id,
});

export const updateBook = (book: Book) => ({
  type: UPDATE_BOOK,
  payload: book,
});
