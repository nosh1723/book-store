import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from "../context"
import _ from 'lodash';

const Header = ({ book, setSearchData }) => {
    const context = useContext(AppContext)
    const navigate = useNavigate()
    const path = useLocation().pathname
    const [searchValue, setSearchValue] = useState('')
    const handleSearch = _.debounce(() => {
        if (searchValue) {
            (path !== "/") && navigate("/")
            const result = book.filter(i => i.title.toLowerCase().includes(searchValue.toLowerCase()))
            setSearchData([...result])
            return
        }
        setSearchData([...book])
    }, 600)
    const filterBook = (genre) => {
        const result = book.filter(item => item.genre.includes(genre))
        path !== "/" && navigate(`/`)
        setSearchData([...result])
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-sm-4 px-2 ">
                <div class="container-fluid">
                    <a class="navbar-brand" href='/'>BOOK</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item ">
                                <a class="nav-link " href={"/"}>Home</a>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link" to={"/book-manage"}>Book Manage</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Genre
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="">All</a></li>
                                    <li><a onClick={() => filterBook("novel")} class="dropdown-item" href="#">Novel</a></li>
                                    <li><a onClick={() => filterBook("slice-of-life")} class="dropdown-item" href="#">Slice of life</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input onChange={e => setSearchValue(e.target.value)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <div class="btn btn-outline-success" onClick={handleSearch}>Search</div>
                        </form>
                        <div className='mx-0 mt-2 mx-lg-2 mt-lg-0'>
                            <a onClick={context.handleHide} href="#" class="btn btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;