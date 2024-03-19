import React, { useEffect, useState } from 'react';
import "./book.scss"
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Books = ({ book }) => {
    const [cartBook, setCartBook] = useState([])
    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
        if (cartBook.length) {
            const result = cartBook.reduce((total, item) => {
                return total += item.cost * item.quantity
            }, 0)
            setTotalCost(result)
        }
    }, [cartBook])
    const handleAddToCard = (book) => {
        toast.success(`Add "${book.title}" to card successfully!!`)
        const result = cartBook.find(item => item.id === book.id)
        if (result) {
            result.quantity += 1
            setCartBook([...cartBook])
            return
        }
        const newItem = {
            ...book,
            quantity: 1
        }
        setCartBook([...cartBook, newItem])
    }
    const handleChangeQuantity = (id, e) => {
        const checkBook = cartBook.find(i => i.id === id)
        if (e === "-" && checkBook.quantity > 1) {
            checkBook.quantity -= 1
            setCartBook([...cartBook])
            return
        }
        if (e === "+") {
            checkBook.quantity += 1
            setCartBook([...cartBook])
        }
    }
    return (
        <div className='position-relative'>
            <div className="d-flex my-5 container justify-content-center justify-content-xxl-start flex-wrap" style={{ width: "100%", maxHeight: "1030px", overflow: "hidden" }}>
                {book.map(item => (
                    <div key={"book" + item.title} id='card-book' class="card mb-3 mx-3" style={{ width: "18rem", height: "max-content" }}>
                        <img src={item.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-description card-text">{item.description}</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <a onClick={() => handleAddToCard(item)} href="#" class="btn btn-primary">Add to card</a>
                                <span><b>{item.cost}$</b></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Cart data={cartBook} setCartBook={setCartBook} total={totalCost} handleChangeQuantity={handleChangeQuantity} />
        </div>
    );
};

export default Books;