import {WhatsappLogo } from 'phosphor-react'
import {LinkedinLogo} from 'phosphor-react'
import {GithubLogo} from 'phosphor-react'
import styles from './About.module.css'

export function About() {
    return(
        <article className={styles.post}>

            <div className={styles.authorAbout}>
                <span> Sobre mim 🚀</span>
                <hr />
                <br /><br/>
                <p>
                    Formado no curso de Informática para gestão de negócios pela Faculdade de Tecnologia Fatec.
                    Possuo 2 anos de experiência em desenvolvimento web, realizando manutenções um sistema legado e 
                    incluindo novas funcionalidades ao sistema. Tecnologias que atuo no momento no front end: html, 
                    css e javascript e angulasjs, e em tecnologias backend: coldfusion da adobe, e banco de dados sql 
                    server. Sou estudandte ativo de nodejs, desenvolvendo habilidades em microserviços, fluxo de dados 
                    e persistencia. Atualmente estou me atualizando tambem em  html, css e javascript puro para melhorar 
                    as habilidades front end e tbm o framework React. Tenho alguns projetos no liinkedin na seção projetos.
                    Obs: este site utiliza React!
                </p>
                <br /><br />
            </div>          
                
            <div className={styles.authorInfo}>
                <span><WhatsappLogo  size={32}  />(32)999750781</span>
                <a href="https://www.linkedin.com/in/ronaldoluiz/"><LinkedinLogo size={32} /></a>
                <a href="https://github.com/rluiz99"><GithubLogo size={32} /></a>
            </div>
            <footer>
            <a href="https://drive.google.com/file/d/1RaEpqDk8GrW2CbLpMLy-nRMl8CSh0s77/view?usp=sharing" target="_blank"> 
                <button type='submit'>Download CV</button>
            </a>
            </footer>
            
        </article>
       
    );
}