import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chronark</title>
        <meta name="description" content="Chronark project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Chronark</h1>
      </header>

      <main className={styles.main}>
        <h2 className={styles.subtitle}>Welcome to Chronark project</h2>

        <div className={styles.grid}>
          <a href="https://github.com/chronark" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Chronark features and API.</p>
          </a>

          <a href="https://github.com/chronark" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Chronark in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/chronark" className={styles.card}>
            <h3>Contribute &rarr;</h3>
            <p>Discover how you can contribute to the Chronark project.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/chronark" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            Chronark
          </span>
        </a>
      </footer>
    </div>
  )
}
