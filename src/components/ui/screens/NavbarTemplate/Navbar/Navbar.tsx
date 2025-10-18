import styles from './Navbar.module.css';
import { AppTheme } from '../../../../../models/AppTheme';

interface NavbarProps {
    children: string,
    appTheme?: AppTheme;
}

export default function Navbar({ children, appTheme = 'standard' }: NavbarProps) {
    return (
        <div className={`${styles.navbarBg} ${styles[appTheme]}`}>
            <h1>
                {children}
            </h1>
        </div>
    );
}