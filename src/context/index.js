import { createContext, useEffect, useState, useRef } from "react";
import books from "../data/books";
import { toast } from "react-toastify";
import Cart from "../components/Cart/Cart";

const AppContext = createContext();

const ContextWrap = ({ children }) => {
  const [hide, setHide] = useState(true);
  const [book, setBook] = useState([...books]);
  const [cartBook, setCartBook] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [searchData, setSearchData] = useState(book);

  useEffect(() => {
    if (cartBook.length) {
      const result = cartBook.reduce((total, item) => {
        return (total += item.cost * item.quantity);
      }, 0);
      setTotalCost(result);
    }
  }, [cartBook]);

  const handleAddToCard = (book) => {
    toast.success(`Add "${book.title}" to card successfully!!`);
    const result = cartBook.find((item) => item.id === book.id);
    if (result) {
      result.quantity += 1;
      setCartBook([...cartBook]);
      return;
    }
    const newItem = {
      ...book,
      quantity: 1,
    };
    setCartBook([...cartBook, newItem]);
  };

  const handleChangeQuantity = (id, e) => {
    const checkBook = cartBook.find((i) => i.id === id);
    if (e === "-" && checkBook.quantity > 1) {
      checkBook.quantity -= 1;
      setCartBook([...cartBook]);
      return;
    }
    if (e === "+") {
      checkBook.quantity += 1;
      setCartBook([...cartBook]);
    }
  };

  const handleHide = () => {
    hide ? setHide(false) : setHide(true);
  };
  const data = {
    hide,
    setHide,
    handleHide,
    handleAddToCard,
    setBook,
    book,
    setSearchData,
    searchData,
  };
  return (
    <>
      <AppContext.Provider value={data}>
        <Cart
          data={cartBook}
          setCartBook={setCartBook}
          total={totalCost}
          setTotalCost={setTotalCost}
          handleChangeQuantity={handleChangeQuantity}
        />
        {children}
      </AppContext.Provider>
    </>
  );
};

export { AppContext, ContextWrap };
