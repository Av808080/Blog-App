import { FC } from 'react'
import { getfeturedPosts } from "@/lib/post-util"
import { AllPosts } from '@/Types/Type'
import HomePage from '@/Components/HomePage/HomePage'


const Home: FC<AllPosts> = ({ posts }) => {
  return <HomePage posts={posts} />
}
export default Home


export async function getStaticProps() {
  const feturedPosts = getfeturedPosts()
  return {
    props: {
      posts: feturedPosts
    }
  }
}