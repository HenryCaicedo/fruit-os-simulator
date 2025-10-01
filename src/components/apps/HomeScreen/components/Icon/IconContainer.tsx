import React, { useMemo } from "react";
import styles from './IconContainer.module.css'
import { X } from "lucide-react";

interface IconContainerProps {
    label: string,
    children: React.ReactNode
    editMode?: boolean
}

export default function IconContainer({ label, children, editMode = false }: IconContainerProps) {
    // Generate random animation properties once per component instance
    const animationStyle = useMemo(() => {
        if (!editMode) return {};

        const delay = Math.random() * 0.1; // 0s to 0.1s delay

        return {
            '--animation-delay': `${delay}s`,
        } as React.CSSProperties;
    }, [editMode]);

    return (
        <div
            className={`${styles.iconContainer} ${editMode ? styles.editAnimation : ''}`}
            style={animationStyle}
        >
            {editMode &&
                <div className={styles.uninstallButton}>
                    <X className={styles.uninstallIcon} />
                </div>
            }
            <div className={styles.iconWrapper}>
                <div className={styles.hoverLayer}></div>
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