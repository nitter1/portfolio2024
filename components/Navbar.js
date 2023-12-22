// Importando os módulos necessários
'use client'
import Image from "next/image";
import Logo from "../public/assets/logo.png";
import styles from '../styles/navbar.module.css'
import Link from "next/link";
import { useState } from "react";

// Componente Navbar
export default function Navbar() {
  // Estado para controlar a exibição dos links
  const [isLinksVisible, setIsLinksVisible] = useState(false);

  // Função para alternar a visibilidade dos links
  const handleToggle = () => {
    setIsLinksVisible((prev) => !prev);
  };

  return (
    <>
      <nav className={styles.topnav} id="myTopnav">
        <ul className={styles.ulNav}>
        <Image className={styles.image} src={Logo} alt="Logotipo Rádio Divinal Digital" width={1920}/>
        <Link href="/" className={`${styles.liHome} ${styles.active}`}>Início</Link>
          <Link className={styles.li} href="/about">Sobre Mim</Link>
          <Link className={styles.li} href="/projects">Projetos</Link>
          <Link className={styles.li} href="/contact">Fale Conosco</Link>
          <Link href="javascript:void(0);" className={styles.icon} onClick={handleToggle}>
            <i className="fa fa-bars"></i>
          </Link>
          </ul>
      </nav>

      {/* Renderização condicional dos links com base no estado */}
      {isLinksVisible && (
  <div 
  id="myLinks">
    {/* Seus links aqui */}
    <Link className={styles.li} href="/about">Sobre mim</Link>
    <Link className={styles.li} href="/projects">Projetos</Link>
    <Link className={styles.li} href="/contact">Fale Conosco</Link>
    {/* Adicione mais links conforme necessário */}
  </div>
)}
    </>
  );
}
