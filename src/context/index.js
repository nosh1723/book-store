import { createContext, useEffect, useState, useRef } from "react";

const AppContext = createContext();

const ContextWrap = ({ children }) => {
  const [hide, setHide] = useState(true);
  const handleHide = () => {
    hide ? setHide(false) : setHide(true);
  };
  const data = { hide, setHide, handleHide };
  return (
    <>
      <AppContext.Provider value={data}>{children}</AppContext.Provider>
    </>
  );
};

export { AppContext, ContextWrap };
