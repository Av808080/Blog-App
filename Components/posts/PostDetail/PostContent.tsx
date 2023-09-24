import { FC } from 'react'
import styles from './postContent.module.scss'
import PostHeader from './PostHeader'

interface Props {
    title: string
}

const PostContent: FC<Props> = ({ title }) => {
    return (
        <section className={styles.article}>
            <div className={styles.main}>
            <PostHeader title={title} image={`GQL1.png`} />
            <p>CONTENT...</p>
            </div>
        </section>
    )
}

export default PostContent
