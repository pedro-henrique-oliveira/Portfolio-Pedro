import styles from './App.module.css'

import Perfil from '../public/foto1.png'
import facebookIcon from '../public/facebook.webp'
import instagramIcon from '../public/instagram.webp'
import GithubIcon from '../public/Github.png'
import whatsAppIcon from '../public/whatsApp.webp'

import { useState, useEffect } from 'react'
import { Card } from './components/card'


function App() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    fetch('/cardsInfo.json')
    .then(response => response.json())
    .then(data => {
      setDados(data)
    })
  }, [])

  const defaultPhoneNumber = '5541987216563'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }


  const handleZap = () => {
    const {name, email, message} = formData

    const urlzap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email} %0D%0A
    Mensagem:%20${message}%0D%0A`

    window.open(urlzap, "_blank")
  }


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
              {dados.map((item) => {
                return(
                  <div key={item.id}>
                  <Card tec={item.tecnologia} image={item.imagem} text={item.texto}/>
                  </div>
                )
              })}
          </div>
        </section>

        <section id='s3'>
          <h2>Github repositorios</h2>
        </section>

        <section id='s5' className={styles.s5}>
          <h5 className={styles.titulo}></h5>
          <div className={styles.wrapJogos}>
            <div>
          
                
            </div>
          </div>
        </section>

        <section id='s4' className={styles.s4}>
          <h2>CONTATO</h2>
          <div className={styles.formData}>
            <label htmlFor="name">Informe seu nome</label>
            <input type="text" id='name'  name='name' value={formData.name} onChange={handleChange} required />
            <label htmlFor="email">Informe seu email</label>
            <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} required />
            <label htmlFor="message">Informe uma mensagem</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} cols="30" rows="10" required ></textarea>
            <button onClick={handleZap}>Eviar mensagem</button>
          </div>
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
