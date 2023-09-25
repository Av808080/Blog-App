import { FC } from 'react'
import PostContent from '@/Components/posts/PostDetail/PostContent'
import { getPostdata, postFiles } from '@/lib/post-util'
import { SinglePost } from '@/Types/Type'
import Spinner from '@/Components/shared/Spinner'



const PostDetailPage: FC<SinglePost> = ({ post }) => {
  if (!post)
    return <Spinner />
  return <PostContent post={post} />
}

export default PostDetailPage



export function getStaticProps(context: any) {
  const { params: { slug } } = context
  const path = `${slug}.md`
  const post = getPostdata(path)
  return {
    props: {
      post
    }
  }
}
export function getStaticPaths() {
  const fileNames = postFiles()
  const paths = fileNames.map(filename => {
    const data = filename.replace(/\.md$/, '');
    return { params: { slug: data } }
  })
  return {
    paths,
    fallback: false
  }
}