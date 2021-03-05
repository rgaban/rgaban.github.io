import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../components/button'
import styles from '../styles/projects.module.css';

export default function  Project(props) {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectDescription}>
                <h5>{props.name}</h5>
                <p>{props.description}
                </p>
                <div className={styles.containerProjectTech}>
                    {props.techIcons.map(icon => (
                        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
                    ))}
                </div>
                <div className={styles.containerProjectBtn}>
                    <Button
                        name="Live Demo"
                        href={props.demoHref}
                    />
                    <Button
                        name="Github Repo"
                        href={props.repoHref}
                    />
                </div>
            </div>
            <div className={styles.projectImg}>
                <img
                    src={props.imgSrc}
                    height="auto"
                    width="auto"
                    alt={props.imgAlt}
                    className={styles.image}
                />
            </div>
        </div>
    )
};
