import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image src='/images/dperolio-grunge-transparent.png' width='512' height='512' alt='Dustin Perolio' /><br />
          Coming Soon&trade;
        </h1>
      </main>
    </div>
  )
}
