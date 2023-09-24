import { FC } from 'react'
import Image from 'next/image'
import { Blog } from '@/Types/Blog'
import styles from './post-item.module.scss'
import Link from 'next/link'

interface Props {
    post: Blog
}
const PostItem: FC<Props> = ({ post }) => {
    const { date, exerpt, image, title } = post
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
        day: 'numeric'
    })
    console.log(exerpt.length)

    return (
        <Link className={styles.link} href={`/posts/${title.replaceAll(' ', '-')}`}>
            <article className={styles.card}>
                <Image src={`/Images/${image}`} className={styles.card_img} alt={title} width={360} height={240} />
                <div className={styles.description}>

                <h3 className={styles.card_title} >{title}</h3>
                <time className={styles.date}>{formattedDate}</time>
                <p>{exerpt}</p>
                </div>
            </article>
        </Link>
    )
}

export default PostItem
