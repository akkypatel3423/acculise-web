import BlogHero from '@/components/blog/BlogHero'
import BlogList from '@/components/blog/BlogList'

export const metadata = {
  title: 'Insights & Technical Intelligence | Acculise Blog',
  description: 'Expert analysis on shifting global tax landscapes, IRS/HMRC updates, and strategic financial management for modern enterprises.',
}

export default function BlogPage() {
  return (
    <>
        <BlogHero />
        <BlogList />
    </>
  )
}
