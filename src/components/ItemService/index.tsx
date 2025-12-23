import { memo } from "react";
import styles from "./index.module.scss";
import { Plus } from "lucide-react";
import { formatPrice } from "@/utils/formatPrice";
import Button from "../ui/Button";

interface ItemServiceProps {
    name: string;
    price: number;
    addToCart: () => void;
}

function ItemService(props: ItemServiceProps) {
    const { name, price, addToCart } = props;
    return (
        <div className={styles["item"]}>
            <div>
                <span className={styles["item_title"]}>{name}</span>
            </div>
            <div className={styles["item_footer"]}>
                <span className={styles["item_price"]}>{formatPrice(price)}</span>
                <div className={styles["item_btn"]}>
                    <Button onClick={addToCart}>
                        <Plus size={18} />
                        Добавить
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default memo(ItemService);
