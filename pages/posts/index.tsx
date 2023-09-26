import { FC } from 'react'
import PostContainer from '@/Components/posts/posts-grid'
import { getAllPosts } from '@/lib/post-util'
import { AllPosts } from '@/Types/Type'
import Head from 'next/head'

const AllPostsPage: FC<AllPosts> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name='' content='A list of all front-end-related tutorilas and posts!' />
      </Head>
      <PostContainer posts={posts} />
    </>
  )
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