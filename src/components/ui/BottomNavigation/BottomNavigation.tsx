import style from './BottomNavigation.module.css';
import { AppTheme } from '../../../models/AppTheme';

interface BottomNavigationProps {
    selectedKey?: string | number | null;
    items: Array<{
        icon: React.ReactElement;
        label: string;
        key: string;
        disabled?: boolean;
    }>,
    appTheme?: AppTheme;
    onItemClick?: (key: string) => void;
}

export default function BottomNavigation({ items, selectedKey, appTheme = 'standard', onItemClick }: BottomNavigationProps) {
    return (
        <div
            className={`${style.container} ${style[appTheme]}`}
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${items.length}, 1fr)`,
            }}
        >
            {items.map((item, index) => (
                <div key={index} className={`
                    ${style.item}
                    ${item.disabled ? style.disabled : ''}
                    ${item.key === selectedKey ? style.isSelected : ''}
                    `.trim()}
                    onClick={() => {
                        if (!item.disabled && typeof item.key === 'string' && typeof onItemClick === 'function') {
                            onItemClick(item.key);
                        }
                    }}
                >
                    <span className={style.icon}>{item.icon}</span>
                    <span className={item.key === selectedKey ? style.isLabelSelected : ''}>{item.label}</span>
                </div>
            ))}
        </div>
    );
}