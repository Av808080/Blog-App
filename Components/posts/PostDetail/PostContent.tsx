import { FC } from 'react'
import Image from 'next/image'
import styles from './postContent.module.scss'
import PostHeader from './PostHeader'
import ReactMarkdown from 'react-markdown'
import { SinglePost } from '@/Types/Type'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import coldarkDark from 'react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'

const PostContent: FC<SinglePost> = ({ post }) => {
    SyntaxHighlighter.registerLanguage('js', js)
    const customComponents = {
        img: ({ ...props }) => {
            return <Image className={styles.image} src={`/Images/Posts/${props.src}`} alt={props.alt} width={600} height={300} />
        },
        code: ({ ...props }) => {
            const [_code] = (props.children);
            return <SyntaxHighlighter language={props.className.split('-')[1]} style={coldarkDark}  >{_code} </SyntaxHighlighter>
        }
    }
    return (
        <section className={styles.article}>
            <div className={styles.main}>
                <PostHeader post={post} />
                <ReactMarkdown components={customComponents} className={styles.content}>{post.content}</ReactMarkdown>
            </div>
        </section>
    )
}

export default PostContent
