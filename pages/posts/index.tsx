import axios, { AxiosResponse } from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import { IPost } from "../../interfaces/post";
import s from '../../styles/Posts.module.scss'

interface PostsProps {
  posts: IPost[] | null
}

export const getStaticProps = async () => {
  try {
    const { data, status }: AxiosResponse<IPost[]> = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
    return {
      props: { posts: data}
    }
  } catch(err) {
    return {
      notFound: true
    }
  }
}

const Posts = ({ posts }: PostsProps) => {
  return(
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <div className={s.posts}>
        <div className="container">
          <div className={s.posts__body}>
            <div className={s.posts__title}>Posts list:</div>
            {posts ? posts.map((post) => 
              <div className={[s.post, s.posts__post].join(' ')}>
                <Link 
                className={s.post__title}
                href={`/posts/${post.id}`}
                >{post.title}</Link>
            </div>
            ) : <div className={s.posts__err}>No posts avialable</div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Posts;