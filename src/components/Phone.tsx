import style from './Phone.module.css';
import { Square } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Phone({ children }: { children: React.ReactNode }) {
    return (
        <div className={style.phone}>
            <div className={`${style.top} ${style.radius} ${style.height}`}>
                Top
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