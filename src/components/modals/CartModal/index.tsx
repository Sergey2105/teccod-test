import ModalBase from "../../ModalBase";
import CartSummary from "./CartSummary";
import CartItemsList from "./CartItemsList";
import { useCart } from "@/hooks/useCart";

interface CartModalProps {
    onClose: () => void;
}

export default function CartModal(props: CartModalProps) {
    const { onClose } = props;
    const { cart, remove } = useCart();

    return (
        <ModalBase title="Корзина" onCloseModal={onClose} size="large" footer={<CartSummary cart={cart} />}>
            <CartItemsList cart={cart} onDeleteItem={remove} />
        </ModalBase>
    );
}
