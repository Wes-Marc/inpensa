import { useState } from 'react';
import styles from './SalaryModal.module.css';

interface settingsModal {
    display: string;
}

export function SalaryModal({ display }: settingsModal) {
    const [amount, setAmount] = useState(0);

    return (
        <div style={{display: display}}>
            <form className={styles.modal}>
                <div className={styles.input_wrapper}>
                    <label htmlFor="salaryInput">Salário</label>
                    <span id={styles.currency}>
                        <input
                            type="number"
                            name="salaryInput"
                            id={styles.salaryInput}
                            min="0.00"
                            max="10000.00"
                            step="0.01"
                            value={amount.toFixed(2)}
                            onChange={event => setAmount(Number(event.target.value))}
                        />
                    </span>
                </div>
                <div className={styles.cta_wrapper}>
                    <button className="cta-salvar" type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
};