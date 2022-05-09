import FeaturedArticle from "../components/featuredArticle"
import Articles from "../components/articles"
import Header from "../components/header"
import Footer from "../components/footer"
import fetchArticles from "../lib/fauna"

export default function Home(articles) {
  console.log(articles.articles)
  return (
    <div className="bg-white dark:bg-slate-900">
    <Header />
    {/* Featured article */}
    <FeaturedArticle />
    {/* Articles */}
    <Articles />
    <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const articles = await fetchArticles()
  return {
    props: {
      articles,
    },
  }
}
