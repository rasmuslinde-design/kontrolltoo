import { createContext, useMemo, useState } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const value = useMemo(() => ({ items, addItem }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
