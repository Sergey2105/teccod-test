import { useCallback, useMemo } from "react";
import type { ReactNode } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { CART_STORAGE_KEY } from "@/shared/constants";
import type { Service, SelectedService } from "@/shared/types";
import { CartContext } from "./CartContext";
import { addToCart, calculateTotal, decrementQuantity, getCartItemsCount, incrementQuantity, removeFromCart } from "@/utils/cartUtils";

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useLocalStorage<SelectedService[]>(CART_STORAGE_KEY, []);

    const add = useCallback(
        (item: Service) => {
            setCart((prev) => addToCart(prev, item));
        },
        [setCart],
    );

    const remove = useCallback(
        (id: string) => {
            setCart((prev) => removeFromCart(prev, id));
        },
        [setCart],
    );

    const increment = useCallback(
        (id: string) => {
            setCart((prev) => incrementQuantity(prev, id));
        },
        [setCart],
    );

    const decrement = useCallback(
        (id: string) => {
            setCart((prev) => decrementQuantity(prev, id));
        },
        [setCart],
    );

    const value = useMemo(
        () => ({
            cart,
            add,
            remove,
            total: calculateTotal(cart),
            itemsCount: getCartItemsCount(cart),
            increment,
            decrement,
        }),
        [cart, add, remove, increment, decrement],
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
