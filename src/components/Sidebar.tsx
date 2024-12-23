import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  PenLine, 
  FileText, 
  Layout, 
  Calendar,
  RefreshCw,
  Search,
  Users,
  Lightbulb,
  ListChecks
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
  }
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-4">
        <nav className="space-y-6">
          {navItems.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-2 mb-2 text-gray-600">
                <section.icon size={18} />
                <h2 className="font-semibold">{section.title}</h2>
              </div>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm rounded-md ${
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
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};