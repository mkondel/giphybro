import Head from 'next/head'
import Link from 'next/link'
import { GiphyProvider } from '../src/components/GiphyContext'
import GiphyResults from '../src/components/GiphyResults'
import GiphySearch from '../src/components/GiphySearch'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Giphy Bro</title>
      </Head>

      <main className={styles.main}>
        <GiphyProvider>
          <GiphySearch styles={styles}/>
          <GiphyResults styles={styles}/>
        </GiphyProvider>
      </main>
    </div>
  )
}
