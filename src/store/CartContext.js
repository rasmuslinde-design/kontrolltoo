import { createContext, useMemo, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  clearCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
      const item = action.item;
      const existingItemIndex = state.items.findIndex((i) => i.id === item.id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        const existingItem = updatedItems[existingItemIndex];

        updatedItems[existingItemIndex] = {
          ...existingItem,
          quantity: (existingItem.quantity ?? 1) + 1,
        };

        return { ...state, items: updatedItems };
      }

      return {
        ...state,
        items: [...state.items, { ...item, quantity: 1 }],
      };
    }

    if (action.type === "CLEAR_CART") {
      return { ...state, items: [] };
    }

    return state;
  };

  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const value = useMemo(
    () => ({ items: cartState.items, addItem, clearCart }),
    [cartState.items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
