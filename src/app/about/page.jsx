import styles from '../about/about.module.css'
import Image from 'next/image'
import Profile from '../../../public/assets/profile.jpg'

export default function About() {
    return(
        <>
        <section className={styles.aboutContainer}>
            <section className={styles.secAbout}>
            <h1 className={styles.titleAbout}>Sobre mim</h1>
            <p className={styles.p1}>Olá, meu nome é Daniel Roger Nitter e sou um
            desenvolvedor front-end com formação no curso
            VaiNaWeb. Sou apaixonado por tecnologia e design
            e tenho alguns anos de experiência nessa área,
            sempre buscando maneiras de melhorar a
            experiência do usuário.</p>
                <br />
            <p className={styles.p2}>Comecei minha trajetória profissional como autodidata, aprendi
            a criar sites no Blogger, aprimorei habilidades
            em design gráfico usando o Photoshop, e aprendi
            Javascript por meio de cursos, em especial o Vai Na Web. Atuo como
            desenvolvedor front-end, sempre atualizando-me
            com as novidades do mercado, buscando criar
            soluções funcionais e atraentes para meus
            clientes e priorizando a acessibilidade na web.</p>
            </section> {/* fim secAbout */}

            <section className={styles.secProfile}>
            <Image src={Profile} className={styles.imagem}/>
            </section>
        </section>{/* fim Container */}
        
        </>
    )
}