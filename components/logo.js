import styles from '../styles/skills-and-tools.module.css'

export default function Logo(props) {
    return (
        <div className={styles.skill}>
            {props.children}
            <p>{props.name}</p>
        </div>
    )
}
