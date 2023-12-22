import styles from './Projects.module.css'
import { ButtonB } from '../elements/ButtonB'
import { Card } from '../elements/Card'
import ldnc from '../../image/ldnc.svg'
import portfolio from '../../image/portfolio.svg'
import ccxp from '../../image/ccxp.svg'
import myportfolio from '../../image/personalportfolio.svg'

export function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <h1>Projetos</h1>
      <Card 
        img={myportfolio} 
        target='_blank'
        title='Meu portfólio' 
        tech='ReactJs, TypeSript, NextJs, TailwindCSS, Motion, TypeIt' 
        description='Desenvolvimento do portfólio de desenvolvedor.'
        repo='https://github.com/BrunoRaposoo/brunoraposo' 
        site='https://brunoraposo.vercel.app/'
      />

      <Card 
        img={ldnc} 
        target='_blank'
        title='LP - DNC' 
        tech='HTML, CSS, JavaScript' 
        description='Desenvolvimento de langingpage.'
        repo='https://github.com/BrunoRaposoo/dnc-landing-page' 
        site='https://cheerful-melomakarona-e7f73b.netlify.app/'
      />

      <Card 
        img={portfolio}
        target='_blank'
        title='Portfólio' 
        tech='ReactJS' 
        description='Desenvolvimento de um site portfólio.'
        repo='' 
        site=''
      />

      <Card 
        img={ccxp}
        target='_blank'
        title='CCXP' 
        tech='HTML, CSS, JavaScript' 
        description='Desenvolvimento de uma landingpage para divulgar o evento da ccxp.'
        repo='https://github.com/BrunoRaposoo/ccxp-challenge-dnc' 
        site='https://unrivaled-hummingbird-9411f4.netlify.app/'
      />
      <div className={styles.btn}>
        <ButtonB text='Ver repositório Completo' target='_blank' link='https://github.com/BrunoRaposoo' />
      </div>
    </div>
  )
}