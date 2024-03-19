import React, { useContext } from 'react';
import "./cart.scss"
import { AppContext } from '../../context';
import { pop } from '../../data/books';

const Cart = (props) => {
    const context = useContext(AppContext)

    const handleDelete = (id) => {
        const result = props.data.filter(item => item.id !== id)
        props.setCartBook(result)
    }
    return (
        <div>
            <section class={`cart gradient-custom px-2 ${context.hide ? "d-none" : "d-block"}`}>
                <div class="container py-5">
                    <div class="row d-flex justify-content-center my-4">
                        <div class="col-md-8">
                            <div class="card mb-4">
                                <div class="card-header py-3">
                                    <h5 class="mb-0">Cart - {props.data.length} items</h5>
                                </div>
                                <div class="card-body">
                                    {/* <!-- Single item --> */}
                                    {props.data.map(book => (
                                        <div class="row mb-2" style={{ height: "130px" }}>
                                            <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                {/* <!-- Image --> */}
                                                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                    <img src={book.image}
                                                        class="w-100" alt="Blue Jeans Jacket" />
                                                    <a href="#!">
                                                        <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                                    </a>
                                                </div>
                                                {/* <!-- Image --> */}
                                            </div>

                                            <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                {/* <!-- Data --> */}
                                                <p className='truncate'><strong>{book.title}</strong></p>
                                                <p>{book.author}</p>
                                                <button onClick={() => handleDelete(book.id)} type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                                                    title="Remove item">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                    </svg>
                                                </button>
                                                {/* <!-- Data -->         */}
                                            </div>

                                            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                {/* <!-- Quantity -->         */}
                                                <div class="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                                    <button onClick={() => props.handleChangeQuantity(book.id, "-")} class="btn btn-primary px-3 me-2">
                                                        <span>-</span>
                                                    </button>

                                                    <div class="form-outline">
                                                        <input id="form1" min="0" name="quantity" value={book.quantity} type="number" class="form-control" />
                                                    </div>

                                                    <button class="btn btn-primary px-3 ms-2"
                                                        onClick={() => props.handleChangeQuantity(book.id, "+")} >
                                                        <span>+</span>
                                                    </button>
                                                </div>
                                                {/* <!-- Quantity -->         */}

                                                {/* <!-- Price -->         */}
                                                <p class="text-start text-md-center">
                                                    <strong>{book.quantity !== 0 ? book.cost * book.quantity : book.cost}$</strong>
                                                </p>
                                                {/* <!-- Price -->         */}
                                            </div>
                                        </div>
                                    ))}

                                    {/* <!-- Single item -->         */}

                                    <hr class="my-4" />
                                    {/* <!-- Single item --> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4">
                                <div class="card-header py-3">
                                    <h5 class="mb-0">Summary</h5>
                                </div>
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li
                                            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Products
                                            <span>{props.total}$</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>Free</span>
                                        </li>
                                        <li
                                            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                                <strong>
                                                    <p class="mb-0">(including VAT)</p>
                                                </strong>
                                            </div>
                                            <span><strong>{props.total}$</strong></span>
                                        </li>
                                    </ul>

                                    <button type="button" class="btn btn-primary btn-lg btn-block">
                                        Go to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Cart;