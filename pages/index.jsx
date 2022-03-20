import { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import { PostCard, PostWidget, Categories } from '../components'
import { getPosts } from '../services'
// const posts=[
//   {title:'react testing',excerpt:'Learn React'},
//   {title:'react testing with tailwind css',excerpt:'Learn React with tailwind css'}]
export default function Home({ posts }) {
  return (
    <div className="container mx-auto mb-8 px-10 ">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

//next js way of fetching api data
export async function getStaticProps() {
  const posts = (await getPosts()) || []

  // return the response as obj
  return {
    props: { posts },
  }
}
// this function return is taken as props in the HOME component
