import React, { useState } from 'react';
import { ToolForm } from '../../components/ui/ToolForm';
import { ResultDisplay } from '../../components/ui/ResultDisplay';
import { generateContent } from '../../lib/gemini';
import { ecommercePrompts } from '../../lib/prompts/ecommercePrompts';
import { useApiKeyStore } from '../../lib/store';

export const ProductUpdates = () => {
  const [product, setProduct] = useState('');
  const [updates, setUpdates] = useState('');
  const [impact, setImpact] = useState('');
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
        ecommercePrompts.updateAnnouncement(product, updates, impact)
      );
      setContent(result);
    } catch (err) {
      setError('Failed to generate update announcement. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToolForm
        title="Product Update Announcement Generator"
        description="Create clear and engaging product update announcements"
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your product name"
              required
            />
          </div>
          <div>
            <label htmlFor="updates" className="block text-sm font-medium text-gray-700">
              What's New
            </label>
            <textarea
              id="updates"
              value={updates}
              onChange={(e) => setUpdates(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="List the new features or changes"
              rows={4}
              required
            />
          </div>
          <div>
            <label htmlFor="impact" className="block text-sm font-medium text-gray-700">
              Customer Impact
            </label>
            <textarea
              id="impact"
              value={impact}
              onChange={(e) => setImpact(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="Describe how these changes benefit customers"
              rows={3}
              required
            />
          </div>
        </div>
      </ToolForm>

      <ResultDisplay content={content} />
    </>
  );
};