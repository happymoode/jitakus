import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ARTICLES } from '../src/data/articles.ts';
import { getJapaneseSlug } from '../src/data/slugHelper.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(rootDir, 'public');

interface RouteConfig {
  path: string; // e.g. 'privacy' or 'blog/自宅-520420'
  title: string;
  description: string;
  canonicalUrl: string;
  changefreq?: string;
  priority?: string;
}

const STATIC_ROUTES: RouteConfig[] = [
  {
    path: '',
    title: '自宅 - 仕事 運動',
    description: '【自宅 (jitakus.com)】自宅での仕事・内職・在宅ワーク、自宅での運動・筋トレ、できることや暮らしを分かりやすく解説。安心で快適な自宅生活とおうち時間をサポートします。',
    canonicalUrl: 'https://www.jitakus.com/',
    changefreq: 'daily',
    priority: '1.0',
  },
  {
    path: 'privacy',
    title: 'プライバシーポリシー | 自宅 - 仕事 運動',
    description: 'jitakus.com（自宅 - 仕事 運動）のプライバシーポリシーです。個人情報の取り扱い、Cookie利用、アクセス解析、広告配信（Google AdSense等）に関する方針を明記しています。',
    canonicalUrl: 'https://www.jitakus.com/privacy',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: 'about',
    title: '当サイトについて（運営者情報） | 自宅 - 仕事 運動',
    description: 'jitakus.com（自宅 - 仕事 運動）のサイト概要、運営理念、編集方針、サポート窓口についてご案内します。',
    canonicalUrl: 'https://www.jitakus.com/about',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: 'contact',
    title: 'お問い合わせ | 自宅 - 仕事 運動',
    description: 'jitakus.com（自宅 - 仕事 運動）のお問い合わせ窓口です。ご質問、情報提供、取材依頼、広告掲載などのご連絡はこちらから。',
    canonicalUrl: 'https://www.jitakus.com/contact',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: 'terms',
    title: '利用規約・免責事項 | 自宅 - 仕事 運動',
    description: 'jitakus.com（自宅 - 仕事 運動）の利用規約および免責事項を掲載しています。',
    canonicalUrl: 'https://www.jitakus.com/terms',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: 'category/definition',
    title: '「自宅」の意味・定義・使い方まとめ | 自宅 - 仕事 運動',
    description: '「自宅」の正しい意味や定義、我が家・実家・在宅・自室との違い、公的書類での使い方をわかりやすく解説。',
    canonicalUrl: 'https://www.jitakus.com/category/definition',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    path: 'category/activities',
    title: '自宅でできること・おうち時間の過ごし方 | 自宅 - 仕事 運動',
    description: '自宅でできること・休日の過ごし方・一人時間の暇つぶしアイデア50選を完全網羅。お金をかけずに楽しめるおうち時間ガイド。',
    canonicalUrl: 'https://www.jitakus.com/category/activities',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    path: 'category/work',
    title: '自宅でできる仕事・内職・在宅ワーク完全ガイド | 自宅 - 仕事 運動',
    description: '自宅に届く安全な内職、在宅ワーク、シール貼り、初心者向け副業の始め方や探し方を徹底解説。',
    canonicalUrl: 'https://www.jitakus.com/category/work',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    path: 'category/fitness',
    title: '自宅での運動・静音トレーニング・筋トレ | 自宅 - 仕事 運動',
    description: 'マンションでも響かない静音有酸素運動、器具なし自重筋トレ、毎日のストレッチ習慣化ガイド。',
    canonicalUrl: 'https://www.jitakus.com/category/fitness',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    path: 'category/lifestyle',
    title: '自宅暮らし・節約・おうちご飯 | 自宅 - 仕事 運動',
    description: '自宅でのおうち時間充実法、電気代・光熱費節約術、簡単自炊料理、休日のリラックス習慣まとめ。',
    canonicalUrl: 'https://www.jitakus.com/category/lifestyle',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    path: 'category/navigation',
    title: '自宅からの距離・移動ナビ・帰り方計算 | 自宅 - 仕事 運動',
    description: '「ここから自宅までの距離」「最寄り駅までの徒歩分数」「帰り道のルート計算」など、自宅まわりの距離ナビゲーション。',
    canonicalUrl: 'https://www.jitakus.com/category/navigation',
    changefreq: 'weekly',
    priority: '0.8',
  },
];

