import { useMemo } from "react";
import styles from "./index.module.scss";
import Button from "../../../ui/Button";
import type { SelectedService } from "@/shared/types";
import { calculateTotal } from "@/utils/cartUtils";
import { formatPrice } from "@/utils/formatPrice";

interface CartSummaryProps {
    cart: SelectedService[];
}

export default function CartSummary(props: CartSummaryProps) {
    const { cart } = props;
    const totalPrice = useMemo(() => calculateTotal(cart), [cart]);

    return (
        <div className={styles["footer"]}>
            <div className={styles["footer_info"]}>
                <span className={styles["footer_total"]}>Всего:</span>
                <span className={styles["footer_amount"]}> {formatPrice(totalPrice)}</span>
            </div>
            <Button btnType="default" onClick={() => null} disabled={cart.length === 0}>
                Оформить заказ
            </Button>
        </div>
    );
}
