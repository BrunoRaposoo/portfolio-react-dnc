import styles from './Navbar.module.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';

export function Navbar({target}) {
  return (
    <div className={styles.navbar}>
      <ul>
        <li><Nav.Link href='#presentation'>Apresentação</Nav.Link></li>
        <li><Nav.Link href='#skills'>Habilidades</Nav.Link></li>
        <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>
      </ul>
      <ul>
        <li><a href="https://www.instagram.com/bruunoraposo/" target={target}><FaInstagram size={30} /></a></li>
        <li><a href="https://github.com/BrunoRaposoo" target={target}><FaGithub size={30} /></a></li>
        <li><a href="https://www.linkedin.com/in/bruno-raposo-dev/" target={target}><FaLinkedin size={30} /></a></li>
      </ul>
    </div>
  )
}