import { FC } from 'react'
import Image from 'next/image'
import styles from './postHeader.module.scss'

interface Props {
    title: string
    image: string
}
const PostHeader: FC<Props> = ({ title, image }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{title.replaceAll('-' ,' ')} </h1>
            <Image src={`/Images/${image}`} className={styles.image}
             alt={title} width={200} height={150} />
        </header>
    )
}

export default PostHeader
