import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'
const PostWidget = ({ categories, slug }) => {
  const [relatedPost, setrelatedPost] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((res) => setrelatedPost(res))
    } else {
      getRecentPosts().then((res) => setrelatedPost(res))
    }
  }, [slug])

  console.log(relatedPost)

  return (
    <div className="mb-8 max-h-80 overflow-y-scroll rounded-lg bg-white p-8 shadow-lg">
      <h3 className=" mb-4 border-b text-xl font-semibold ">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPost.map((post, index) => (
        <div
          key={index}
          className="flex cursor-pointer flex-col items-center justify-center  pb-4"
        >
          <div className="border-b ">
            <img
              src={post.featuredImage.url}
              width="60px"
              height="60px"
              className="w-full rounded-t-lg object-cover object-top hover:shadow-lg hover:shadow-cyan-500/50  lg:rounded-lg"
            />
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-6 w-6 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p>{moment(post.createdAt).format('MMM - DD - YY')}</p>
            </div>
            <Link href={`/post/${post.slug}`} alt={post.title}>
              <h4 className=" pt-2 text-center font-mono font-semibold text-gray-700 hover:text-pink-700">
                {post.title}
              </h4>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
