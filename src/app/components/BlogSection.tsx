'use client';
import ArticleCard from '@/common/components/ArticleCard';
import SectionHeader from '@/common/components/SectionHeader';
import React from 'react';
import { articles } from '../data/articles.data';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../data/animationVariants.data';

const BlogSection = () => {
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <div id="blogs" className="container space-y-12">
      <SectionHeader mainHeading="Read my articles" subheading="BLOG SECTION" />
      <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants}>
        {sortedArticles.map((article, index) => (
          <motion.div
            key={article.id}
            className={index === 0 ? 'row-span-3' : ''}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ArticleCard
              date={article.date}
              description={article.description}
              tags={article.tags}
              title={article.title}
              image={article.image}
              variant={index === 0 ? 'full' : 'minimal'}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BlogSection;
