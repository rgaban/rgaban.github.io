import Navigation from './navigation'
import DrawerToggle from './DrawerToggle'
import styles from './toolbar.module.css'

export default function Toolbar(props) {
    return (
        <header className={styles.toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={styles.logo}></div>
            <div className={styles.mobile}></div>
            <nav className={styles.desktop}>
                <Navigation />
            </nav>
        </header>
    )
}
