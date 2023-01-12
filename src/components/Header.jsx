import {ArrowsClockwise} from 'phosphor-react'
import styles from './Header.module.css'
import logo from '../assets/logo.svg'

export function Header() {
    return(

        <div className={styles.profile}>
            {/* <div className={styles.author}> */}
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/121819777?v=4" />
                <div className={styles.info} >
                    <span>
                        <img className={styles.logo} src={logo} alt="Logotipo" />
                        <strong>onaldo Luiz </strong>
                    </span>
                    <span>
                        <strong>Desenvolvedor Fullstack Jr.</strong>
                        {/* <ArrowsClockwise size={20} weight="bold" /> */}
                    </span>
                    <div className={styles.stack}> 
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Node</span>
                        <span>SQL</span>
                        <span>Javascript</span>
                    </div>
                </div>
        </div>
    );
}