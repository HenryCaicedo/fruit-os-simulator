import React from 'react';
import styles from './StatusBar.module.css';


export default function StatusBarBackground({color }: {color?: string}) {
    return (
        <div className={styles.statusBarHeight} style={{ backgroundColor: color }}></div>
    );
}