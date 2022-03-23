import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            excerpt
            createdAt
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            title
            slug
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `
  // now getting the request
  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges
}

export const getRecentPosts = async () => {
  const query = gql`
    query getPostDetails(){
      posts(
        orderBy: createdAt_ASC,
        last:3
      ){
        title
        slug
        createdAt
        featuredImage{
          url
        }
      }
    }
  `
  const res = await request(graphqlAPI, query)
  return res.posts
}

export const getSimilarPosts = async () => {
  // to pass parameters to query we need to use $ for var name and specify the type.
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: "$slug"
          AND: { categories_some: { slug_in: "$categories" } }
        }
        last: 3
      ) {
        title
        slug
        createdAt
        featuredImage {
          url
        }
      }
    }
  `
  const res = await request(graphqlAPI, query)
  return res.posts
}
