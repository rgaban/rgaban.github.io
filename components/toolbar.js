import Navigation from './navigation'
import styles from './toolbar.module.css'

export default function Toolbar() {
    return (
        <header className={styles.toolbar}>
            <div className={styles.logo}></div>
            <div className={styles.mobile}></div>
            <nav className={styles.desktop}>
                <Navigation />
            </nav>
        </header>
    )
}
