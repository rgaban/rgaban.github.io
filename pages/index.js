import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <Layout home>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutImgProfileContainer}>
              <img
                src="/images/profile.jpg"
                height={400}
                width={400}
                alt="Rose"
                className={styles.imgProfile}
              />
            </div>

            <div className={styles.aboutDescriptionContainer}>
              <h4>Customer advocate turned developer
              🎉</h4>
              <p>
                I'm an aspiring self-taught Front-End Developer, with a background on customer advocacy. Throughout my experience championing and becoming the voice for customers, I became obssessed with product enhancement and providing hot fixes for times where product fell short. This then sparked my interest to further my knowledge on technology to heavily contribute to a project.
              </p>
              <p>
                I'm happiest when I'm exploring with my husky Koda, climbing, learning, and optimizing solutions to problems! At this time, I'm ready to take my pursuit to becoming a Front-End Engineer to the next level.
              </p>
            </div>
          </div>

          <div className={styles.social}>
            <Link href="https://github.com/rgaban">
              <a target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/rosegaban/">
              <a target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </Link>
            <Link href="https://github.com/rgaban">
              <a target="_blank">
                <FontAwesomeIcon icon={faFileAlt} size="2x" />
              </a>
            </Link>
          </div>

        </main>
    </Layout>
  )
}
