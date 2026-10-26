import Link from 'next/link';
import { asset } from '@/lib/assets';
import { insightCategories, insights, type InsightCategory } from '@/lib/insights';

export function InsightsCategoryFeed({ category }: { category: InsightCategory }) {
  const articles = insights.filter((article) => article.categorySlug === category.slug);

  return (
    <main className="insights-category-page">
      <section className="insights-category-heading">
        <div className="container">
          <Link href="/insights">Knowledge Center</Link>
          <h1>{category.label}</h1>
          <p>{category.description}</p>
        </div>
      </section>

      <nav className="insights-library-nav" aria-label="Insight categories">
        <div className="container">
          <Link href="/insights">ALL INSIGHTS</Link>
          {insightCategories.map((item) => (
            <Link className={item.slug === category.slug ? 'is-active' : ''} href={`/insights/${item.slug}`} key={item.slug}>
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>

      <section className="insights-category-results">
        <div className="container">
          <div className="insights-category-shell">
            {articles.length ? (
              <div className="insights-news-feed">
                {articles.map((article) => (
                  <Link className="insights-news-row" href={`/insights/${article.slug}`} key={article.slug}>
                    <div>
                      <span className="insights-news-meta">{article.readTime.toUpperCase()}</span>
                      <h2>{article.title}</h2>
                      <p>{article.excerpt}</p>
                      <time>{article.published}</time>
                    </div>
                    <img src={asset(article.image)} alt="" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="insights-category-empty">
                <h2>New insights are being prepared.</h2>
                <p>Explore all articles while we add more guidance to this category.</p>
                <Link href="/insights">View All Insights</Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
