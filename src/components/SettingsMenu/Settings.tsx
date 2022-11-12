import { GearSix } from 'phosphor-react';

import styles from './Settings.module.css';
import { SalaryModal } from './SettingsModal/SalaryModal';

export function Settings() {
    return (
        <>
            <div className={styles.setting}>
                <GearSix
                    className={styles.icon}
                    color='#c4c4cc'
                    size={24} 
                />
                <SalaryModal />
            </div>
        </>
    )
};