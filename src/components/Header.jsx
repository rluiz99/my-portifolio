import {ArrowsClockwise} from 'phosphor-react'
import styles from './Header.module.css'
import logo from '../assets/logo.svg'

export function Header() {
    return(

        <header className={styles.header}>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/121819777?v=4" />
                <div className={styles.author2} >
                    <img className={styles.logo} src={logo} alt="Logotipo" />
                    <strong>onaldo Luiz </strong>
                </div>

                <div className={styles.description}>
                    <strong>Desenvolvedor Fullstack</strong>
                    <ArrowsClockwise size={20} weight="bold" />
                </div>

                <div className={styles.content}>
                    {/* <p> Descover👋</p>
                    <p> About Me 🚀</p>
                    <p>{' '}<a href="">👉 jane.design/doctorcare </a></p> */}
                    <p> 
                        <a href="">#HTML</a>{' '}
                        <a href=""> #CSS</a>{' '}
                        <a href=""> #Node</a>{' '}
                        <a href=""> #SQL</a>{' '}
                        <a href="">#Javascript</a>
                    </p>
               
                </div>
            </div>


        </header>
    );
}