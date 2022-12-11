import { Expense } from '../Expense/Expense';
import styles from './EntryDashboard.module.css';

export function EntryDashboard() {
    return (
        <section className={styles.dashboard}>
            <Expense />
        </section>
    );
}