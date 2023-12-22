import styles from './Footer.module.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Footer({target}) {
  return (
    <div className={styles.footer}>
      <ul>
        <li><a href="https://www.instagram.com/bruunoraposo/" target={target}><FaInstagram size={30} /></a></li>
        <li><a href="https://github.com/BrunoRaposoo" target={target}><FaGithub size={30} /></a></li>
        <li><a href="https://www.linkedin.com/in/bruno-raposo-dev/" target={target}><FaLinkedin size={30} /></a></li>
      </ul>
      <a href="mailto:brunoraposounb@gmail.com" target={target}>
        <p>brunoraposounb@gmail.com</p>
      </a>
      <p>Bruno Rapôso @ 2023</p>
    </div>
  )
}