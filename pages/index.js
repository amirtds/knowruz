import FeaturedArticle from "../components/featuredArticle"
import Articles from "../components/articles"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
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
