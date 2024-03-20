import React, { useContext } from 'react';
import Header from '../components/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../context';

const BookManage = () => {
    const navigate = useNavigate()
    const path = useLocation().pathname
    const context = useContext(AppContext)

    const handleDelete = (id) => {
        const result = context.book.filter(i => i.id !== id)
        context.setBook([...result])
        toast.success("Delete successfully!!")
    }
    return (
        <div style={{ marginTop: "100px" }}>
            <div className="container w-full m-auto border-gray-200 bg-white px-10 py-10 sm:px-6">
                <table className="table table-bordered table-hover mt-6">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" className='w-25'>#</th>
                            <th scope="col" className='w-25'>Title</th>
                            <th scope="col" className=''>Description</th>
                            <th scope="col" className=''>Author</th>
                            <th scope="col" className=''>Genre</th>
                            <th scope="col" className=''>Image Url</th>
                            <th scope="col" className=''>cost</th>
                            <th scope="col" className=''></th>
                        </tr>
                    </thead>
                    <tbody>
                        {context.book && context.book.map((book, index) => {
                            return <tr key={"bookti-" + index}>
                                <th scope="row">{index + 1}</th>
                                <td><p style={{ width: "300px" }} class="truncate">{book.title}</p></td>
                                <td><p style={{ width: "300px" }} class="truncate">{book.description}</p></td>
                                <td><p style={{ width: "100px" }} class="truncate">{book.author}</p></td>
                                <td><p style={{ width: "70px" }} class="truncate">{book.genre}</p></td>
                                <td><p style={{ width: "200px" }} class="truncate">{book.image}</p></td>
                                <td>{book.cost}$</td>
                                <td>
                                    <div className=' flex items-center justify-start gap-x-2'>
                                        <Link to={`/update/${book.id}`} className="text-gray-600 hover:bg-gray-700 hover:text-white  rounded-md px-3 py-2 text-sm font-medium">
                                            Edit
                                        </Link>
                                        <Link onClick={() => handleDelete(book.id)} className="text-gray-600 hover:bg-gray-700 hover:text-white  rounded-md px-3 py-2 text-sm font-medium">
                                            Delete
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>

                <div className=' d-flex justify-content-end w-full '>
                    <Link to={`/create`} className="btn btn-primary shadow-0 ">
                        Create new Manga
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default BookManage;