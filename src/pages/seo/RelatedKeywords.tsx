import React, { useState } from 'react';
import { ToolForm } from '../../components/ui/ToolForm';
import { ResultDisplay } from '../../components/ui/ResultDisplay';
import { generateContent } from '../../lib/gemini';
import { useApiKeyStore } from '../../lib/store';

export const RelatedKeywords = () => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const apiKey = useApiKeyStore((state) => state.apiKey);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey) {
      setError('Please set your Gemini API key first');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const prompt = `Generate a comprehensive SEO analysis for: "${keyword}"
        Include:
        1. Related keywords and phrases
        2. LSI keywords
        3. On-page optimization tips
        4. Content structure suggestions
        5. Internal linking strategy
        Format in clear sections with markdown.`;
      
      const result = await generateContent(prompt);
      setContent(result);
    } catch (err) {
      setError('Failed to generate analysis. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToolForm
        title="Related Keywords & OnPage SEO"
        description="Get comprehensive keyword analysis and on-page optimization tips"
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      >
        <div>
          <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
            Target Keyword
          </label>
          <input
            type="text"
            id="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Enter your target keyword"
            required
          />
        </div>
      </ToolForm>

      <ResultDisplay content={content} />
    </>
  );
};