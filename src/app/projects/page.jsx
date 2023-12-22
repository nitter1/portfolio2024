'use client'
import styles from './projects.module.css'
import Carousel from '../../../components/Carousel'
export default function Projects() {
    return(
        <>
        <section className={styles.projContainer}>
        <h1 className={styles.h1Proj}>PROJETOS</h1>
        <p className={styles.pProj}>Acompanhe a seguir uma amostra dos meus projetos!</p>
        <Carousel />
        </section>
        </>
    )
}