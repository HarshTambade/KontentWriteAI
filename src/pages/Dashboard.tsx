import React from 'react';
import { 
  PenLine, 
  Layout, 
  Youtube,
  Search,
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { FeatureCard } from '../components/home/FeatureCard';

const features = [
  {
    icon: Layout,
    title: 'Blog Workflow',
    description: 'Streamline your blog creation process from ideation to publication.',
    link: '/blog/topic-ideas',
    color: 'bg-blue-500'
  },
  {
    icon: PenLine,
    title: 'Advanced Blog Tools',
    description: 'Professional tools for creating SEO-optimized and engaging content.',
    link: '/tools/advanced-post',
    color: 'bg-purple-500'
  },
  {
    icon: Youtube,
    title: 'YouTube Content Creation',
    description: 'Create compelling video scripts and optimize your YouTube content.',
    link: '/youtube/content-planner',
    color: 'bg-red-500'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Comprehensive SEO tools to improve your content visibility.',
    link: '/seo/meta',
    color: 'bg-green-500'
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Tools',
    description: 'Generate persuasive product descriptions and marketing content.',
    link: '/ecommerce/product-description',
    color: 'bg-yellow-500'
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Writing',
    description: 'Transform your ideas into polished, engaging content.',
    link: '/tools/human-post',
    color: 'bg-indigo-500'
  }
];

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Start Creating Amazing Content
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose any tool from the sidebar to begin your content creation journey.
            Our AI-powered tools will help you create engaging, SEO-optimized content
            in minutes.
          </p>
        </div>
      </div>
    </div>
  );
};