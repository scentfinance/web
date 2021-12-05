import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aesop Finance | NFT Battle | Staking | Farming</title>
        <meta name="description" content="Decentralized Finance for Gaming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://aesop.finance">Aesop Finance</a>
        </h1>

        <p className={styles.description}>
          Get started by exploring and joining
        </p>

        <div className={styles.grid}>
          <a href="https://aesop.finance/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Aesop Finance features.</p>
          </a>

          <a href="https://aesop.finance/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Aesop Finance in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://t.me/+QHoBoBX_eb1hNzVh"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Telegram &rarr;</h2>
            <p>Join and discover Aesop Finance telegram group.</p>
          </a>

          <a
            href="https://discord.gg/pyQMxrpv"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Discord &rarr;</h2>
            <p>
              Join the discord channel and get latest updates.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://aesop.finance"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/logo.jpg" alt="Aesop Finance Logo" width={24} height={20} />
          </span>
          Aesop Finance
        </a>
      </footer>
    </div>
  )
}

export default Home
