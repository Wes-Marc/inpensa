import styles from './Category.module.css';

interface CategoryProps {
    nome: string;
    porcentagem: number;
    area: string;
}

export function Category({ nome, porcentagem, area }: CategoryProps) {
    return (
        <div className={styles.wrapper} style={{gridArea: area}}>
            <div className={styles.info}>
                <p>{nome}</p>
                <h5>R$ 500,00</h5>
            </div>
            <span className={styles.porcentagem}>{porcentagem}%</span>
        </div>
    );
}