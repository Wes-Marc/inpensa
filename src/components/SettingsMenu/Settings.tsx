import { GearSix } from 'phosphor-react';
import { useState } from 'react';

import styles from './Settings.module.css';
import { SalaryModal } from './SettingsModal/SalaryModal';

export function Settings() {
    const [ display, setDisplay ] = useState('none');

    function handleToggleModal() {
        if (display === 'none') {
            setDisplay('block');
        } else {
            setDisplay('none');
        }
    }

    return (
        <>
            <div className={styles.setting}>
                <GearSix
                    className={styles.icon}
                    color='#c4c4cc'
                    size={24}
                    onClick={handleToggleModal}
                />
                <SalaryModal display={display} />
            </div>
        </>
    )
};