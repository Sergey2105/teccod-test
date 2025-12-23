import { memo } from "react";
import styles from "./index.module.scss";
import { Minus, Plus, Trash } from "lucide-react";
import Button from "../ui/Button";
import { formatPrice } from "@/utils/formatPrice";
import clsx from "clsx";

interface ItemCartProps {
    name: string;
    price: number;
    quantity: number;
    onDeleteItem: () => void;
    onIncrement: () => void;
    onDecrement: () => void;
}

function ItemCart(props: ItemCartProps) {
    const { name, price, quantity, onDeleteItem, onIncrement, onDecrement } = props;
    return (
        <div className={styles["item"]}>
            <div className={styles["item_header"]}>
                <span className={styles["item_title"]}>{name}</span>
                <div className={styles["controller"]}>
                    <span className={styles["item_price"]}>{formatPrice(price)}</span>
                    <span className={styles["item_price"]}>×</span>
                    <div className={styles["counter"]}>
                        <div>
                            <Button onClick={onDecrement} btnType="img">
                                <Minus size={18} />
                            </Button>
                        </div>
                        <span className={clsx(styles["item_price"], styles["count"])}>{quantity}</span>
                        <div>
                            <Button onClick={onIncrement} btnType="img">
                                <Plus size={18} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["item_footer"]}>
                <span className={styles["item_total"]}>{formatPrice(price * quantity)}</span>
                <div className={styles["item_btn"]}>
                    <Button onClick={onDeleteItem} btnType="img">
                        <Trash size={20} />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default memo(ItemCart);
