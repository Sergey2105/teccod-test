import ItemCart from "@/components/ItemCart";
import styles from "./index.module.scss";
import type { SelectedService } from "@/shared/types";
import { memo } from "react";

interface CartItemsListProps {
    cart: SelectedService[];
    onDeleteItem: (itemId: string) => void;
    onIncrement: (itemId: string) => void;
    onDecrement: (itemId: string) => void;
}

function CartItemsList(props: CartItemsListProps) {
    const { cart, onDeleteItem, onIncrement, onDecrement } = props;

    if (cart.length === 0) {
        return <p className={styles["message"]}>Услуги не выбраны</p>;
    }

    return (
        <div className={styles["list"]}>
            {cart.map((item) => (
                <ItemCart
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    onDeleteItem={() => onDeleteItem(item.id)}
                    onIncrement={() => onIncrement(item.id)}
                    onDecrement={() => onDecrement(item.id)}
                />
            ))}
        </div>
    );
}
export default memo(CartItemsList);
