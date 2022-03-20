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
