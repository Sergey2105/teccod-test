import type { SelectedService, Service } from "@/shared/types";
import { createContext } from "react";

export interface CartContextType {
    cart: SelectedService[];
    add: (item: Service) => void;
    remove: (id: string) => void;
    total: number;
    itemsCount: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
