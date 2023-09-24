import { FC } from 'react'
import { Blog } from '@/Types/Blog'
import PostItem from './posts-item'
import styles from './post-grid.module.scss'
interface Props {
    posts: Blog[]
}

const PostContainer: FC<Props> = ({ posts }) => {
    return (
        <div className={styles.container}>
            {posts && posts.map(post => <PostItem key={post.title} post={post} />)}
        </div>
    )
}

export default PostContainer
