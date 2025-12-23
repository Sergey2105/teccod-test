import { useState } from "react";
import styles from "./index.module.scss";
import Button from "../Button";
import { ShoppingCart } from "lucide-react";
import CartModal from "../../modals/CartModal";
import { MAX_CART_COUNTER } from "@/shared/constants";
import { useCart } from "@/hooks/useCart";

export default function ButtonCart() {
    const { itemsCount } = useCart();
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
                {!!itemsCount && <div className={styles["counter"]}>{itemsCount > MAX_CART_COUNTER ? `${MAX_CART_COUNTER}+` : itemsCount}</div>}
            </div>
        </>
    );
}
