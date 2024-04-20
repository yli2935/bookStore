import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import Home from './pages/Home.tsx';
import BookItem from "./pages/BookItem";
import AddBook from "./pages/AddBook";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path="book/:id" element={<BookItem />} />
        <Route path = "add" element = {<AddBook />} />
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
