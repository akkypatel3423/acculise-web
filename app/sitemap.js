import { blogPosts } from '@/components/blog/BlogList'
import { jobsList } from '@/components/careers/CareersList'
import { industriesData } from '@/components/industries/industriesData'

export default function sitemap() {
  const baseUrl = 'https://acculise.com'

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/careers',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms-conditions',
    '/services/us-taxation',
    '/services/uk-taxation',
    '/services/accounting',
    '/services/bookkeeping',
    '/services/payroll',
    '/services/foreign-filings',
    '/services/it-services',
    '/services/cfo-advisory',
    '/services/business-formation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const industryRoutes = industriesData.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const careerRoutes = jobsList.map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...blogRoutes, ...industryRoutes, ...careerRoutes]
}
