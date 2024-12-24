import React, { useState } from 'react';
import { ToolForm } from '../../components/ui/ToolForm';
import { ResultDisplay } from '../../components/ui/ResultDisplay';
import { generateContent } from '../../lib/gemini';
import { seoPrompts } from '../../lib/prompts/seoPrompts';
import { useApiKeyStore } from '../../lib/store';

const intentOptions = ['Informational', 'Commercial', 'Navigational', 'Transactional'];

export const TopicMap = () => {
  const [keyword, setKeyword] = useState('');
  const [intent, setIntent] = useState(intentOptions[0]);
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
      const result = await generateContent(seoPrompts.topicMap(keyword, intent));
      setContent(result);
    } catch (err) {
      setError('Failed to generate topic map. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToolForm
        title="Topic Map Generator"
        description="Create comprehensive topic clusters and content hierarchies"
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
              Main Keyword
            </label>
            <input
              type="text"
              id="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your main keyword"
              required
            />
          </div>
          <div>
            <label htmlFor="intent" className="block text-sm font-medium text-gray-700">
              Search Intent
            </label>
            <select
              id="intent"
              value={intent}
              onChange={(e) => setIntent(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            >
              {intentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
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