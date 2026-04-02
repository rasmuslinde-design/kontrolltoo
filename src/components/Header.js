import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const totalItems = cartCtx.items.reduce(
    (sum, item) => sum + (item.quantity ?? 1),
    0,
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>React Food Order App</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
