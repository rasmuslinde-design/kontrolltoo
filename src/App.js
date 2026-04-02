import React from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import Modal from "./components/UI/Modal";
import { useState } from "react";

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCart = () => setCartIsOpen(true);
  const closeCart = () => setCartIsOpen(false);

  return (
    <CartContextProvider>
      <Modal open={cartIsOpen}>
        <div className="modal-actions">
          <button className="text-button" onClick={closeCart}>
            Close
          </button>
        </div>
      </Modal>

      <Header onOpenCart={openCart} />
      <Meals />
    </CartContextProvider>
  );
};

export default App;
