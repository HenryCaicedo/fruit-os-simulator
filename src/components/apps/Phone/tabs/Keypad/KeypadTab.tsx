import styles from './KeypadTab.module.css';
import StatusBarBackground from '../../../../ui/StatusBar/StatusBarBackground';

export default function KeypadTab() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.display}>
                <span></span>
            </div>
            <div className={styles.container} role="group" aria-label="Phone keypad">
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 1">
                    <h1>1</h1>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 2, ABC">
                    <h1>2</h1>
                    <span>ABC</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 3, DEF">
                    <h1>3</h1>
                    <span>DEF</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 4, GHI">
                    <h1>4</h1>
                    <span>GHI</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 5, JKL">
                    <h1>5</h1>
                    <span>JKL</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 6, MNO">
                    <h1>6</h1>
                    <span>MNO</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 7, PQRS">
                    <h1>7</h1>
                    <span>PQRS</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 8, TUV">
                    <h1>8</h1>
                    <span>TUV</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 9, WXYZ">
                    <h1>9</h1>
                    <span>WXYZ</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Star">
                    <h1>*</h1>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 0, plus">
                    <h1>0</h1>
                    <span>+</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Pound">
                    <h1>#</h1>
                </button>
                <div className={`${styles.actions} ${styles.buttonWrapper}`}>
                    <button type="button" aria-label="Add contact">
                        ➕
                    </button>
                    <button type="button" aria-label="Call" className={styles.callButton}> 
                        <h1>
                            Call
                        </h1>
                    </button>
                    <button type="button" aria-label="Backspace">
                        ⬅️
                    </button>
                </div>
            </div>
        </div>
    );
}