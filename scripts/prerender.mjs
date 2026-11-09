// Post-build step: render the React app to static HTML, inject it plus JSON-LD
// into dist/index.html, and write dist/sitemap.xml.
// Run via `npm run build` (after the client and SSR builds).
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const serverDir = path.join(root, 'dist-server')
const readJson = async (p) => JSON.parse(await readFile(path.join(root, p), 'utf8'))

const SITE = 'https://apurvau.dev'
const EMAIL = 'apoorv.umredkar@outlook.com'

const [projects, skills, education] = await Promise.all([
  readJson('src/data/projects.json'),
  readJson('src/data/skills.json'),
  readJson('src/data/education.json'),
])

const personId = `${SITE}/#person`
const person = {
  '@type': 'Person',
  '@id': personId,
  name: 'Apurva Umredkar',
  url: `${SITE}/`,
  image: `${SITE}/apurva-umredkar.jpg`,
  email: `mailto:${EMAIL}`,
  jobTitle: 'AI Software Developer',
  description:
    'AI Engineer and researcher building LLM, RAG and conversational AI systems. AI Software Developer at Vaspian LLC; MS in Computer Science & Engineering (AI/ML), University at Buffalo.',
  worksFor: { '@type': 'Organization', name: 'Vaspian LLC' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'University at Buffalo' },
    { '@type': 'CollegeOrUniversity', name: 'Visvesvaraya National Institute of Technology Nagpur' },
  ],
  hasOccupation: [
    { '@type': 'Occupation', name: 'AI Software Developer' },
    { '@type': 'Occupation', name: 'Senior Analyst' },
  ],
  sameAs: ['https://www.linkedin.com/in/apurva-umredkar/', 'https://github.com/apurvaumredkar'],
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Large Language Models',
    'Retrieval-Augmented Generation',
    'Edge Computing',
    ...skills.categories.flatMap((c) => c.skills.map((s) => s.name)),
  ],
}

const projectList = {
  '@type': 'ItemList',
  name: 'Projects by Apurva Umredkar',
  itemListElement: projects.projects.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'SoftwareSourceCode',
      name: p.title,
      description: typeof p.points[0] === 'string' ? p.points[0] : undefined,
      keywords: p.tech,
      codeRepository: p.githubUrl,
      url: p.huggingFaceUrl || p.githubUrl,
      author: { '@id': personId },
    },
  })),
}

const publication = {
  '@type': 'ScholarlyArticle',
  name: 'Improved search and rescue optimization based load balancing scheme of CCTV footage on edge computing environment',
  datePublished: '2023',
  url: 'https://onlinelibrary.wiley.com/doi/10.1002/cpe.7556',
  sameAs: 'https://doi.org/10.1002/cpe.7556',
  identifier: { '@type': 'PropertyValue', propertyID: 'DOI', value: '10.1002/cpe.7556' },
  publisher: { '@type': 'Organization', name: 'Wiley' },
  isPartOf: { '@type': 'Periodical', name: 'Concurrency and Computation: Practice and Experience' },
  author: [
    { '@type': 'Person', name: 'P. Deshpande' },
    { '@type': 'Person', name: 'S. Dinesh' },
    { '@type': 'Person', name: 'A.G. Kothari' },
    { '@id': personId },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: `${SITE}/`,
      name: 'Apurva Umredkar',
      inLanguage: 'en',
      publisher: { '@id': personId },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE}/#profile`,
      url: `${SITE}/`,
      name: 'Apurva Umredkar | AI Engineer',
      isPartOf: { '@id': `${SITE}/#website` },
      mainEntity: { '@id': personId },
      dateModified: new Date().toISOString().slice(0, 10),
    },
    person,
    projectList,
    publication,
  ],
}
// education.json is validated here so a malformed edit fails the build early
if (!Array.isArray(education.education)) throw new Error('education.json: expected "education" array')

const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href)
const appHtml = render('/')

const indexPath = path.join(dist, 'index.html')
let html = await readFile(indexPath, 'utf8')
if (!html.includes('<!--app-html-->') || !html.includes('<!--head-jsonld-->')) {
  throw new Error('dist/index.html is missing prerender placeholders')
}
// `<` is escaped so the JSON can never close the script tag early
const ld = JSON.stringify(jsonLd).replace(/</g, '\\u003c')
html = html
  .replace('<!--head-jsonld-->', () => `<script type="application/ld+json">${ld}</script>`)
  .replace('<!--app-html-->', () => appHtml)
await writeFile(indexPath, html)

const today = new Date().toISOString().slice(0, 10)
await writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${SITE}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
)

await rm(serverDir, { recursive: true, force: true })
console.log(`Prerendered ${appHtml.length} bytes of HTML into dist/index.html`)
