import { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);
  const [checkoutMessage, setCheckoutMessage] = useState(null);

  const totalPrice = cartCtx.items
    .reduce((sum, item) => sum + Number(item.price) * (item.quantity ?? 1), 0)
    .toFixed(2);

  const handleCheckout = () => {
    setCheckoutMessage("Order placed!");
    cartCtx.clearCart();
    onClose();
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {checkoutMessage ? <p>{checkoutMessage}</p> : null}

      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id} className="cart-item">
            <p>
              {item.name} x {item.quantity ?? 1}
            </p>
          </li>
        ))}
      </ul>

      <p className="cart-total">Total: €{totalPrice}</p>

      <div className="modal-actions">
        <Button textOnly onClick={onClose}>
          Close
        </Button>
        <Button onClick={handleCheckout}>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
