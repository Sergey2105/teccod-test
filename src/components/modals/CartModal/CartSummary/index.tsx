import Button from "@/components/ui/Button";
import styles from "./index.module.scss";
import type { SelectedService } from "@/shared/types";
import { formatPrice } from "@/utils/formatPrice";
import { memo } from "react";

interface CartSummaryProps {
    cart: SelectedService[];
    total: number;
}

function CartSummary(props: CartSummaryProps) {
    const { cart, total } = props;

    return (
        <div className={styles["footer"]}>
            <div className={styles["footer_info"]}>
                <span className={styles["footer_total"]}>Всего:</span>
                <span className={styles["footer_amount"]}> {formatPrice(total)}</span>
            </div>
            <Button btnType="default" onClick={() => null} disabled={cart.length === 0}>
                Оформить заказ
            </Button>
        </div>
    );
}
export default memo(CartSummary);
