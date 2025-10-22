import { useState, useContext, useImperativeHandle } from 'react';
import styles from './KeypadTab.module.css';
import { PhoneIcon, DeleteIcon, AddContactIcon } from './assets/keypadIcons';
import { OutletRefContext } from '../../PhoneContext';

export default function KeypadTab() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [rawNumber, setRawNumber] = useState('');
    const outletRef = useContext(OutletRefContext);

    useImperativeHandle(outletRef, () => ({
        onNavbarButtonClick: (buttonTitle: string) => {
            console.log(`KeypadTab received navbar button click: ${buttonTitle}`);
            // - If buttonTitle is "Add", open add contact dialog
            // - If buttonTitle is "Clear", clear the phone number
            // Example:
            if (buttonTitle === "Clear") {
                setPhoneNumber('');
                setRawNumber('');
            }
        },
        // You can expose other methods here as needed
        clearNumber: () => {
            setPhoneNumber('');
            setRawNumber('');
        },
        getPhoneNumber: () => phoneNumber
    }));




    const formatPhoneNumber = (value: string) => {
        // Remove all non-digit characters
        const digits = value.replace(/\D/g, '');
        
        // Apply formatting based on length
        if (digits.length === 0) return '';
        if (digits.length <= 3) return digits;
        if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    };

    const handleDigitPress = (digit: string) => {
        if (rawNumber.length < 10) {
            const newRawNumber = rawNumber + digit;
            setRawNumber(newRawNumber);
            setPhoneNumber(formatPhoneNumber(newRawNumber));
        }
    };

    const handleDelete = () => {
        if (rawNumber.length > 0) {
            const newRawNumber = rawNumber.slice(0, -1);
            setRawNumber(newRawNumber);
            setPhoneNumber(formatPhoneNumber(newRawNumber));
        }
    };

    const handleSpecialChar = (char: string) => {
        // Allow special characters without formatting
        const newNumber = phoneNumber + char;
        setPhoneNumber(newNumber);
        setRawNumber(rawNumber + char);
    };

    // Calculate font size based on phone number length
    const getFontSize = () => {
        const length = phoneNumber.length;
        if (length <= 9) return '3.2rem';
        if (length <= 14) return '2.4rem';
        return '2rem';
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.display}>
                <span style={{ fontSize: getFontSize() }}>{phoneNumber}</span>
            </div>
            <div className={styles.container} role="group" aria-label="Phone keypad">
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 1" onClick={() => handleDigitPress('1')}>
                    <h1>1</h1>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 2, ABC" onClick={() => handleDigitPress('2')}>
                    <h1>2</h1>
                    <span>ABC</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 3, DEF" onClick={() => handleDigitPress('3')}>
                    <h1>3</h1>
                    <span>DEF</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 4, GHI" onClick={() => handleDigitPress('4')}>
                    <h1>4</h1>
                    <span>GHI</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 5, JKL" onClick={() => handleDigitPress('5')}>
                    <h1>5</h1>
                    <span>JKL</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 6, MNO" onClick={() => handleDigitPress('6')}>
                    <h1>6</h1>
                    <span>MNO</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 7, PQRS" onClick={() => handleDigitPress('7')}>
                    <h1>7</h1>
                    <span>PQRS</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 8, TUV" onClick={() => handleDigitPress('8')}>
                    <h1>8</h1>
                    <span>TUV</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 9, WXYZ" onClick={() => handleDigitPress('9')}>
                    <h1>9</h1>
                    <span>WXYZ</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Star" onClick={() => handleSpecialChar('*')}>
                    <h1>*</h1>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Digit 0, plus" onClick={() => handleDigitPress('0')}>
                    <h1>0</h1>
                    <span>+</span>
                </button>
                <button type="button" className={styles.buttonWrapper} aria-label="Pound" onClick={() => handleSpecialChar('#')}>
                    <h1>#</h1>
                </button>
                <div className={`${styles.actions} ${styles.buttonWrapper}`}>
                    <button type="button" aria-label="Add contact" disabled={!phoneNumber}>
                        <AddContactIcon />
                    </button>
                    <button type="button" aria-label="Call" className={`${styles.callButton} ${styles.phoneIcon}`} disabled={!phoneNumber}>
                        <PhoneIcon />
                        <h1>
                            Call
                        </h1>
                    </button>
                    <button type="button" aria-label="Backspace" onClick={handleDelete} disabled={!phoneNumber}>
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}