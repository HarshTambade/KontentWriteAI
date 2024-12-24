import React, { useState } from 'react';
import { ToolForm } from '../../components/ui/ToolForm';
import { ResultDisplay } from '../../components/ui/ResultDisplay';
import { generateContent } from '../../lib/gemini';
import { seoPrompts } from '../../lib/prompts/seoPrompts';
import { useApiKeyStore } from '../../lib/store';

export const KeywordClustering = () => {
  const [keywords, setKeywords] = useState('');
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
      const result = await generateContent(seoPrompts.keywordClustering(keywords));
      setContent(result);
    } catch (err) {
      setError('Failed to generate clusters. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToolForm
        title="Keyword Clustering Tool"
        description="Group related keywords into semantic clusters"
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      >
        <div>
          <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">
            Keywords List
          </label>
          <textarea
            id="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Enter keywords (one per line)"
            rows={6}
            required
          />
        </div>
      </ToolForm>

      <ResultDisplay content={content} />
    </>
  );
};