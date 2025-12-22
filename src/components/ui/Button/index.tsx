import clsx from "clsx";
import styles from "./index.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    btnType?: "img" | "default" | "white" | "img-transparent";
    style?: React.CSSProperties;
}

const Button = (props: ButtonProps) => {
    const { onClick, children, disabled, icon, btnType = "default", style, ...rest } = props;
    return (
        <button className={clsx(styles["btn"], styles[`btn_${btnType}`])} onClick={onClick} disabled={disabled} style={style} {...rest}>
            {icon && <span className={styles["btn__icon"]}>{icon}</span>}
            <span className={styles["btn__text"]}>{children}</span>
        </button>
    );
};

export default Button;
