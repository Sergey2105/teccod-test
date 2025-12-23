import type { SelectedService, Service } from "@/shared/types";

export const addToCart = (cart: SelectedService[], item: Service): SelectedService[] => {
    const inCart = cart.find((el) => el.id === item.id);
    if (inCart) {
        return cart.map((el) => (el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el));
    }
    return [...cart, { ...item, quantity: 1 }];
};

export const removeFromCart = (cart: SelectedService[], itemId: string): SelectedService[] => {
    return cart.filter((el) => el.id !== itemId);
};

export const calculateTotal = (cart: SelectedService[]): number => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

export const getCartItemsCount = (cart: SelectedService[]): number => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const incrementQuantity = (cart: SelectedService[], itemId: string): SelectedService[] => {
    return cart.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item));
};

export const decrementQuantity = (cart: SelectedService[], itemId: string): SelectedService[] => {
    return cart.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item)).filter((item) => item.quantity > 0);
};
