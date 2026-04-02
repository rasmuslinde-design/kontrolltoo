import { createContext, useMemo, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  increaseItem: () => {},
  decreaseItem: () => {},
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

    if (action.type === "INCREASE_ITEM") {
      const updatedItems = state.items.map((item) =>
        item.id === action.id
          ? { ...item, quantity: (item.quantity ?? 1) + 1 }
          : item,
      );
      return { ...state, items: updatedItems };
    }

    if (action.type === "DECREASE_ITEM") {
      const updatedItems = state.items
        .map((item) => {
          if (item.id !== action.id) return item;
          const nextQty = (item.quantity ?? 1) - 1;
          return { ...item, quantity: nextQty };
        })
        .filter((item) => (item.quantity ?? 0) > 0);

      return { ...state, items: updatedItems };
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

  const increaseItem = (id) => {
    dispatch({ type: "INCREASE_ITEM", id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE_ITEM", id });
  };

  const value = useMemo(
    () => ({
      items: cartState.items,
      addItem,
      increaseItem,
      decreaseItem,
      clearCart,
    }),
    [cartState.items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
