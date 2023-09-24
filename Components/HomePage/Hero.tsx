import React from 'react'
import Image from 'next/image'
import styles from './hero.module.scss'
const Hero = () => {
  return (
    <section className={styles.banner}>
      <Image src='/Images/Logo.png' className={styles.Logo} alt='Logo' width={360} height={240} />
      <h1 className={styles.header}>Welcome to <span className={styles.title}>NEXT BLOG</span></h1>
      <p className={styles.description}>This is an article training site where you can read the latest front-end articles. </p>
    </section>
  )
}

export default Hero
