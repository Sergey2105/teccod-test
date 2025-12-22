import styles from "./index.module.scss";
import React, { useEffect } from "react";
import { clsx } from "clsx";
import { X } from "lucide-react";

export interface modal {
    children: React.ReactNode;
    footer?: React.ReactNode;
    title?: string;
    onCloseModal?: () => void;
    size?: "default" | "small" | "large";
    zIndex?: string;
}

const ModalBase = (props: modal) => {
    const { children, title, onCloseModal, footer, size = "default", zIndex = "50" } = props;

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    let footerLength = 0;

    if (React.isValidElement(footer)) {
        const element = footer as React.ReactElement<{ children?: React.ReactNode }>;
        footerLength = React.Children.count(element.props.children);
    }

    return (
        <div className={styles.modal} onClick={onCloseModal} style={{ zIndex: zIndex }}>
            <div className={clsx(styles.modal__window, styles[`modal__window--${size}`])} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modal__header}>
                    <div className={styles.modal__title}>{title}</div>
                    <div className={styles.modal__close} onClick={onCloseModal}>
                        <X />
                    </div>
                </div>
                <div className={clsx(styles.modal__body, styles[`modal__body--${size}`])}>{children}</div>
                <div className={clsx(styles.modal__footer, styles[`modal__footer--${size}`])} style={{ gridTemplateColumns: `repeat(${footerLength}, 1fr)` }}>
                    {footer}
                </div>
            </div>
        </div>
    );
};
export default ModalBase;
