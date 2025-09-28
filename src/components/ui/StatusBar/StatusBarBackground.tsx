import React from 'react';
import './StatusBar.css';


export default function StatusBarBackground({color }: {color?: string}) {
    return (
        <div className="status-bar-height" style={{ backgroundColor: color }}></div>
    );
}