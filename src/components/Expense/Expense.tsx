import { CaretRight } from 'phosphor-react';
import style from './Expense.module.css';

export function Expense() {
    return (
        <section className={style.expense}>
            <span className={style.expense__color}></span>
            <div className={style.expense__container}>
                <time
                    className={style.expense__date}>
                        {new Date().toLocaleDateString("pt-BR",{
                            day: "2-digit",
                            month:"short"}).replace(/(de\b)|\./g, '')
                        }
                </time>
                <CaretRight size={24} color="#C4C4CC" />
                <div className="expense__icon">
                    icon
                </div>
                <strong className="expense__title">title</strong>
                <p className="expense__value">R$ 0,00</p>
                <span className="expense__category">category</span>
                <span className="expense__edit-icon">edit</span>
                <span className="expense__delete-icon">delete</span>
            </div>
        </section>
    );
}