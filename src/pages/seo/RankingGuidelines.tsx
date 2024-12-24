import React, { useState } from 'react';
import { ToolForm } from '../../components/ui/ToolForm';
import { ResultDisplay } from '../../components/ui/ResultDisplay';
import { generateContent } from '../../lib/gemini';
import { useApiKeyStore } from '../../lib/store';

const contentTypes = [
  'Blog Post',
  'Product Page',
  'Service Page',
  'Landing Page',
  'Category Page'
];

export const RankingGuidelines = () => {
  const [keyword, setKeyword] = useState('');
  const [contentType, setContentType] = useState(contentTypes[0]);
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
      const prompt = `Create comprehensive ranking guidelines for: "${keyword}"
        Content Type: ${contentType}
        Include:
        1. Content optimization tips
        2. Technical SEO requirements
        3. On-page ranking factors
        4. Off-page optimization strategy
        5. User experience considerations
        Format with clear sections and actionable steps.`;
      
      const result = await generateContent(prompt);
      setContent(result);
    } catch (err) {
      setError('Failed to generate guidelines. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToolForm
        title="Ranking Guidelines Generator"
        description="Get actionable SEO guidelines for better rankings"
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      >
        <div className="space-y-4">
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
          <div>
            <label htmlFor="contentType" className="block text-sm font-medium text-gray-700">
              Content Type
            </label>
            <select
              id="contentType"
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            >
              {contentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </ToolForm>

      <ResultDisplay content={content} />
    </>
  );
};