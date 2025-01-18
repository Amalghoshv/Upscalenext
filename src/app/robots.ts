
export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/private/', '/admin/'],
        },
      ],
      sitemap: 'https://www.upscalenext.cloud/sitemap.xml',
    }
  }