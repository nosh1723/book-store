import React, { useState } from 'react';
import Header from '../components/Header';
import Books from '../components/Books/Books';
import books from '../data/books';

const Home = () => {
    const [book, setBook] = useState([...books])
    const [searchData, setSearchData] = useState(book);
    return (
        <div>
            <Header book={book} setSearchData={setSearchData} />
            <Books book={searchData} />
        </div>
    );
};

export default Home;