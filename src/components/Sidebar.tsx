import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ChevronDown,
  ChevronRight,
  PenLine, 
  Layout,
  Youtube,
  Search,
  ShoppingBag
} from 'lucide-react';

const navItems = [
  {
    title: 'Blog Workflow',
    icon: Layout,
    items: [
      { name: 'Topic Ideas', path: '/blog/topic-ideas' },
      { name: 'Blog Outline', path: '/blog/outline' },
      { name: 'Blog Content', path: '/blog/content' },
      { name: 'Image Brief', path: '/blog/image-brief' },
    ]
  },
  {
    title: 'Blog Tools',
    icon: PenLine,
    items: [
      { name: 'Title Generator', path: '/tools/title-generator' },
      { name: 'Content Calendar', path: '/tools/content-calendar' },
      { name: 'Rewrite with Keywords', path: '/tools/rewrite' },
      { name: 'Advanced Blog Post', path: '/tools/advanced-post' },
      { name: 'SEO Optimized Post', path: '/tools/seo-post' },
      { name: 'Human Written Post', path: '/tools/human-post' },
    ]
  },
  {
    title: 'YouTube Tools',
    icon: Youtube,
    items: [
      { name: 'Video Intro Script', path: '/youtube/intro-script' },
      { name: 'Content Planner', path: '/youtube/content-planner' },
      { name: 'Title & Thumbnail Ideas', path: '/youtube/title-thumbnail' },
      { name: 'Script Creator', path: '/youtube/script-creator' },
    ]
  },
  {
    title: 'SEO Tools',
    icon: Search,
    items: [
      { name: 'Meta Title & Description', path: '/seo/meta' },
      { name: 'Topic Map', path: '/seo/topic-map' },
      { name: 'Clickbait Title Generator', path: '/seo/clickbait' },
      { name: 'Long Tail Keywords', path: '/seo/long-tail' },
      { name: 'Related Keywords & OnPage', path: '/seo/related-keywords' },
      { name: 'Keyword Clustering', path: '/seo/clustering' },
      { name: 'Ranking Guidelines', path: '/seo/ranking' },
    ]
  },
  {
    title: 'E-commerce Tools',
    icon: ShoppingBag,
    items: [
      { name: 'Product Description', path: '/ecommerce/product-description' },
      { name: 'Tagline Generator', path: '/ecommerce/tagline' },
      { name: 'Amazon Description', path: '/ecommerce/amazon-description' },
      { name: 'Product Comparison', path: '/ecommerce/product-comparison' },
      { name: 'Product Updates', path: '/ecommerce/product-updates' },
      { name: 'Buying Guide', path: '/ecommerce/buying-guide' },
      { name: 'Onboarding Email', path: '/ecommerce/onboarding-email' },
      { name: 'Sales Campaign', path: '/ecommerce/sales-campaign' },
      { name: 'Thank You Notes', path: '/ecommerce/thank-you' },
      { name: 'Popup Messages', path: '/ecommerce/popup' },
      { name: 'Testimonial Request', path: '/ecommerce/testimonial' },
      { name: 'Loyalty Program', path: '/ecommerce/loyalty' },
      { name: 'Subscription Reminder', path: '/ecommerce/subscription' },
      { name: 'Return/Refund Emails', path: '/ecommerce/return' },
      { name: 'Influencer Outreach', path: '/ecommerce/influencer' },
      { name: 'UGC Ad Scripts', path: '/ecommerce/ugc' },
    ]
  }
];

export const Sidebar = () => {
  const [openSections, setOpenSections] = useState<string[]>(['Blog Workflow']);

  const toggleSection = (title: string) => {
    setOpenSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-4">
        <nav className="space-y-2">
          {navItems.map((section) => (
            <div key={section.title} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full px-2 py-3 text-gray-600 hover:bg-gray-50 rounded-md"
              >
                <div className="flex items-center gap-2">
                  <section.icon size={18} />
                  <span className="font-medium">{section.title}</span>
                </div>
                {openSections.includes(section.title) ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              {openSections.includes(section.title) && (
                <ul className="ml-8 space-y-1 pb-3">
                  {section.items.map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `block px-3 py-2 text-sm rounded-md ${
                            isActive
                              ? 'bg-blue-50 text-blue-700'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};