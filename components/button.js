import Link from 'next/link'
import styles from '../styles/button.module.css'

export default function Button(props) {
    return (
        <Link href={props.href}>
            <a target="_blank" className={styles.btn}>{props.name}</a>
        </Link>
    )
}
