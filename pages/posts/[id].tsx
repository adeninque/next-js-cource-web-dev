import axios, { AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { IPost } from '../../interfaces/post'
import s from '../../styles/Post.module.scss'

interface PostProps {
  post: IPost
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data, status }: AxiosResponse<IPost[]> = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  
    const paths = data.map(({ id }) => ({
      params: {id: id.toString()}
    }))

    return {
      paths,
      fallback: false
    }
  } catch(err) {
    console.log(err)
    return {paths:[], fallback: false}
  }
}

export const getStaticProps: GetStaticProps = async ( context ) => {
  const { id } = context.params as {id : string}

  try {
    const { data, status }: AxiosResponse<IPost> = await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return {
      props: {
        post: data
      }
    }
  } catch(err) {
    return {
      notFound: true
    }
  }
}


const Post = ({ post }: PostProps) => {
  return(
    <>
      <div className={s.post}>
        <div className="container">
        <div className={s.post__wrapper}>
          <div className={s.post__title}>{post.title}</div>
          <p className={s.post__body}>{post.body}</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Post;