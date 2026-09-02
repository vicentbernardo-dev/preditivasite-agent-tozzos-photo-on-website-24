import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { INSIGHTS } from '../data/mockData';
import { InsightArticle } from '../types';
import { PageRoute } from './Navbar';

interface InsightsSectionProps {
  onSelectArticle: (article: InsightArticle) => void;
  onNavigatePage?: (page: PageRoute) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ 
  onSelectArticle,
  onNavigatePage 
}) => {
  return (
    <section id="insights" className="relative py-24 lg:py-32 bg-[#000604] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-row items-center justify-between gap-4 mb-14">
          <h2 className="font-familjen text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#EFEFEF] uppercase leading-tight tracking-tight">
            Insights
          </h2>

          <button
            onClick={() => {
              if (onNavigatePage) {
                onNavigatePage('blog');
              } else {
                onSelectArticle(INSIGHTS[0]);
              }
            }}
            className="font-familjen text-[#0DF205] hover:text-white text-sm sm:text-base font-medium flex items-center gap-2 transition-colors cursor-pointer group"
          >
            <span>Ver todas as matérias</span>
            <div className="w-5 h-5 rounded-full bg-[#0DF205]/20 flex items-center justify-center group-hover:bg-[#0DF205] group-hover:text-black transition-colors">
              <ArrowRight className="w-3 h-3 text-[#0DF205] group-hover:text-black" />
            </div>
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => {
                if (onNavigatePage) {
                  onNavigatePage('blog-post');
                } else {
                  onSelectArticle(article);
                }
              }}
              className="relative flex flex-col justify-between rounded-xl bg-[#111815] border border-white/10 overflow-hidden group hover:border-[#0DF205]/60 transition-all duration-300 cursor-pointer shadow-xl"
            >
              <div>
                {/* Image Header with Figma Badge */}
                <div className="relative h-56 overflow-hidden bg-black/40">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111815] via-transparent to-black/30" />

                  {/* Badge from Figma design: Top left Neon pill with category */}
                  <div className="absolute top-4 left-4 bg-[#0DF205] text-[#000604] font-familjen text-xs font-bold px-3 py-1 rounded shadow-md">
                    {article.tag}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 text-xs text-white/50 mb-2 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <div className="text-xs text-[#0DF205] font-familjen font-medium uppercase tracking-wider mb-2">
                    {article.tag}
                  </div>

                  {/* Title from Figma */}
                  <h3 className="font-familjen text-2xl sm:text-[26px] font-bold text-[#EFEFEF] group-hover:text-[#0DF205] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="font-familjen text-sm text-[#EFEFEF]/70 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Bottom "Leia a matéria" link */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[#0DF205] font-familjen text-base font-medium group-hover:underline">
                  <span>Leia a matéria</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
