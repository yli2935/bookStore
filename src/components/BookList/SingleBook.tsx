import React from "react";
import { Link } from "react-router-dom";
import "./BookList.css";
import { Book } from "../../types/bookTypes";

interface SingleBookProps {
  book: Book;
}

const SingleBook: React.FC<SingleBookProps> = ({ book }) => {
  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className="book-item-info text-center">
        <Link to={`/book/${book.id}`}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{book.name}</span>
          </div>
        </Link>

        <div className="book-item-info-item edition-count fs-15">
          <span className="text-capitalize fw-7">description: </span>
          <span>{book.description}</span>
        </div>
        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">category:  </span>
          <span>{book.category} </span>
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">price:  </span>
          <span>{book.price + "$"} </span>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
