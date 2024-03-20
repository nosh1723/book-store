import React, { useContext, useEffect, useState } from 'react';
import "./book.scss"
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context';
const Books = ({ book }) => {
    const context = useContext(AppContext)
    return (
        <div className='position-relative'>
            <div className="d-flex my-5 container justify-content-center justify-content-xxl-start flex-wrap" style={{ width: "100%", maxHeight: "1030px", overflow: "hidden" }}>
                {book.map(item => (
                    <div key={"book" + item.title} id='card-book' class="card mb-3 mx-3" style={{ width: "18rem", height: "max-content" }}>
                        <img src={item.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <Link to={`/book-detail/${item.id}`} style={{ textDecoration: "none", color: "black" }}><h5 class="card-title">{item.title}</h5></Link>
                            <p class="card-description card-text">{item.description}</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <a onClick={() => context.handleAddToCard(item)} href="#" class="btn btn-primary">Add to card</a>
                                <span><b>{item.cost}$</b></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Books;