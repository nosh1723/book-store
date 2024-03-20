import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Books from '../components/Books/Books';
import books from '../data/books';
import { AppContext } from '../context';

const Home = () => {
    const context = useContext(AppContext)
    return (
        <div>
            <Books book={context.searchData} />
        </div>
    );
};

export default Home;