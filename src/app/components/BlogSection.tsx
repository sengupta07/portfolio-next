import ArticleCard from '@/common/components/ArticleCard';
import SectionHeader from '@/common/components/SectionHeader';
import React from 'react';
import { articles } from '../data/articles.data';

const BlogSection = () => {
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <div className="container space-y-12">
      <SectionHeader mainHeading="Read my articles" subheading="BLOG SECTION" />
      <div className="grid md:grid-cols-2 gap-8">
        {sortedArticles.map((article, index) => (
          <div key={article.id} className={index === 0 ? 'row-span-3' : ''}>
            <ArticleCard
              date={article.date}
              description={article.description}
              tags={article.tags}
              title={article.title}
              image={article.image}
              variant={index === 0 ? 'full' : 'minimal'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
