import { ButtonA } from '../elements/ButtonA'
import { ButtonB } from '../elements/ButtonB'
import styles from './Presentation.module.css'

export function Presentation() {
  return (
    <div className={styles.presentation} id="presentation">
      <p><strong>Bem-vindo ao meu Portfólio</strong></p>
      <h1>Olá, eu sou o Bruno Rapôso</h1>
      <p>Sou um apaixonado por tecnologia e soluções inovadoras.Como <br />
        Desenvolvedor full-stack, eu tenho o compromisso de resolver <br />
        problemas complexos e trazer resultados excepcionais para os <br />
        negócios. Meus projetos geram resultados expressivos e estou <br />
        sempre em busca de novos desafios para superar.<br />
      </p>
      <div className={styles.btn}>
        <ButtonA link='https://www.linkedin.com/in/bruno-raposo-dev/' target='_blank' text='Conecte-se comigo!!'/>
      </div>
    </div>
  )
}