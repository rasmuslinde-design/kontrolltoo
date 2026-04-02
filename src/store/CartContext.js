import { createContext, useMemo, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
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

    return state;
  };

  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
  };

  const value = useMemo(
    () => ({ items: cartState.items, addItem }),
    [cartState.items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
