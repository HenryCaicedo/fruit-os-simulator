import React from 'react';
import style from './Dock.module.css'

export default function Dock({children}: {children?: React.ReactNode}) {
    return (
        <div className={style.dock}>
            {children}
        </div>
    );
}