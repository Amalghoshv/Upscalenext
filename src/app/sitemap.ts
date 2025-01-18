import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.upscalenext.cloud',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://www.upscalenext.cloud/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.upscalenext.cloud/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: 'https://www.upscalenext.cloud/projects',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    // Add other pages as needed
  ]
}