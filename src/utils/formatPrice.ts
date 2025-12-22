import { LOCALE } from "@/shared/constants";

export const formatPrice = (price: number): string => {
    return `${price.toLocaleString(LOCALE)}₽`;
};
