import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portofolio</title>
        <meta name="description" content="Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>
          Welcome to My Portofolio
        </h3>
      </main>
    </div>
  )
}
