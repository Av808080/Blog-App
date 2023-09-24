import React from 'react'
import PostContainer from '../posts/posts-grid'
import { data } from '@/data/dummyData'
import styles from './feturedPosts.module.scss'
const FeturedPosts = () => {
  return (
    <section className={styles.feturedPosts}>
      <h2 className={styles.title}>Fetured Posts</h2>
      <PostContainer posts={data} />
    </section>
  )
}

export default FeturedPosts
