import { useMemo } from "react";
import type { ReactNode } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { CART_STORAGE_KEY } from "@/shared/constants";
import type { Service, SelectedService } from "@/shared/types";
import { CartContext } from "./CartContext";
import { addToCart, calculateTotal, getCartItemsCount, removeFromCart } from "@/utils/cartUtils";

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useLocalStorage<SelectedService[]>(CART_STORAGE_KEY, []);

    const add = (item: Service) => {
        setCart((prev) => addToCart(prev, item));
    };

    const remove = (id: string) => {
        setCart((prev) => removeFromCart(prev, id));
    };

    const value = useMemo(
        () => ({
            cart,
            add,
            remove,
            total: calculateTotal(cart),
            itemsCount: getCartItemsCount(cart),
        }),
        [cart],
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
