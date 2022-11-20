import { Header } from './components/Header/Header';
import { Salary } from './components/Salary/Salary';
import { Category } from './components/Category/Category';

import styles from './App.module.css';
import './global.css';

function App() {

  return (
    <>
      <section className={styles.top_half}>
        <Header />
        <section className={styles.top_dashboard}>
          <Salary />
          <Category nome="Guardar | Investir" porcentagem={20} area="guardar" />
          <Category nome="Aluguel" porcentagem={30} area="aluguel" />
        </section>
      </section>
      <section className={styles.bottom_half}>
        
      </section>
    
    </>
  )
}

export default App
