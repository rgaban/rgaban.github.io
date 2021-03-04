import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import Toolbar from './toolbar'

export const siteTitle = 'Rose Gaban: Front-End Developer'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Mada&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,600;0,700;1,400&display=swap" rel="stylesheet"></link>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content={siteTitle}
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <title>{siteTitle}</title>
            </Head>
            <Toolbar />
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                © Designed & Developed by Rose Gaban &lt;3
            </footer>
        </div>
    )
}
