import React, { useState } from 'react';
import { ToolForm } from '../../components/ui/ToolForm';
import { ResultDisplay } from '../../components/ui/ResultDisplay';
import { generateContent } from '../../lib/gemini';
import { youtubePrompts } from '../../lib/prompts/youtubePrompts';
import { useApiKeyStore } from '../../lib/store';

const durationOptions = ['1 month', '3 months', '6 months', '1 year'];

export const ContentPlanner = () => {
  const [niche, setNiche] = useState('');
  const [duration, setDuration] = useState(durationOptions[0]);
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
      const result = await generateContent(youtubePrompts.contentPlanner(niche, duration));
      setContent(result);
    } catch (err) {
      setError('Failed to generate content plan. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToolForm
        title="YouTube Content Planner"
        description="Create a strategic content calendar for your YouTube channel"
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="niche" className="block text-sm font-medium text-gray-700">
              Channel Niche
            </label>
            <input
              type="text"
              id="niche"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="e.g., Tech Reviews, Cooking, Fitness"
              required
            />
          </div>
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
              Plan Duration
            </label>
            <select
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            >
              {durationOptions.map((option) => (
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