import ListServices from "../../ListService";
import styles from "./index.module.scss";

export default function Home() {
    return (
        <div className={styles["wrapper"]}>
            <ListServices className={styles["list"]} />
        </div>
    );
}
