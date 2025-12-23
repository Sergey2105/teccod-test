import ListService from "@/components/ListService";
import styles from "./index.module.scss";

export default function Home() {
    return (
        <div className={styles["wrapper"]}>
            <ListService className={styles["list"]} />
        </div>
    );
}
