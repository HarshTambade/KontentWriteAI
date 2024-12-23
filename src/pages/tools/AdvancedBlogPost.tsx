import React, { useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { ContentForm } from '../../components/ui/ContentForm';
import { generateContent } from '../../lib/gemini';
import { advancedPrompts } from '../../lib/prompts/advancedPrompts';
import { useApiKeyStore } from '../../lib/store';

const toneOptions = ['Professional', 'Technical', 'Educational', 'Analytical'];
const audienceOptions = ['Beginners', 'Intermediate', 'Advanced', 'Industry Experts'];

export const AdvancedBlogPost = () => {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [tone, setTone] = useState(toneOptions[0]);
  const [targetAudience, setTargetAudience] = useState(audienceOptions[0]);
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
      const result = await generateContent(
        advancedPrompts.advanced(topic, keywords, tone, targetAudience)
      );
      setContent(result);
    } catch (err) {
      setError('Failed to generate blog post. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Advanced Blog Post Generator"
        description="Create in-depth, research-backed blog posts"
      />

      <ContentForm onSubmit={handleSubmit} loading={loading}>
        <div className="space-y-4">
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
          <div className="grid grid-cols-2 gap-4">
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
            <div>
              <label htmlFor="audience" className="block text-sm font-medium text-gray-700">
                Target Audience
              </label>
              <select
                id="audience"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              >
                {audienceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
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