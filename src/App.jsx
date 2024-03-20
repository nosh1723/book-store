import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BookDetail from "./pages/BookDetail";
import { useContext, useState } from "react";
import { AppContext } from "./context";
import Header from "./components/Header";
import BookManage from "./pages/BookManage";
import BookManageForm from "./pages/BookManageForm";

function App() {
  const context = useContext(AppContext)
  return (
    <div className="App">
      <Header book={context.book} setSearchData={context.setSearchData} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/slice-of-life" element={<Home />}></Route>
        <Route path="/novel" element={<Home />}></Route>
        <Route path="/book-detail/:id" element={<BookDetail />}></Route>
        <Route path="/book-manage" element={<BookManage />}></Route>
        <Route path="/create" element={<BookManageForm />}></Route>
        <Route path="/update/:id" element={<BookManageForm />}></Route>
      </Routes>
      <ToastContainer autoClose={2000} />

    </div>
  );
}

export default App;
