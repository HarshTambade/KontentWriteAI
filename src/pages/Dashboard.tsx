import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PenLine, 
  Image, 
  Languages, 
  MessageSquare, 
  FileText,
  Palette
} from 'lucide-react';

const features = [
  {
    icon: PenLine,
    title: 'AI Blog Writer',
    description: 'Generate SEO-optimized articles from 3,000 to 5,000 words with real-time data.',
    link: '/blog-writer'
  },
  {
    icon: Image,
    title: 'AI Image Generation',
    description: 'Create high-quality images from text descriptions in various artistic styles.',
    link: '/image-generator'
  },
  {
    icon: Languages,
    title: 'Multilingual Support',
    description: 'Generate content in over 30 languages with 25 different tones.',
    link: '/languages'
  },
  {
    icon: MessageSquare,
    title: 'AI Support Tools',
    description: 'Generate customer support content and solutions efficiently.',
    link: '/support-tools'
  },
  {
    icon: FileText,
    title: 'Content Templates',
    description: 'Access 250+ AI-driven templates for diverse content types.',
    link: '/templates'
  },
  {
    icon: Palette,
    title: 'Specialized Tools',
    description: 'Use specialized tools for specific content creation needs.',
    link: '/specialized-tools'
  }
];

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to KontentWriteAI</h1>
        <p className="mt-2 text-lg text-gray-600">
          Your all-in-one AI-powered content creation platform
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Link
              key={feature.title}
              to={feature.link}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <Icon className="h-8 w-8 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">{feature.title}</h2>
              </div>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};