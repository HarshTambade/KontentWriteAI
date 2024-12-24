import React, { useState } from 'react';
import { ToolForm } from '../../components/ui/ToolForm';
import { ResultDisplay } from '../../components/ui/ResultDisplay';
import { generateContent } from '../../lib/gemini';
import { seoPrompts } from '../../lib/prompts/seoPrompts';
import { useApiKeyStore } from '../../lib/store';

export const LongTailKeywords = () => {
  const [mainKeyword, setMainKeyword] = useState('');
  const [niche, setNiche] = useState('');
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
      const result = await generateContent(seoPrompts.longTailKeywords(mainKeyword, niche));
      setContent(result);
    } catch (err) {
      setError('Failed to generate keywords. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToolForm
        title="Long-Tail Keyword Generator"
        description="Discover valuable long-tail keyword opportunities"
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="mainKeyword" className="block text-sm font-medium text-gray-700">
              Main Keyword
            </label>
            <input
              type="text"
              id="mainKeyword"
              value={mainKeyword}
              onChange={(e) => setMainKeyword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your main keyword"
              required
            />
          </div>
          <div>
            <label htmlFor="niche" className="block text-sm font-medium text-gray-700">
              Industry/Niche
            </label>
            <input
              type="text"
              id="niche"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="e.g., Digital Marketing, Health & Wellness"
              required
            />
          </div>
        </div>
      </ToolForm>

      <ResultDisplay content={content} />
    </>
  );
};