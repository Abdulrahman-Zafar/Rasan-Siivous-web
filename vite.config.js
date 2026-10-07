import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const pages = ['', 'palvelut', 'meista', 'ukk', 'yhteystiedot', 'tietosuoja']

// Writes robots.txt and sitemap.xml for whatever domain the site is deployed on.
// On Vercel this follows the production domain automatically (custom domain once added).
function seoFiles() {
  return {
    name: 'seo-files',
    generateBundle() {
      const host = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || 'rasansiivousoy.vercel.app'
      const site = (host.startsWith('http') ? host : `https://${host}`).replace(/\/$/, '')
      const urls = pages.map((p) => `  <url><loc>${site}/${p}</loc></url>`).join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`,
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoFiles()],
})
