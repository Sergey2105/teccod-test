import { CartContext } from "@/provider/cart/CartContext";
import { useContext } from "react";

export function useCart() {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error("error");
    }

    return context;
}
