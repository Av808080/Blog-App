import { FC } from 'react'
import FeturedPosts from './FeturedPosts'
import Hero from './Hero'
import Head from 'next/head'
import { AllPosts } from '@/Types/Type'


const HomePage: FC<AllPosts> = ({ posts }) => {
    return (
        <>
            <Head >
                <title>Next Blog</title>
                <meta name='description' content='Blogs about programming and web development' />
            </Head>
            <Hero />
            <FeturedPosts posts={posts} />

        </>
    )
}

export default HomePage
