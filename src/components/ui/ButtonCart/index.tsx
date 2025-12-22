import { useState, useMemo } from "react";
import styles from "./index.module.scss";
import Button from "../Button";
import { ShoppingCart } from "lucide-react";
import CartModal from "../../modals/CartModal";
import { getCartItemsCount } from "@/utils/cartUtils";
import { MAX_CART_COUNTER } from "@/shared/constants";
import { useCart } from "@/hooks/useCart";

export default function ButtonCart() {
    const { cart } = useCart();
    const cartCount = useMemo(() => getCartItemsCount(cart), [cart]);
    const [modal, setModal] = useState<boolean>(false);

    const toggleModal = () => {
        setModal((prev) => !prev);
    };

    return (
        <>
            {modal && <CartModal onClose={toggleModal} />}
            <div className={styles["cart"]}>
                <Button btnType="img" onClick={toggleModal}>
                    <ShoppingCart />
                </Button>
                {!!cartCount && <div className={styles["counter"]}>{cartCount > MAX_CART_COUNTER ? `+${MAX_CART_COUNTER}` : cartCount}</div>}
            </div>
        </>
    );
}
