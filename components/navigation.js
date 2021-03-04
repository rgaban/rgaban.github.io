import NavigationItem from './navigationItem'
import styles from './navigation.module.css'

export default function Navigation() {
    return (
        <ul className={styles.navigationItems}>
            <NavigationItem
                href="/"
                name="about"
            />
            <NavigationItem
                href="/skills-and-tools"
                name="skills & tools"
            />
            <NavigationItem
                href="/projects"
                name="projects"
            />
            <NavigationItem
                href="/contact"
                name="contact"
            />
        </ul>
    )
}
