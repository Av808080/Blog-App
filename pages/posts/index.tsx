import { FC } from 'react'
import PostContainer from '@/Components/posts/posts-grid'
import { getAllPosts } from '@/lib/post-util'
import { AllPosts } from '@/Types/Type'

const AllPostsPage: FC<AllPosts> = ({ posts }) => {
  return <PostContainer posts={posts} />
}

export default AllPostsPage

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts
    }
  }
}