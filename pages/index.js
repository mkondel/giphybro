import Head from 'next/head'
import getConfig from 'next/config'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const { publicRuntimeConfig: { assetPrefix } } = getConfig()

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href={`${assetPrefix}/favicon.ico`} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}
