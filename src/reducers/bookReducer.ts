import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "../actions/actionTypes";
import { BookState } from "../types/bookTypes";
const initialState: BookState = {
    books: [{
        id: 1234,
        name: "book",
        price: 12,
        category: "string",
        description: "string",
        cover_img:""
    }],
};

const bookReducer = (state = initialState, action: any): BookState => {
    switch (action.type) {
      case ADD_BOOK:
        return {
          ...state,
          books: [...state.books, action.payload],
        };
      case DELETE_BOOK:
        return {
          ...state,
          books: state.books.filter((book) => book.id !== action.payload),
        };
      case UPDATE_BOOK:
        return {
          ...state,
          books: state.books.map((book) =>
            book.id === action.payload.id ? action.payload : book
          ),
        };
      default:
        return state;
    }
  };
  
  export default bookReducer;