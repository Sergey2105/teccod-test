import ListService from "@/components/ListService";
import styles from "./index.module.scss";
import PageTitle from "@/components/PageTitle";

export default function Home() {
    return (
        <>
            <PageTitle title="Главная страница" />
            <div className={styles["wrapper"]}>
                <ListService className={styles["list"]} />
            </div>
        </>
    );
}
