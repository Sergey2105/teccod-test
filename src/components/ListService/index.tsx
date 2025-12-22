import clsx from "clsx";
import { SERVICE_MOCK } from "@/mocks/services.mock";
import ItemService from "../ItemService";
import styles from "./index.module.scss";
import { useCart } from "@/hooks/useCart";

interface ListServicesProps {
    className?: string;
}

export default function ListService(props: ListServicesProps) {
    const { className } = props;
    const { add } = useCart();

    return (
        <div className={clsx(styles["list"], className)}>
            {SERVICE_MOCK.map((el) => (
                <ItemService key={el.id} name={el.name} price={el.price} addToCart={() => add(el)} />
            ))}
        </div>
    );
}
