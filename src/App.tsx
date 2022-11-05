import { Header } from './components/Header/Header';

import styles from './App.module.css';
import './global.css';

function App() {

  return (
    <>
      <section className={styles.top_half}>
        <Header />
      </section>
      <section className={styles.bottom_half}>
        
      </section>
    
    </>
  )
}

export default App
