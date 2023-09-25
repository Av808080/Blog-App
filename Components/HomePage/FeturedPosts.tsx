import { FC } from 'react'
import PostContainer from '../posts/posts-grid'
import styles from './feturedPosts.module.scss'
import { AllPosts } from '@/Types/Type'

const FeturedPosts: FC<AllPosts> = ({ posts }) => {
  return (
    <section className={styles.feturedPosts}>
      <h2 className={styles.title}>Fetured Posts</h2>
      <PostContainer posts={posts} />
    </section>
  )
}

export default FeturedPosts
