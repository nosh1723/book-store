import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import { AppContext } from '../context';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
    const context = useContext(AppContext)
    const [bookDetail, setBookDetail] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const result = context.book.find(item => item.id === +id)
        setBookDetail(result)
    }, [])
    return (
        <div>
            <section class="py-5">
                <div class="container">
                    <div class="row gx-5">
                        <aside class="col-lg-6">
                            <div class="border rounded-4 mb-3 d-flex justify-content-center">
                                <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href={bookDetail.image}>
                                    <img style={{ maxWidth: "100%", maxHeight: "100vh", margin: "auto" }} class="rounded-4 fit" src={bookDetail.image} />
                                </a>
                            </div>
                            {/* <!-- thumbs-wrap.// -->
                            <!-- gallery-wrap .end// --> */}
                        </aside>
                        <main class="col-lg-6">
                            <div class="ps-lg-3">
                                <h3 class="title text-dark">
                                    {bookDetail.title}
                                </h3>
                                <div class="d-flex flex-row my-3">
                                    <div class=" mb-1 me-2">
                                        <span>{bookDetail.author}</span>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <span class="h5">${bookDetail.cost}</span>
                                </div>

                                <p className='mb-5'>
                                    {bookDetail.description}
                                </p>

                                <hr />
                                <a href="#" onClick={() => context.handleAddToCard(bookDetail)} class="btn btn-primary shadow-0"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            {/* <!-- content --> */}

        </div>
    );
};

export default BookDetail;