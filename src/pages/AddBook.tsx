import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Book } from "../types/bookTypes";
import { addBook } from "../actions/bookActions";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const addedBook: Book = {
      id: Math.floor(Math.random() * 10000),
      name,
      price: parseFloat(price),
      category,
      description,
      cover_img: "",
    };
    dispatch(addBook(addedBook));

    navigate("/");
  };

  return (
    <div className="add-book-container">
      <h2 >Add Book</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>


    </div>
  );
};

export default AddBook;
