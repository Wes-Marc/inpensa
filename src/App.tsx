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
        <h1>Hello World</h1>
      </section>
    
    </>
  )
}

export default App
