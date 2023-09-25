import { FC } from 'react'
import { AllPosts } from '@/Types/Type'
import PostItem from './posts-item'
import styles from './post-grid.module.scss'

const PostContainer: FC<AllPosts> = ({ posts }) => {
    return (
        <div className={styles.container}>
            {posts && posts.map(post => <PostItem key={post.title} post={post} />)}
        </div>
    )
}

export default PostContainer
