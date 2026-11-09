import { useState } from "react";

const MAX_QTY_PER_ITEM = 20;

export function useCart() {
  const [items, setItems] = useState([]);

  function add(product) {
    setItems((old) => {
      const existing = old.find((i) => i.id === product.id);
      if (!existing) return [...old, { ...product, quantity: 1 }];
      return old.map((i) =>
        i.id === product.id
          ? {
              ...i,
              quantity: Math.min(MAX_QTY_PER_ITEM, product.stock_quantity, i.quantity + 1),
            }
          : i
      );
    });
  }

  function changeQty(id, delta) {
    setItems((old) =>
      old.map((i) =>
        i.id === id
          ? {
              ...i,
              quantity: Math.max(
                1,
                Math.min(MAX_QTY_PER_ITEM, i.stock_quantity, i.quantity + delta)
              ),
            }
          : i
      )
    );
  }

  function remove(id) {
    setItems((old) => old.filter((i) => i.id !== id));
  }

  function clear() {
    setItems([]);
  }

  const count = items.reduce((n, i) => n + i.quantity, 0);
  const total = items.reduce((n, i) => n + i.price_syp * i.quantity, 0);

  return { items, add, changeQty, remove, clear, count, total };
}