// Add article routes
const articleRoutes: RouteConfig[] = ARTICLES.map((article) => {
  const jpSlug = getJapaneseSlug(article.slug);
  return {
    path: `blog/${jpSlug}`,
    title: `${article.title} | 自宅 - 仕事 運動`,
    description: article.summary
      ? `${article.summary.slice(0, 120)}... 自宅 - 仕事 運動 (jitakus.com)`
      : `「${article.title}」について分かりやすく解説。自宅 - 仕事 運動 (jitakus.com)`,
    canonicalUrl: `https://www.jitakus.com/blog/${jpSlug}`,
    changefreq: 'weekly',
    priority: '0.9',
  };
});

const allRoutes = [...STATIC_ROUTES, ...articleRoutes];

function generateHtmlForRoute(templateHtml: string, route: RouteConfig): string {
  let html = templateHtml;

  // Replace title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[\s\S]*?"\s*\/?>/i,
    `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[\s\S]*?"\s*\/?>/i,
    `<link rel="canonical" href="${route.canonicalUrl}" />`
  );

  // Replace OpenGraph Title & URL
  html = html.replace(
    /<meta property="og:title" content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:url" content="${route.canonicalUrl}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />`
  );

  // Replace Twitter Card Title
  html = html.replace(
    /<meta name="twitter:title" content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}" />`
  );

  return html;
}

export function generateStaticFiles() {
  if (!fs.existsSync(distDir)) {
    console.error('Dist directory does not exist! Please run build first.');
    return;
  }

  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html does not exist!');
    return;
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf-8');
  console.log(`Generating static route HTML files for ${allRoutes.length} routes...`);

  // Ensure directories and generate index.html in each route directory
  for (const route of allRoutes) {
    if (!route.path) continue; // Root is already dist/index.html

    const routeDir = path.join(distDir, route.path);
    fs.mkdirSync(routeDir, { recursive: true });

    const htmlContent = generateHtmlForRoute(templateHtml, route);
    fs.writeFileSync(path.join(routeDir, 'index.html'), htmlContent, 'utf-8');

    // Also write encoded variant if non-ASCII (for direct URI encoded crawlers)
    const encodedPath = route.path.split('/').map(segment => encodeURIComponent(segment)).join('/');
    if (encodedPath !== route.path) {
      const encodedRouteDir = path.join(distDir, encodedPath);
      fs.mkdirSync(encodedRouteDir, { recursive: true });
      fs.writeFileSync(path.join(encodedRouteDir, 'index.html'), htmlContent, 'utf-8');
    }
  }

  // Also create aliases for article canonical slugs (e.g. /articles/jitaku-meaning, /blog/jitaku-meaning)
  for (const article of ARTICLES) {
    const articleRoute: RouteConfig = {
      path: `articles/${article.slug}`,
      title: `${article.title} | 自宅 - 仕事 運動`,
      description: article.summary || article.title,
      canonicalUrl: `https://www.jitakus.com/blog/${getJapaneseSlug(article.slug)}`,
    };
    const htmlContent = generateHtmlForRoute(templateHtml, articleRoute);

    const dir1 = path.join(distDir, 'articles', article.slug);
    fs.mkdirSync(dir1, { recursive: true });
    fs.writeFileSync(path.join(dir1, 'index.html'), htmlContent, 'utf-8');

    const dir2 = path.join(distDir, 'blog', article.slug);
    fs.mkdirSync(dir2, { recursive: true });
    fs.writeFileSync(path.join(dir2, 'index.html'), htmlContent, 'utf-8');
  }

  // Generate XML Sitemap
  const today = new Date().toISOString().split('T')[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (r) => `  <url>
    <loc>${r.canonicalUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq || 'weekly'}</changefreq>
    <priority>${r.priority || '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');

  console.log('✅ Static route HTML files and sitemap.xml generated successfully!');
}

generateStaticFiles();
