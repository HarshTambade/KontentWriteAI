import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';

// Blog pages
import { BlogTopicIdeas } from './pages/blog/BlogTopicIdeas';
import { BlogOutline } from './pages/blog/BlogOutline';
import { BlogContent } from './pages/blog/BlogContent';
import { BlogImageBrief } from './pages/blog/BlogImageBrief';

// Tool pages
import { TitleGenerator } from './pages/tools/TitleGenerator';
import { ContentCalendar } from './pages/tools/ContentCalendar';
import { RewriteArticle } from './pages/tools/RewriteArticle';
import { AdvancedBlogPost } from './pages/tools/AdvancedBlogPost';
import { SeoBlogPost } from './pages/tools/SeoBlogPost';
import { HumanWrittenPost } from './pages/tools/HumanWrittenPost';

// YouTube pages
import { VideoIntroScript } from './pages/youtube/VideoIntroScript';
import { ContentPlanner } from './pages/youtube/ContentPlanner';
import { TitleThumbnail } from './pages/youtube/TitleThumbnail';
import { ScriptCreator } from './pages/youtube/ScriptCreator';

// SEO pages
import { MetaDescription } from './pages/seo/MetaDescription';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Dashboard />} />

              {/* Blog Routes */}
              <Route path="/blog/topic-ideas" element={<BlogTopicIdeas />} />
              <Route path="/blog/outline" element={<BlogOutline />} />
              <Route path="/blog/content" element={<BlogContent />} />
              <Route path="/blog/image-brief" element={<BlogImageBrief />} />

              {/* Tool Routes */}
              <Route path="/tools/title-generator" element={<TitleGenerator />} />
              <Route path="/tools/content-calendar" element={<ContentCalendar />} />
              <Route path="/tools/rewrite" element={<RewriteArticle />} />
              <Route path="/tools/advanced-post" element={<AdvancedBlogPost />} />
              <Route path="/tools/seo-post" element={<SeoBlogPost />} />
              <Route path="/tools/human-post" element={<HumanWrittenPost />} />

              {/* YouTube Routes */}
              <Route path="/youtube/intro-script" element={<VideoIntroScript />} />
              <Route path="/youtube/content-planner" element={<ContentPlanner />} />
              <Route path="/youtube/title-thumbnail" element={<TitleThumbnail />} />
              <Route path="/youtube/script-creator" element={<ScriptCreator />} />

              {/* SEO Routes */}
              <Route path="/seo/meta" element={<MetaDescription />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;