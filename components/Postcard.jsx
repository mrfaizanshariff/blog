import React from 'react'
//to get the date we are using moment library
import moment from 'moment'
import Link from 'next/link'

const Postcard = ({ post }) => {
  console.log(post)
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg "
        />
      </div>
      <h1
        className="cursor:pointer mb-8 text-center text-3xl font-semibold 
        transition duration-300 hover:text-pink-600"
      >
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="mb-8 block w-full items-center justify-around rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-center hover:from-pink-500 hover:to-yellow-500 lg:flex">
        <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <img
            className="rounded-full align-middle"
            src={post.author.photo.url}
            alt={post.author.name}
            height="30px"
            width="30px"
          />
          <p className="inline p-10 align-middle text-gray-700">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
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
          <span>{moment(post.createdAt).format('MMM-DD-YYYY')}</span>
        </div>
      </div>
      <p className="lg:px-=10 mb-8 px-4 text-lg font-normal text-gray-700">
        {post.excerpt}
      </p>
    </div>
  )
}

export default Postcard
