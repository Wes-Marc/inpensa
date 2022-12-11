import { Header } from './components/Header/Header';
import { Salary } from './components/Salary/Salary';
import { Category } from './components/Category/Category';

import styles from './App.module.css';
import './global.css';
import { EntryDashboard } from './components/EntryDashboard/EntryDashboard';

function App() {

  return (
    <>
      <section className={styles.top_half}>
        <Header />
        <section className={styles.top_dashboard}>
          <Salary />

          <span className={styles.line_h_1}></span>
          <span className={styles.line_v_1}></span>
          <Category nome="Guardar | Investir" porcentagem={20} area="guardar" />

          <span className={styles.line_h_2}></span>
          <span className={styles.line_v_2}></span>
          <Category nome="Aluguel" porcentagem={30} area="aluguel" />

          <span className={styles.line_h_3}></span>
          <span className={styles.line_v_3}></span>
          <Category nome="Veículo" porcentagem={10} area="veiculo" />

          <span className={styles.line_h_4}></span>
          <span className={styles.line_v_4}></span>
          <Category nome="Comida" porcentagem={20} area="comida" />

          <span className={styles.line_h_5}></span>
          <span className={styles.line_v_5}></span>
          <Category nome="Diversão" porcentagem={20} area="diversao" />
        </section>
      </section>
      <section className={styles.bottom_half}>
        <EntryDashboard />
      </section>
    
    </>
  )
}

export default App
