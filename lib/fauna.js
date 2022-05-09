import { GraphQLClient, gql } from 'graphql-request'

const graphQLClient = new GraphQLClient('https://graphql.fauna.com/graphql', {
  headers: {
    authorization: `Bearer ${process.env.FAUNA_ADMIN_KEY}`,
  },
})

const fetchArticles = async () => {
    const query = gql`
    mutation {
        createArticle(data:{
            title: "test article 2"
            content: "my content"
            published: true
            publishedAt: "today"
            slug: "test-blog"
            category: [TAILWINDCSS,NEXTJS]
        }
        ){
            title
        }
    }
    `
    const response = await graphQLClient.request(query)
    return response
}
export default fetchArticles;