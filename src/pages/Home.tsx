import React from 'react';
import Header from '../components/Header/Header';
import BookList from "../components/BookList/BookList";

const Home: React.FC = () => {
  return (
    <main>
        <Header />
        <BookList />
    </main>
  );
};

export default Home;
