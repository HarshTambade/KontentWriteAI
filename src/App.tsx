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
import { TopicMap } from './pages/seo/TopicMap';
import { ClickbaitTitle } from './pages/seo/ClickbaitTitle';
import { LongTailKeywords } from './pages/seo/LongTailKeywords';
import { RelatedKeywords } from './pages/seo/RelatedKeywords';
import { KeywordClustering } from './pages/seo/KeywordClustering';
import { RankingGuidelines } from './pages/seo/RankingGuidelines';

// E-commerce pages
import { ProductDescription } from './pages/ecommerce/ProductDescription';
import { TaglineGenerator } from './pages/ecommerce/TaglineGenerator';
import { AmazonDescription } from './pages/ecommerce/AmazonDescription';
import { ProductComparison } from './pages/ecommerce/ProductComparison';
import { ProductUpdates } from './pages/ecommerce/ProductUpdates';
import { BuyingGuide } from './pages/ecommerce/BuyingGuide';
import { OnboardingEmail } from './pages/ecommerce/OnboardingEmail';
import { SalesCampaign } from './pages/ecommerce/SalesCampaign';
import { ThankYou } from './pages/ecommerce/ThankYou';
import { PopupMessage } from './pages/ecommerce/PopupMessage';
import { TestimonialRequest } from './pages/ecommerce/TestimonialRequest';

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
              <Route path="/seo/topic-map" element={<TopicMap />} />
              <Route path="/seo/clickbait" element={<ClickbaitTitle />} />
              <Route path="/seo/long-tail" element={<LongTailKeywords />} />
              <Route path="/seo/related-keywords" element={<RelatedKeywords />} />
              <Route path="/seo/clustering" element={<KeywordClustering />} />
              <Route path="/seo/ranking" element={<RankingGuidelines />} />

              {/* E-commerce Routes */}
              <Route path="/ecommerce/product-description" element={<ProductDescription />} />
              <Route path="/ecommerce/tagline" element={<TaglineGenerator />} />
              <Route path="/ecommerce/amazon-description" element={<AmazonDescription />} />
              <Route path="/ecommerce/product-comparison" element={<ProductComparison />} />
              <Route path="/ecommerce/product-updates" element={<ProductUpdates />} />
              <Route path="/ecommerce/buying-guide" element={<BuyingGuide />} />
              <Route path="/ecommerce/onboarding-email" element={<OnboardingEmail />} />
              <Route path="/ecommerce/sales-campaign" element={<SalesCampaign />} />
              <Route path="/ecommerce/thank-you" element={<ThankYou />} />
              <Route path="/ecommerce/popup" element={<PopupMessage />} />
              <Route path="/ecommerce/testimonial" element={<TestimonialRequest />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;