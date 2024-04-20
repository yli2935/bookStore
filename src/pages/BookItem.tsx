import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Book } from "../types/bookTypes";
import { updateBook, deleteBook } from "../actions/bookActions";
import { useParams, useNavigate  } from "react-router-dom";
import "./BookItem.css";

const BookItem: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state: any) => state.books);
  const book: Book = books.find((book: Book) => book.id.toString() === id);

  const dispatch = useDispatch();
  const [name, setName] = useState(book.name);
  const [price, setPrice] = useState(book.price.toString());
  const [category, setCategory] = useState(book.category);
  const [description, setDescription] = useState(book.description);

  const handleDelete = () => {
    dispatch(deleteBook(book.id));
    navigate("/");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedBook: Book = {
      ...book,
      name,
      price: parseFloat(price),
      category,
      description,
    };
    dispatch(updateBook(updatedBook));
    navigate("/");
  };

  return (
    <div className="book-item-container">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="action-buttons">
          <button type="submit">Update</button>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookItem;
