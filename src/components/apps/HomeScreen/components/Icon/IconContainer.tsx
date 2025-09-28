import React from "react";
import styles from './IconContainer.module.css'


interface IconContainerProps {
    label: string,
    children: React.ReactNode
}

export default function IconContainer({ label, children }: IconContainerProps) {
    return (
        <div className={styles.iconContainer}>
            <div className={styles.iconWrapper}>
                <div className={styles.hoverLayer}>
                    
                </div>
                <div className={styles.icon}>
                    {children}
                </div>
            </div>
            <span className={styles.iconLabel}>
                {label}
            </span>
        </div>

    );
}
