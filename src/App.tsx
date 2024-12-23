import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { BlogTopicIdeas } from './pages/blog/BlogTopicIdeas';
import { BlogOutline } from './pages/blog/BlogOutline';
import { BlogContent } from './pages/blog/BlogContent';
import { BlogImageBrief } from './pages/blog/BlogImageBrief';
import { TitleGenerator } from './pages/tools/TitleGenerator';
import { ContentCalendar } from './pages/tools/ContentCalendar';
import { RewriteArticle } from './pages/tools/RewriteArticle';
import { AdvancedBlogPost } from './pages/tools/AdvancedBlogPost';
import { SeoBlogPost } from './pages/tools/SeoBlogPost';
import { HumanWrittenPost } from './pages/tools/HumanWrittenPost';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/blog/topic-ideas" element={<BlogTopicIdeas />} />
              <Route path="/blog/outline" element={<BlogOutline />} />
              <Route path="/blog/content" element={<BlogContent />} />
              <Route path="/blog/image-brief" element={<BlogImageBrief />} />
              <Route path="/tools/title-generator" element={<TitleGenerator />} />
              <Route path="/tools/content-calendar" element={<ContentCalendar />} />
              <Route path="/tools/rewrite" element={<RewriteArticle />} />
              <Route path="/tools/advanced-post" element={<AdvancedBlogPost />} />
              <Route path="/tools/seo-post" element={<SeoBlogPost />} />
              <Route path="/tools/human-post" element={<HumanWrittenPost />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;