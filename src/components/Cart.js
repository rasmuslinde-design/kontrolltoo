import { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);
  const [checkoutMessage, setCheckoutMessage] = useState(null);

  const formatter = new Intl.NumberFormat("et-EE", {
    style: "currency",
    currency: "EUR",
  });

  const totalPrice = cartCtx.items
    .reduce((sum, item) => sum + Number(item.price) * (item.quantity ?? 1), 0)
    .toFixed(2);

  const handleCheckout = () => {
    window.alert(
      "Order confirmed! It will be delivered to you in the next 15 minutes.",
    );
    setCheckoutMessage("Order placed!");
    cartCtx.clearCart();
    onClose();
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {checkoutMessage ? <p>{checkoutMessage}</p> : null}

      {cartCtx.items.length === 0 ? (
        <p>Cart empty</p>
      ) : (
        <>
          <ul>
            {cartCtx.items.map((item) => (
              <li key={item.id} className="cart-item">
                <p>
                  {item.name} x {item.quantity ?? 1} (
                  {formatter.format(Number(item.price))})
                </p>
                <div className="cart-item-actions">
                  <button onClick={() => cartCtx.decreaseItem(item.id)}>
                    -
                  </button>
                  <button onClick={() => cartCtx.increaseItem(item.id)}>
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p className="cart-total">
            Total: {formatter.format(Number(totalPrice))}
          </p>
        </>
      )}

      <div className="modal-actions">
        <Button textOnly onClick={onClose}>
          Close
        </Button>
        {cartCtx.items.length > 0 ? (
          <Button onClick={handleCheckout}>Checkout</Button>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
