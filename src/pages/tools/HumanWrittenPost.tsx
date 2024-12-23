import React, { useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { ContentForm } from '../../components/ui/ContentForm';
import { generateContent } from '../../lib/gemini';
import { advancedPrompts } from '../../lib/prompts/advancedPrompts';
import { useApiKeyStore } from '../../lib/store';

const styleOptions = [
  'Storytelling',
  'Personal Experience',
  'Case Study',
  'Interview Style'
];

const perspectiveOptions = [
  'First Person',
  'Industry Expert',
  'Researcher',
  'Practitioner'
];

export const HumanWrittenPost = () => {
  const [topic, setTopic] = useState('');
  const [style, setStyle] = useState(styleOptions[0]);
  const [perspective, setPerspective] = useState(perspectiveOptions[0]);
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
        advancedPrompts.human(topic, style, perspective)
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
        title="Human-Written Style Blog Generator"
        description="Create naturally flowing, conversational blog content"
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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="style" className="block text-sm font-medium text-gray-700">
                Writing Style
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
              <label htmlFor="perspective" className="block text-sm font-medium text-gray-700">
                Writing Perspective
              </label>
              <select
                id="perspective"
                value={perspective}
                onChange={(e) => setPerspective(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              >
                {perspectiveOptions.map((option) => (
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