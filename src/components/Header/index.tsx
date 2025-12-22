import styles from "./index.module.scss";
import ButtonCart from "../ui/ButtonCart";

export default function Header() {
    return (
        <header className={styles["header"]}>
            <div className={styles["header_wrapper"]}>
                <ButtonCart />
            </div>
        </header>
    );
}
