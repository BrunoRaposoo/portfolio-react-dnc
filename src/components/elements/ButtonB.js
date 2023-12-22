import styles from './ButtonB.module.css'

export function ButtonB({text, link, target}) {
  return (
    <div >
      <a href={link} target={target}>
        <button className={styles.btnB}>{text}</button>
      </a>
    </div>
  )
}