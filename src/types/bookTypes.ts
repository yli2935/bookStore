export interface Book {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    cover_img:string;
  }
  
  export interface BookState {
    books: Book[];
  }
  
  export const ADD_BOOK = "ADD_BOOK";
  export const DELETE_BOOK = "DELETE_BOOK";
  export const UPDATE_BOOK = "UPDATE_BOOK";
  