import React, { useContext, useEffect, useState } from 'react';
import { Link, useAsyncError, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context';
import { toast } from 'react-toastify';

const BookManageForm = () => {
    const context = useContext(AppContext)
    const path = useLocation().pathname
    const navigate = useNavigate()
    const { id } = useParams()
    const [dataUpd, setDataUpd] = useState([])
    const [inpValue, setInpValue] = useState({})

    useEffect(() => {
        if (id) {
            const result = context.book.find(i => i.id === +id)
            setDataUpd(result)
        }
    }, [])
    const validData = () => {
        if (!inpValue.title && !(path === `/update/${id}`)) {
            toast.error("Input is required!!!")
            return false
        }
        if (!inpValue.description && !(path === `/update/${id}`)) {
            toast.error("Input is required!!!")
            return false
        } if (!inpValue.author && !(path === `/update/${id}`)) {
            toast.error("Input is required!!!")
            return false
        } if (!inpValue.genre && !(path === `/update/${id}`)) {
            toast.error("Input is required!!!")
            return false
        } if (!inpValue.image && !(path === `/update/${id}`)) {
            toast.error("Input is required!!!")
            return false
        }
        return true
    }

    // func update and create book
    const handleSubmitForm = () => {
        if (validData()) {
            if (id) {
                const result = context.book.map(i => {
                    if (i.id === +id) {
                        return {
                            id: +id,
                            ...inpValue
                        }
                    }
                    return {
                        ...i
                    }
                })
                context.setBook([...result])
                navigate("/book-manage")
                toast.success("Update a book successfully!")
            } else {
                context.setBook([...context.book, {
                    id: context.book[context.book.length - 1].id + 1,
                    ...inpValue
                }])
                toast.success("Create new book successfully!")
            }
        }

    }
    const handleChange = (e) => {
        if (e.target.value) {
            setInpValue({ ...inpValue, [e.target.name]: e.target.value })
        }
    }
    console.log(context.book);
    return (
        <div>

            <form>
                <div className="space-y-12 container w-full px-8 mx-auto my-10" style={{ margin: "30px 0" }}>
                    <div className="border-b border-gray-900/10 pb-12">

                        <div className=" border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">{path === `/update/${id}` ? "Edit Manga" : "Create Manga"}</h2>

                            <div className="mt-4 ">
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Name</label>
                                    <input onChange={handleChange} defaultValue={dataUpd && path === `/update/${id}` ? dataUpd.title : ""} name="title" type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Description</label>
                                    <textarea onChange={handleChange} defaultValue={dataUpd && path === `/update/${id}` ? dataUpd.description : ""} name='description' class="form-control" id="textAreaExample1" rows="4"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Author</label>
                                    <input onChange={handleChange} defaultValue={dataUpd && path === `/update/${id}` ? dataUpd.author : ""} name="author" type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Genre</label>
                                    <input onChange={handleChange} defaultValue={dataUpd && path === `/update/${id}` ? dataUpd.genre : ""} name="genre" type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Image Url</label>
                                    <input onChange={handleChange} defaultValue={dataUpd && path === `/update/${id}` ? dataUpd.image : ""} name="image" type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Cost</label>
                                    <input onChange={handleChange} defaultValue={dataUpd && path === `/update/${id}` ? dataUpd.cost : ""} name="cost" type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end " style={{ margin: "30px 0" }}>
                        <Link to={"/book-manage"} className="btn">
                            Cancel
                        </Link>
                        <div
                            onClick={handleSubmitForm}
                            className="btn btn-primary shadow-0"
                        >
                            Save
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookManageForm;