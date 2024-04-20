import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../actions/bookActions";
import "./BookList.css";
import SingleBook from "./SingleBook";
import { Book } from "../../types/bookTypes";
import coverImg from "../../assets/cover_not_found.jpg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate  } from "react-router-dom";
const BookList: React.FC = () => {
  const books = useSelector((state: any) => state.books);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddBook = () => {
    navigate("/add");
  };
  const handleDelete = (id: number) => {
    dispatch(deleteBook(id));
  };
  books.map((book: any) => {
    book.cover_img = coverImg;
  });

  return (
    <section className="booklist">
      <div className="container">
        <div className="booklist-content grid">
          {books.map((item: Book) => (
            <div className="book-wrapper" key={item.id}>
              <SingleBook book={item} />
              <button
                className="delete-button"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
          <div className="book-wrapper add-book" >
              <IoIosAddCircleOutline className="add-book-icon" onClick={handleAddBook}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookList;
