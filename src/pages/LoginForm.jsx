import React from 'react';
import Header from '../components/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookManage = () => {
    const navigate = useNavigate()
    const path = useLocation().pathname

    const handleChange = (e) => {
        // setDataUser({ ...dataUser, [e.target.name]: e.target.value })
    }

    const isValidUser = () => {
        // if (!dataUser.name && path === "/signup") {
        //     toast.error("Username is required!")
        //     return false
        // }
        // if (!dataUser.email) {
        //     toast.error("Email is required!")
        //     return false
        // }
        // const re = /\S+@\S+\.\S+/;
        // if (!re.test(dataUser.email)) {
        //     toast.error("Please enter a valid email address!")
        //     return false
        // }
        // if (!dataUser.password) {
        //     toast.error("Password is required!")
        //     return false
        // }
        // if (path === "/signup") {
        //     if (dataUser.password !== dataUser.repassword) {
        //         toast.error("Your password is not the same!")
        //         return false
        //     }
        // }
        // return true
    }

    const handleSignUpSignIn = async () => {
        if (isValidUser()) {

        }
    }
    return (
        <div>
            <div id="intro" class="bg-image shadow-2-strong">
                <div class="mask d-flex align-items-center" style={{ height: "100vh", background: "#EEEDEB" }}>
                    <div class="container ">
                        <div class="row justify-content-center ">
                            <div class="col-xl-5 col-md-8 ">
                                <form class="bg-white rounded shadow-5-strong p-5  shadow-md">
                                    <h2 className='text-center mb-5'>Login to your account</h2>
                                    <div class="form-outline mb-4" data-mdb-input-init>
                                        <label class="form-label" for="form1Example1">Email address</label>
                                        <input type="email" id="form1Example1" placeholder='Email...' class="form-control" />
                                    </div>

                                    <div class="form-outline mb-4" data-mdb-input-init>
                                        <label class="form-label" for="form1Example2">Password</label>
                                        <input type="password" id="form1Example2" placeholder='Password...' class="form-control" />
                                    </div>

                                    <div className='d-flex justify-content-between mb-4'>
                                        <Link to={"/"} class="btn btn-primary btn-block" data-mdb-ripple-init>Back to home</Link>
                                        <button class="btn btn-primary btn-block px-3" data-mdb-ripple-init>Login</button>
                                    </div>
                                    <p className='text-center'>New to menber? <Link to={"/register"}>Crete new account</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookManage;