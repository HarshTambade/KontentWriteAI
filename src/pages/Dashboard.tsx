import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PenLine, 
  Layout, 
  Youtube,
  Search,
  Zap,
  Sparkles
} from 'lucide-react';

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
    icon: Zap,
    title: 'Quick Generation',
    description: 'Instantly generate titles, meta descriptions, and keywords.',
    link: '/tools/title-generator',
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
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to KontentWriteAI
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your all-in-one AI content creation suite. Generate blog posts, 
          YouTube scripts, SEO content, and more with advanced AI technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Link
              key={feature.title}
              to={feature.link}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className={`absolute top-0 right-0 w-20 h-20 -mr-6 -mt-6 rounded-full ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-2 rounded-lg ${feature.color} bg-opacity-10`}>
                    <Icon className={`h-6 w-6 ${feature.color} text-white`} />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h2>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Start Creating Amazing Content
        </h2>
        <p className="text-gray-600">
          Choose any tool from the sidebar to begin your content creation journey.
        </p>
      </div>
    </div>
  );
};