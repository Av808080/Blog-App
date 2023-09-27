import { FC } from 'react'
import Image from 'next/image'
import { SinglePost } from '@/Types/Type'
import styles from './post-item.module.scss'
import Link from 'next/link'


const PostItem: FC<SinglePost> = ({ post }) => {
    const { date, excerpt, image, title } = post
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
        day: 'numeric'
    })
    return (
        <Link className={styles.link} href={`/posts/${title.replaceAll(' ', '-')}`}>
            <article className={styles.card}>
                <Image src={`/Images/Posts/${image}`} className={styles.card_img} alt={title} width={360} height={240} />
                <div className={styles.description}>
                    <h3 className={styles.card_title} >{title}</h3>
                    <time className={styles.date}>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </article>
        </Link>
    )
}

export default PostItem
