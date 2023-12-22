import Image from 'next/image'
import styles from './page.module.css'
import Html from '../../public/assets/html.svg'
import Css from '../../public/assets/css.png'
import Js from '../../public/assets/js.png'
import LogoReact from '../../public/assets/react.png'
import Git from '../../public/assets/git.png'
import Github from '../../public/assets/github.png'
import Styled from '../../public/assets/styled.png'
import Profile from '../../public/assets/danielCartoon.png'
import Instagram from '../../public/assets/instagram.png'
import Linkedin from '../../public/assets/linkedin.png'
import NextJS from '../../public/assets/nextjs.png'
import TailwindCss from '../../public/assets/tailwindcss.png'
export default function Home() {
  return (
   <>
   <div className={styles.container}>
    <section className={styles.secMain}>
      <h1 className={styles.titles}>Nitter Solutions</h1>
      <p className={styles.paragraph}>Olá, me chamo Daniel Roger Nitter e sou desenvolvedor
            front-end, formado pelo curso Vai Na Web!</p>
            <nav className={styles.navTec}>
        <ul>
              <li>
                <a href="#">
                  <Image src={Html} alt="Github Logo" className={styles.imagem} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={Css} alt="Github Logo" className={styles.imagem}  />
                </a>
              </li>
              <li> <a href="#">
                  <Image src={Js} alt="Github Logo" className={styles.imagem} />
                </a></li>

                <li> <a href="#">
                  <Image src={LogoReact} alt="Github Logo" className={styles.imagem} />
                </a></li>

                <li> <a href="#">
                  <Image src={Styled} alt="Github Logo" className={styles.imagem} />
                </a></li>

                <li> <a href="#">
                  <Image src={NextJS} alt="Github Logo" className={styles.imagem} />
                </a></li>

                <li> <a href="#">
                  <Image src={TailwindCss} alt="Github Logo" className={styles.imagem} />
                </a></li>

                <li> <a href="#">
                  <Image src={Git} alt="Github Logo" className={styles.imagem} />
                </a></li>

                <li> <a href="#">
                  <Image src={Github} alt="Github Logo" className={styles.imagem} />
                </a></li>
            </ul>
        </nav>
    </section>
    <section className={styles.secMainTwo}>
    <Image src={Profile} alt='Daniel Imagem de Perfil' width={200} className={styles.perfil}/>
      <nav className={styles.navMain}>
      <ul>
              <li>
                <a href="https://github.com/nitter1">
                  <Image src={Github} alt="Github Logo" className={styles.iconsNavTwo}/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/nittersolutions/">
                  <Image src={Instagram} alt="Github Logo" className={styles.iconsNavTwo}/>
                </a>
              </li>
              <li> <a href="https://www.linkedin.com/in/nittersolutions/">
                  <Image src={Linkedin} alt="Github Logo" className={styles.iconsNavTwo}/>
                </a></li>
            </ul>
      </nav>
      <h4 className={styles.titleNavMain}><a href="https://linktr.ee/nittersolutions">SIGA NAS REDES!</a></h4>
    </section>
   </div>
   </>
  )
}
