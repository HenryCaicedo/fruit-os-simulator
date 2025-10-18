import { useState } from 'react';
import styles from './Calculator.module.css';
import StatusBarBackground from '../../ui/StatusBar/StatusBarBackground';

export default function Calculator() {
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState<number | null>(null);
    const [operation, setOperation] = useState<string | null>(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);
    const [memory, setMemory] = useState(0);

    const inputNumber = (num: string) => {
        if (waitingForOperand) {
            setDisplay(num);
            setWaitingForOperand(false);
        } else {
            setDisplay(display === '0' ? num : display + num);
        }
    };

    const inputDecimal = () => {
        if (waitingForOperand) {
            setDisplay('0.');
            setWaitingForOperand(false);
        } else if (display.indexOf('.') === -1) {
            setDisplay(display + '.');
        }
    };

    const calculate = (firstOperand: number, secondOperand: number, operation: string): number => {
        switch (operation) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case '×':
                return firstOperand * secondOperand;
            case '÷':
                return firstOperand / secondOperand;
            default:
                return secondOperand;
        }
    };

    const performOperation = (nextOperation: string) => {
        const inputValue = parseFloat(display);

        if (previousValue === null) {
            setPreviousValue(inputValue);
        } else if (operation) {
            const currentValue = previousValue || 0;
            const newValue = calculate(currentValue, inputValue, operation);
            
            setDisplay(String(newValue));
            setPreviousValue(newValue);
        }

        setWaitingForOperand(true);
        setOperation(nextOperation);
    };

    const performEquals = () => {
        if (operation && previousValue !== null) {
            const inputValue = parseFloat(display);
            const newValue = calculate(previousValue, inputValue, operation);
            
            setDisplay(String(newValue));
            setPreviousValue(null);
            setOperation(null);
            setWaitingForOperand(true);
        }
    };

    const clearDisplay = () => {
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(false);
    };

    const toggleSign = () => {
        const value = parseFloat(display);
        setDisplay(String(value * -1));
    };

    const memoryClear = () => {
        setMemory(0);
    };

    const memoryAdd = () => {
        setMemory(memory + parseFloat(display));
    };

    const memorySubtract = () => {
        setMemory(memory - parseFloat(display));
    };

    const memoryRecall = () => {
        setDisplay(String(memory));
        setWaitingForOperand(true);
    };

    return (
        <div className={styles.wrapper}>
            <StatusBarBackground></StatusBarBackground>
            <div className={styles.display}>
                <span>{display}</span>
            </div>

            <div className={styles.buttonsWrapper}>
                <button className={`${styles.button} ${styles.gray}`} onClick={memoryClear}>mc</button>
                <button className={`${styles.button} ${styles.gray}`} onClick={memoryAdd}>m+</button>
                <button className={`${styles.button} ${styles.gray}`} onClick={memorySubtract}>m-</button>
                <button className={`${styles.button} ${styles.gray}`} onClick={memoryRecall}>mr</button>
                <button className={`${styles.button} ${styles.brown}`} onClick={clearDisplay}>c</button>
                <button className={`${styles.button} ${styles.brown}`} onClick={toggleSign}>±</button>
                <button className={`${styles.button} ${styles.brown}`} onClick={() => performOperation('÷')}>÷</button>
                <button className={`${styles.button} ${styles.brown}`} onClick={() => performOperation('×')}>×</button>
                <button className={styles.button} onClick={() => inputNumber('7')}>7</button>
                <button className={styles.button} onClick={() => inputNumber('8')}>8</button>
                <button className={styles.button} onClick={() => inputNumber('9')}>9</button>
                <button className={`${styles.button} ${styles.brown}`} onClick={() => performOperation('-')}>-</button>
                <button className={styles.button} onClick={() => inputNumber('4')}>4</button>
                <button className={styles.button} onClick={() => inputNumber('5')}>5</button>
                <button className={styles.button} onClick={() => inputNumber('6')}>6</button>
                <button className={`${styles.button} ${styles.brown}`} onClick={() => performOperation('+')}>+</button>
                <button className={styles.button} onClick={() => inputNumber('1')}>1</button>
                <button className={styles.button} onClick={() => inputNumber('2')}>2</button>
                <button className={styles.button} onClick={() => inputNumber('3')}>3</button>
                <button className={`${styles.button} ${styles.equals} ${styles.orange}`} onClick={performEquals}>=</button>
                <button className={`${styles.button} ${styles.zero}`} onClick={() => inputNumber('0')}>0</button>
                <button className={styles.button} onClick={inputDecimal}>.</button>
            </div>

        </div>
    );
}