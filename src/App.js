import React, { useContext, useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import Modal from "./components/UI/Modal";
import Cart from "./components/Cart";
import CartContext from "./store/CartContext";

const AppContent = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const cartCtx = useContext(CartContext);

  const openCart = () => setCartIsOpen(true);
  const closeCart = () => setCartIsOpen(false);

  const shouldOpenCart = cartIsOpen;

  return (
    <>
      <Modal open={shouldOpenCart} onClose={closeCart}>
        <Cart onClose={closeCart} />
      </Modal>

      <Header onOpenCart={openCart} />
      <Meals />
    </>
  );
};

const App = () => {
  return (
    <CartContextProvider>
      <AppContent />
    </CartContextProvider>
  );
};

export default App;
