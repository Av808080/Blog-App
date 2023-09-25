import { FC } from 'react'
import styles from './postContent.module.scss'
import PostHeader from './PostHeader'
import ReactMarkdown from 'react-markdown'
import { SinglePost } from '@/Types/Type'

const PostContent: FC<SinglePost> = ({ post }) => {
    return (
        <section className={styles.article}>
            <div className={styles.main}>
                <PostHeader post={post} />
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </section>
    )
}

export default PostContent
