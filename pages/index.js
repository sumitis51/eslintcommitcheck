import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Event App</title>
      </Head>
      <header>
        <nav className={styles.description}>
          <img />
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About us</a>
        </nav>
      </header>
      <main className={styles.main}>
        <a href="/">
          <img/>
          <h2>Events in London</h2>
          <p>Lorem ispums</p>
        </a>
        <a href="/">
          <img/>
          <h2>Events in Sans Franscisco</h2>
          <p>Lorem ispums</p>
        </a>
        <a href="/">
          <img/>
          <h2>Events in Sans Barcilona</h2>
          <p>Lorem ispums</p>
        </a>
      </main>
      <footer>
      <p>@copyright reserves issue </p>
      </footer>
    </>
  )
}
