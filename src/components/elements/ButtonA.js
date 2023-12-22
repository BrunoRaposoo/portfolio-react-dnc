import styles from './ButtonA.module.css'

export function ButtonA({text, link, target}) {
  return (
    <div>
      <a href={link} target={target}>
        <button className={styles.btnA}>{text}</button>
      </a>
    </div>
  )
}