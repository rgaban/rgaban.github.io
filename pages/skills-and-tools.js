import Layout from '../components/layout'
import Logo from '../components/logo'
import Html5Logo from '../public/images/html5.svg'
import Css3Logo from '../public/images/css3.svg'
import JavaScript from '../public/images/javascript.svg'
import FirebaseLogo from '../public/images/firebase.svg'
import ReactLogo from '../public/images/react.svg'
import VsCode from '../public/images/visualstudiocode.svg'
import PostgreSql from '../public/images/postgresql.svg'
import Git from '../public/images/git.svg'
import Nextjs from '../public/images/nextjs.svg'
import CLI from '../public/images/cmd-terminal.svg'
import ResponsiveDesign from '../public/images/desktop-mobile.svg'
import API from '../public/images/api-svgrepo-com.svg'
import GitHub from '../public/images/github.svg'

import styles from '../styles/skills-and-tools.module.css'

export default function SkillsAndTools() {
    return (
        <Layout>
            <main className={styles.main}>
                <h4 align="center">My Toolbox</h4>
                <div className={styles.skills}>
                    <Logo name="HTML5"><Html5Logo width={100} height={100} fill={'#000000'} /></Logo>
                    <Logo name="CSS3"><Css3Logo width={100} height={100} fill={'#000000'} /></Logo>
                    <Logo name="JavaScript"><JavaScript width={100} height={100} fill={'#000000'} /></Logo>
                    <Logo name="React"><ReactLogo width={100} height={100} fill={'#000000'} /></Logo>
                    <Logo name="NextJS"><Nextjs width={100} height={100} fill={'#000000'} /></Logo>
                    <Logo name="Git"><Git width={100} height={100} fill={'#000000'} /></Logo>
                    <Logo name="GitHub"><GitHub width={100} height={100} fill={'#000000'} /></Logo>
                    <Logo name="PostgreSQL"><PostgreSql width={100} height={100} fill={'#000000'} /></Logo>
                    <Logo name="Firebase"><FirebaseLogo width={100} height={100} fill={'#000000'} /></Logo>
                    <Logo name="Supabase"><img
                        src='/images/supabase.svg'
                        height={100}
                        width={100}
                        alt='Supabase'
                    /></Logo>
                    <Logo name="Responsive Design"><ResponsiveDesign width={100} height={100} fill={'#000000'} /></Logo>
                    <Logo name="RESTful APIs"><API width={100} height={100} fill={'#000000'} /></Logo>
                    <Logo name="VSCode"><VsCode width={100} height={100} fill={'#000000'} /></Logo>
                    <Logo name="CLI"><CLI width={100} height={100} fill={'#000000'} /></Logo>
                </div>
            </main>
        </Layout>
    )
}
