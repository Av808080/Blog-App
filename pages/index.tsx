import { FC } from 'react'
import FeturedPosts from "@/Components/HomePage/FeturedPosts"
import Hero from "@/Components/HomePage/Hero"
import { getfeturedPosts } from "@/lib/post-util"
import { AllPosts } from '@/Types/Type'


const Home: FC<AllPosts> = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeturedPosts posts={posts} />
    </>
  )
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