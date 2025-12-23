import type { SelectedService, Service } from "@/shared/types";
import { createContext } from "react";

export interface ICartContext {
    cart: SelectedService[];
    add: (item: Service) => void;
    remove: (id: string) => void;
    increment: (id: string) => void;
    decrement: (id: string) => void;
    total: number;
    itemsCount: number;
}

export const CartContext = createContext<ICartContext | undefined>(undefined);
