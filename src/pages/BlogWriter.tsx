import React, { useState } from 'react';
import { generateContent } from '../lib/gemini';
import { useApiKeyStore } from '../lib/store';

export const BlogWriter = () => {
  const [topic, setTopic] = useState('');
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
      const prompt = `Write a comprehensive, SEO-optimized blog post about "${topic}". 
        The article should be between 3,000 to 5,000 words, well-structured with headings, 
        and include current information. Format the output in markdown.`;
      
      const result = await generateContent(prompt);
      setContent(result);
    } catch (err) {
      setError('Failed to generate content. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Blog Writer</h1>
        <p className="mt-2 text-gray-600">
          Generate comprehensive, SEO-optimized articles with just one click
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
            Blog Topic
          </label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Enter your blog topic"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-400"
        >
          {loading ? 'Generating...' : 'Generate Blog Post'}
        </button>
      </form>

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