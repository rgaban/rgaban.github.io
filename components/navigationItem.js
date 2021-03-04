import ActiveLink from '../components/activeLink'
import { useRouter } from 'next/router'
import styles from './navigationItem.module.css'

export default function NavigationItem(props) {
    const router = useRouter();

    return (
        <li className={styles.navigationItem}>
            <ActiveLink activeClassName="active" href={props.href}>
                <a>{props.name}</a>
            </ActiveLink>
        </li>
    )
}
