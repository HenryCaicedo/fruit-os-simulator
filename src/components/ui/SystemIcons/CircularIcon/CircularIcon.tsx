
import styles from './CircularIcon.module.css';
import { ChevronRight, Minus } from 'lucide-react';

interface CircularIconProps {
    size?: number;
    color: {
        background: string;
        accent: string;
    }
    children?: React.ReactNode;
}

function CircularIcon({ size = 24, children, color }: CircularIconProps) {
    const borderSize = size * 0.12;
    return (
        <div className={styles.wrapper}
            style={{ 
                width: size, 
                height: size, 
                borderWidth: borderSize, 
                background: `linear-gradient(${color.background}, ${color.accent})`,
                '--accent-color': color.accent
            } as React.CSSProperties & { '--accent-color': string }}>
            {children}
        </div>
    )
}

export function ChevronRightIcon({ size = 24 }: { size?: number }) {
    const iconSize = size * 0.8;
    const color = {
        background: '#6299E5', 
        accent: '#206FDD'
    }

    return (
        <CircularIcon size={size} color={color}>
            <ChevronRight className={styles.icon} size={iconSize} strokeWidth={5} color="white" style={{ marginLeft: 2 }} />
        </CircularIcon>
    );
}

export function MinusIcon({ size = 24 }: { size?: number }) {
    const iconSize = size * 0.8;
    const color = {
        background: '#E56262', 
        accent: '#DD2020'
    }

    return (
        <CircularIcon size={size} color={color}>
            <Minus className={styles.icon} size={iconSize} strokeWidth={5} color="white" />
        </CircularIcon>
    );
}