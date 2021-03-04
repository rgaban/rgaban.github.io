import Head from 'next/head'
import Layout from '../components/layout'
import Project from '../components/project'
import styles from '../styles/projects.module.css'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJs, faReact, faGithub,  } from '@fortawesome/free-brands-svg-icons'

export default function Projects() {
    return (
        <Layout>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>Things I've Built</h1>

                    <Project
                        name="DevKeep"
                        description="Your not so typical note taking app, geared for developers. With an added twist to place code snippets with syntax highlights, and your own customizable and themed code editor. Made with ReactJS as a front-end framework, and Supabase.io for the backend (Postgres SQL database)."
                        techIcons={[faReact, faHtml5, faCss3Alt, faGithub]}
                        demoHref="https://rgaban.github.io/devkeep/"
                        repoHref="https://github.com/rgaban/devkeep/"
                        imgSrc="/images/devkeep.png"
                        imgAlt="DevKeep"
                    />

                    <Project
                        name="PawPrint"
                        description="Tracking your pet's activities has never been easier! PawPrint introduces a logging system to keep track of feeding time, treats, walkies, and everything in between.                        "
                        techIcons={[faReact, faHtml5, faCss3Alt]}
                        demoHref="https://react-pawprint.herokuapp.com/"
                        repoHref="https://github.com/rgaban/pawprint"
                        imgSrc="/images/pawprint.png"
                        imgAlt="PawPrint"
                    />

                    <Project
                        name="NASA Astronomy Picture of the Day"
                        description="Tracking your pet's activities has never been easier! PawPrint introduces a logging system to keep track of feeding time, treats, walkies, and everything in between."
                        techIcons={[faReact, faHtml5, faCss3Alt]}
                        demoHref="https://react-nasa-apod.herokuapp.com/"
                        repoHref="https://github.com/rgaban/pawprint"
                        imgSrc="/images/nasa-apod.png"
                        imgAlt="PawPrint"
                    />

                </main>
            </div>
        </Layout>
    )
}
