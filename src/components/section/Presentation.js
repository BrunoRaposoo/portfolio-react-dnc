import { useEffect, useState } from 'react'
import { ButtonA } from '../elements/ButtonA'
import styles from './Presentation.module.css'

export function Presentation() {
  const [text, setText] = useState('')
  const toRotate = ['Bruno Rapôso', 'Desenvolvedor Full-stack']
  const [loop, setLoop] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const period = 100
  const [delta, setDelta] = useState(100)

  useEffect(() => {
    let ticker = setInterval(() => {
      toType()
    }, delta)
    return() => {clearInterval(ticker)}
  }, [text])

  const toType = () => {
    let i = loop % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if(!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setDelta(period)
      setLoop(loop+1)
    }
  }
  
  return (
    <div className={styles.presentation} id="presentation">
      <p><strong>Bem-vindo ao meu Portfólio</strong></p>
      <h1>Olá, eu sou {text}</h1>
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