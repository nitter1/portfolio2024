import styles from './contact.module.css'
import style from '../page.module.css'

export default function Contact() {
    return(
        <>
        <section className={styles.container}>
        <h1 className={styles.title}>Entre em contato e faça o seu orçamento</h1>
        <p className={styles.paragraph}>Tem alguma dúvida, sugestão ou elogio? Fale conosco através das nossas redes, email ou WhatsApp e nós te retornaremos o mais breve possível!</p>
        <h4 className={styles.email}><a href="mailto:danielroger2001@gmail.com?subject=Dev&body=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20pelo%20Portf%C3%B3lio"> Email: <span>danielroger2001@gmail.com</span></a></h4>
        </section>
        <h4 className={style.titleNavMain}><a href="https://linktr.ee/nittersolutions">SIGA NAS REDES!</a></h4>
        </>
    )
} 