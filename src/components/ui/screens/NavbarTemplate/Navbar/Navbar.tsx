import React, { ReactNode } from 'react';
import styles from './Navbar.module.css';
import { AppTheme } from '../../../../../models/AppTheme';

export interface NavbarButtonModel {
    label: string;
    icon?: ReactNode;
}

interface NavbarProps {
    children?: ReactNode;
    appTheme?: AppTheme;
    leftButton?: NavbarButtonModel;
    rightButton?: NavbarButtonModel;
    onButtonClick?: (label: string) => void;
}

export default function Navbar({ children, appTheme = 'standard', leftButton, rightButton, onButtonClick }: NavbarProps) {

    return (
        <div className={`${styles.navbarBg} ${styles[appTheme]}`}>
            <div className={styles.leftButton}>
                {leftButton && (
                    <button className={styles.navBarbutton} onClick={() => onButtonClick?.(leftButton.label)}>
                        {leftButton.icon || leftButton.label}
                    </button>
                )}
            </div>
            <h1>
                {children}
            </h1>
            <div className={styles.rightButton}>
                {rightButton && (
                    <button className={styles.navBarbutton} onClick={() => onButtonClick?.(rightButton.label)}>
                        {rightButton.icon || rightButton.label}
                    </button>
                )}
            </div>
        </div>
    );
}