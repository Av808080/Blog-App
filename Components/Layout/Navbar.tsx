import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href='/' className={styles.linkItem}>Next Blog</Link>
            <div className={styles.links}>
                <Link href='/posts' className={styles.linkItem}>Posts</Link>
                <Link href='/contact' className={styles.linkItem}>Contact</Link>
            </div>

        </nav>
    )
}

export default Navbar
