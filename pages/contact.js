import Head from 'next/head'
import MyForm from '../components/form'
import Layout from '../components/layout'
import styles from '../styles/contact.module.css'

export default function Contact() {
    return (
        <Layout>
            <div className={styles.container}>
                <section>
                    <div className={styles.heading}>
                        <h4>Connect with Me</h4>
                    </div>
                    <MyForm />
                </section>
            </div>
        </Layout>
    )
}
