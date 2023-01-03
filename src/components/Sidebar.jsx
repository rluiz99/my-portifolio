import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1665512983234-5053c892365b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=60" 
             />
        
            <div className={styles.profile}>
                <img 
                    className={styles.avatar} 
                    src="https://avatars.githubusercontent.com/u/121819777?v=4" 
                />
                
                <strong>Ronaldo Lui z</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine />
                    editar seu perfil
                </a>
            </footer>
        </aside>

    );
}