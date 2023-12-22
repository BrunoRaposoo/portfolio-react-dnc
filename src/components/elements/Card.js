import styles from './Card.module.css'
import { ButtonB } from '../elements/ButtonB'

export function Card({img, title, tech, description, repo, site, target}) {
  return (
    <div className={styles.card}>
      <a href={site} target={target}>
        <img src={img} alt="" />
      </a>
      <div className={styles.description}>
        <h1>{title}</h1>
        <p><strong>Tecnologias: </strong>{tech}</p>
        <p>{description}</p>
        <div className={styles.btn}>
          <ButtonB text='Acesse o repositório' target='_blank' link={repo}/>
        </div>
      </div>
    </div>
  )
}