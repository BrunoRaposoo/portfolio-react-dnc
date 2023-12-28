import styles from './Card.module.css'
import { ButtonB } from '../elements/ButtonB'
import { useState } from 'react'

export function Card({img, title, tech, description, repo, site, target}) {

  const [info, setInfo] = useState(false)

  function InfoOn() {
    setInfo(true)
  }

  function InfoOff() {
    setInfo(false)
  }

  return (
    <div onMouseLeave={InfoOff} className={styles.card}>
      <a onMouseEnter={InfoOn} href={site} target={target}>
        <img src={img} alt="" />
      </a>
      {info === true && (
        <div className={styles.description}>
          <h1>{title}</h1>
          <p><strong>Tecnologias: </strong>{tech}</p>
          <p>{description}</p>
          <div className={styles.btn}>
            <ButtonB text='Acesse o repositório' target='_blank' link={repo}/>
          </div>
        </div>
      )}
    </div>
  )
}