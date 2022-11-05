import { Settings } from "../SettingsMenu/Settings";
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <h5 className={styles.logo}>Inpensa</h5>
                <div className={styles.buttons}>
                    <Settings />
                    <button className="cta-novo">Novo</button>
                </div>
            </div>
        </header>
    );
}