import React, { useState } from 'react';
import { ToolForm } from '../../components/ui/ToolForm';
import { ResultDisplay } from '../../components/ui/ResultDisplay';
import { generateContent } from '../../lib/gemini';
import { youtubePrompts } from '../../lib/prompts/youtubePrompts';
import { useApiKeyStore } from '../../lib/store';

const styleOptions = ['Tutorial', 'Vlog', 'Review', 'Educational', 'Entertainment'];
const durationOptions = ['5-7 minutes', '8-10 minutes', '10-15 minutes', '15-20 minutes'];

export const ScriptCreator = () => {
  const [topic, setTopic] = useState('');
  const [style, setStyle] = useState(styleOptions[0]);
  const [duration, setDuration] = useState(durationOptions[1]);
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
      const result = await generateContent(youtubePrompts.scriptCreator(topic, duration, style));
      setContent(result);
    } catch (err) {
      setError('Failed to generate script. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToolForm
        title="YouTube Script Creator"
        description="Create detailed, engaging scripts for your videos"
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
              Video Topic
            </label>
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your video topic"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="style" className="block text-sm font-medium text-gray-700">
                Video Style
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
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                Video Duration
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
        </div>
      </ToolForm>

      <ResultDisplay content={content} />
    </>
  );
};