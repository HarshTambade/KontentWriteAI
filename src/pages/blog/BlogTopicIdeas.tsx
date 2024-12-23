import React, { useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { ContentForm } from '../../components/ui/ContentForm';
import { generateContent } from '../../lib/gemini';
import { useApiKeyStore } from '../../lib/store';

export const BlogTopicIdeas = () => {
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
      const prompt = `Generate 10 engaging and trending blog topic ideas for the ${niche} niche. 
        For each topic, include:
        1. The main title
        2. A brief description of what the article would cover
        3. Why it would be interesting to readers
        Format the output in markdown.`;
      
      const result = await generateContent(prompt);
      setContent(result);
    } catch (err) {
      setError('Failed to generate topics. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Blog Topic Ideas"
        description="Generate engaging blog topic ideas for your niche"
      />

      <ContentForm onSubmit={handleSubmit} loading={loading}>
        <div>
          <label htmlFor="niche" className="block text-sm font-medium text-gray-700">
            Your Niche
          </label>
          <input
            type="text"
            id="niche"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="e.g., Digital Marketing, Health & Wellness, Technology"
            required
          />
        </div>
      </ContentForm>

      {error && (
        <div className="rounded-md bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      {content && (
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <pre className="whitespace-pre-wrap">{content}</pre>
        </div>
      )}
    </div>
  );
};