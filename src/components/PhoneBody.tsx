import style from './PhoneBody.module.css';
import { Square } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PhoneBody({ children }: { children: React.ReactNode }) {
    return (
        <div className={style.phone}>
            <div className={`${style.radius} ${style.height}`}>
            </div>

            <div className={style.middle}>
                {children}
            </div>

            <div className={`${style.bottom} ${style.radius} ${style.height}`}>
                <Link to="/">
                    <div className={style.homeButton}>
                        <Square size={32} color='white' className={style.icon} />
                    </div>
                </Link>
            </div>

        </div >
    );
}