import styles from './SearchBar.module.css';
import { Search } from 'lucide-react';
import { AppTheme } from '../../../models/AppTheme';

interface SearchBarProps {
    appTheme?: AppTheme;
    value: string;
    onChange: (newValue: string) => void;
    placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search", appTheme = 'standard' }: SearchBarProps) {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className={`${styles.container} ${styles[appTheme]}`}>
            <div className={styles.textfield}>
                <Search className={styles.icon} />
                <input className={styles.input} type="text" placeholder={placeholder} value={value} onChange={handleInputChange} />
            </div>
        </div>
    );
}
