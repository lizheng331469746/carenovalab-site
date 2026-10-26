'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { asset } from '@/lib/assets';
import { insightCategories, insights } from '@/lib/insights';

export function InsightsLibrary() {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();

  const filteredInsights = useMemo(() => {
    if (!normalizedQuery) return insights;
    return insights.filter((article) =>
      `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  return (
    <main className="insights-library">
      <section className="insights-library-hero">
        <div className="container">
          <span className="insights-library-kicker">CARENOVA LAB KNOWLEDGE CENTER</span>
          <h1>Beauty Business Intelligence</h1>
          <p>Practical insights for beauty brand development, formulation, packaging, manufacturing and market entry.</p>
          <label className="insights-library-search">
            <span className="sr-only">Search insights</span>
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search insights..." />
            <Search aria-hidden="true" size={20} strokeWidth={1.7} />
          </label>
        </div>
      </section>

      <nav className="insights-library-nav" aria-label="Insight categories">
        <div className="container">
          <Link className="is-active" href="/insights">ALL INSIGHTS</Link>
          {insightCategories.map((category) => (
            <Link href={`/insights/${category.slug}`} key={category.slug}>{category.label.toUpperCase()}</Link>
          ))}
        </div>
      </nav>

      <section className="insights-library-results" aria-live="polite">
        <div className="container">
          {filteredInsights.length ? (
            <div className="insights-library-grid">
              {filteredInsights.map((article) => (
                <Link className="insights-library-card" href={`/insights/${article.slug}`} key={article.slug}>
                  <img src={asset(article.image)} alt={article.title} />
                  <div className="insights-library-card-copy">
                    <span>{article.category}</span>
                    <h2>{article.title}</h2>
                    <p>{article.excerpt}</p>
                    <div><time>{article.published}</time><strong>{article.readTime} · Read More</strong></div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="insights-library-empty"><h2>No matching insights found.</h2><p>Try a different keyword.</p></div>
          )}
        </div>
      </section>
    </main>
  );
}

