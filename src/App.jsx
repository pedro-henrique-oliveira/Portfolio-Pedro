import styles from './App.module.css'
import Perfil from '../public/foto1.png'
import facebookIcon from '../public/facebook.webp'
import instagramIcon from '../public/instagram.webp'
import GithubIcon from '../public/Github.png'
import whatsAppIcon from '../public/whatsApp.webp'
import HTMLImg from '/HTML.png'
import CSSImg from '/CSS.png'
import JSImg from '/js (1).png'
import VITEImg from '/vite.png'
import REACTImg from '/REACT.png'
import VERCELImg from '/VERCEL.png'


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
            <p className={styles.paragraph}>aluno do curso tecnico de desenvolvimento de Sistema pelo Senai</p>
          </div>
        </section>

        <section className={styles.s2} id='s2'>
          <h2 className={styles.tectitle}>Tecnologias</h2>
          <div className={styles.wrapCards}>
              <div className={styles.card}>
                  <img width={80} src={HTMLImg} alt="HTML" />
                  <h3>HTML</h3>
                  <p>HTML é a sigla para Hypertext Markup Language (Linguagem de Marcação de Hipertexto) e é a linguagem de marcação padrão usada para criar e estruturar páginas da web</p>
              </div>
              <div className={styles.card}>
                  <img width={80} src={CSSImg} alt="CSS" />
                  <h3>CSS</h3>
                  <p>CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação visual de um documento escrito em linguagem de marcação como HTML</p>
              </div>
              <div className={styles.card}>
                  <img width={80} src={JSImg} alt="JS" />
                  <h3>JS</h3>
                  <p>JavaScript é uma linguagem de programação leve, interpretada e versátil, usada para tornar páginas da web dinâmicas e interativas</p>
              </div>
              <div className={styles.card}>
                  <img width={80} src={VITEImg} alt="VITE" />
                  <h3>VITE</h3>
                  <p>Vite é uma ferramenta moderna de construção de front-end projetada para fornecer uma experiência de desenvolvimento mais rápida e eficiente para web</p>
              </div>
              <div className={styles.card}>
                  <img width={80} src={REACTImg} alt="REACT" />
                  <h3>REACT</h3>
                  <p>React é uma biblioteca JavaScript de código aberto para construir interfaces de usuário (UI)</p>
              </div>
              <div className={styles.card}>
                  <img width={80} src={VERCELImg} alt="VERCEL" />
                  <h3>VERCEL</h3>
                  <p>A Vercel é uma plataforma de nuvem popular e de alto desempenho, projetada especificamente para desenvolvedores front-end</p>
              </div>
          </div>
        </section>

        <section id='s3'>
          <h2>sassao 3</h2>
        </section>

        <section id='s4'>
          <h2>sassao 4</h2>
        </section>
      </main>
      <footer className={styles.rodape}>
          <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={facebookIcon} alt="Facebook" /> </a>
          <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={instagramIcon} alt="Instagram" /> </a>
          <a href="https://www.Github.com" target='_blank' rel='noopener noreferrer'> <img width={45} src={GithubIcon} alt="Linkedin" /> </a>
          <a href="https://www.whatsApp.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={whatsAppIcon} alt="whatsApp" /> </a>
      </footer>
    </>
  )
}

export default App
