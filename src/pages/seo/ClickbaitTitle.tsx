import React, { useState } from 'react';
import { ToolForm } from '../../components/ui/ToolForm';
import { ResultDisplay } from '../../components/ui/ResultDisplay';
import { generateContent } from '../../lib/gemini';
import { useApiKeyStore } from '../../lib/store';

const styleOptions = ['Curiosity', 'Urgency', 'Numbers', 'How-to', 'Emotional'];

export const ClickbaitTitle = () => {
  const [topic, setTopic] = useState('');
  const [style, setStyle] = useState(styleOptions[0]);
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
      const prompt = `Generate 10 clickbait titles for: "${topic}"
        Style: ${style}
        Requirements:
        - Attention-grabbing but not misleading
        - Include power words
        - Optimize for CTR
        - Include emotional triggers
        Format with numbered list.`;
      
      const result = await generateContent(prompt);
      setContent(result);
    } catch (err) {
      setError('Failed to generate titles. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToolForm
        title="Clickbait Title Generator"
        description="Create attention-grabbing titles that drive clicks"
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
              Content Topic
            </label>
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your content topic"
              required
            />
          </div>
          <div>
            <label htmlFor="style" className="block text-sm font-medium text-gray-700">
              Title Style
            </label>
            <select
              id="style"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            >
              {styleOptions.map((option) => (
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