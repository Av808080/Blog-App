import React from 'react'
import { useRouter } from 'next/router'
import PostContent from '@/Components/posts/PostDetail/PostContent'

const PostDetailPage = () => {
  const { query: { slug } } = useRouter()

  if (!slug)
    return <p>Loading...</p>
  return (
    <div>
      <PostContent title={slug.toString()} />
    </div>
  )
}

export default PostDetailPage
