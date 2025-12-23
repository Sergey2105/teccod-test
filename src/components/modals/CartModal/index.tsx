import { useCart } from "@/hooks/useCart";
import ModalBase from "@/components/ModalBase";
import CartSummary from "./CartSummary";
import CartItemsList from "./CartItemsList";

interface CartModalProps {
    onClose: () => void;
}

export default function CartModal(props: CartModalProps) {
    const { onClose } = props;
    const { cart, total, remove, increment, decrement } = useCart();

    return (
        <ModalBase title="Корзина" onCloseModal={onClose} size="large" footer={<CartSummary cart={cart} total={total} />}>
            <CartItemsList cart={cart} onDeleteItem={remove} onIncrement={increment} onDecrement={decrement} />
        </ModalBase>
    );
}
