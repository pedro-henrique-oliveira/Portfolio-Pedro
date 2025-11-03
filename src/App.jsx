import styles from './App.module.css'
import Perfil from '../public/foto1.png'

function App() {

// javascript

  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Home</a>
        <a href="#s2">Cards</a>
        <a href="#s3">Video</a>
        <a href="#s4">Contrato</a>
      </nav>
      <main>
        <section className={styles.s1} id='s1'>
          <div className={styles.left}>
            <img className={styles.imgPerfil} src={Perfil} alt="Foto perfil"  />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Pedro</h2>
            <p className={styles.paragraph}>aluno do curso tecnico de desenvolvimento de Sistema pelo Sanai</p>
          </div>
        </section>

        <section id='s2'>
          <h2>sassao 2</h2>
        </section>

        <section id='s3'>
          <h2>sassao 3</h2>
        </section>

        <section id='s4'>
          <h2>sassao 4</h2>
        </section>
      </main>
    </>
  )
}

export default App
