import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './notFound.module.scss'
const NotFound = () => {
  return (
    <section className={styles.container}>
      <Image src='/Images/NotFound/404.png' className={styles.image} alt='Page Not Found' width={400} height={300} />
      <h1 className={styles.title}>Page Not Found</h1>
      <Link href='/' className={styles.HomeLink}>Go To HomePage</Link>
    </section>
  )
}

export default NotFound
