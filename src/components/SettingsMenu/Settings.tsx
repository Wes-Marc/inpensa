import { GearSix } from 'phosphor-react';

import styles from './Settings.module.css';

export function Settings() {
    return (
        <div className={styles.wrapper}>
            <GearSix
                className={styles.icon}
                color='#c4c4cc'
                size={24} 
            />
        </div>
    )
};