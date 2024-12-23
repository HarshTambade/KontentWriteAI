import React, { useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { ContentForm } from '../../components/ui/ContentForm';
import { generateContent } from '../../lib/gemini';
import { toolPrompts } from '../../lib/prompts/toolPrompts';
import { useApiKeyStore } from '../../lib/store';

const toneOptions = [
  'Professional',
  'Casual',
  'Friendly',
  'Authoritative',
  'Educational',
  'Conversational'
];

export const RewriteArticle = () => {
  const [content, setContent] = useState('');
  const [keywords, setKeywords] = useState('');
  const [tone, setTone] = useState(toneOptions[0]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
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
      const response = await generateContent(toolPrompts.rewrite(content, keywords, tone));
      setResult(response);
    } catch (err) {
      setError('Failed to rewrite content. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Article Rewriter"
        description="Rewrite your content with specific keywords and tone"
      />

      <ContentForm onSubmit={handleSubmit} loading={loading}>
        <div className="space-y-4">
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Original Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="Paste your content here"
              rows={8}
              required
            />
          </div>
          <div>
            <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">
              Target Keywords
            </label>
            <input
              type="text"
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter keywords separated by commas"
              required
            />
          </div>
          <div>
            <label htmlFor="tone" className="block text-sm font-medium text-gray-700">
              Writing Tone
            </label>
            <select
              id="tone"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            >
              {toneOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </ContentForm>

      {error && (
        <div className="rounded-md bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      {result && (
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <pre className="whitespace-pre-wrap">{result}</pre>
        </div>
      )}
    </div>
  );
};