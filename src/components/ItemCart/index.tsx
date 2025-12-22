import { memo } from "react";
import styles from "./index.module.scss";
import { Trash } from "lucide-react";
import Button from "../ui/Button";
import { formatPrice } from "@/utils/formatPrice";

interface ItemCartProps {
    name: string;
    price: number;
    quantity: number;
    deleteFromCart: () => void;
}

function ItemCart(props: ItemCartProps) {
    const { name, price, quantity, deleteFromCart } = props;
    return (
        <div className={styles["item"]}>
            <div className={styles["item_header"]}>
                <span className={styles["item_title"]}>{name}</span>
                <span className={styles["item_price"]}>
                    {formatPrice(price)} × {quantity}
                </span>
            </div>
            <div className={styles["item_footer"]}>
                <span className={styles["item_total"]}>{formatPrice(price * quantity)}</span>
                <div className={styles["item_btn"]}>
                    <Button onClick={deleteFromCart} btnType="img">
                        <Trash size={18} />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default memo(ItemCart);
