import styles from "./index.module.scss";
import ItemCart from "../../../ItemCart";
import type { SelectedService } from "@/shared/types";

interface CartItemsListProps {
    cart: SelectedService[];
    onDeleteItem: (itemId: string) => void;
}

export default function CartItemsList(props: CartItemsListProps) {
    const { cart, onDeleteItem } = props;
    if (cart.length === 0) {
        return <p className={styles["message"]}>Услуги не выбраны</p>;
    }

    return (
        <div className={styles["list"]}>
            {cart.map((item) => (
                <ItemCart key={item.id} name={item.name} price={item.price} quantity={item.quantity} deleteFromCart={() => onDeleteItem(item.id)} />
            ))}
        </div>
    );
}
