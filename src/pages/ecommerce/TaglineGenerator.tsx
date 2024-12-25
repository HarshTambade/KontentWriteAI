import React, { useState } from 'react';
import { ToolForm } from '../../components/ui/ToolForm';
import { ResultDisplay } from '../../components/ui/ResultDisplay';
import { generateContent } from '../../lib/gemini';
import { ecommercePrompts } from '../../lib/prompts/ecommercePrompts';
import { useApiKeyStore } from '../../lib/store';

const styleOptions = ['Modern', 'Classic', 'Playful', 'Professional', 'Minimalist'];

export const TaglineGenerator = () => {
  const [product, setProduct] = useState('');
  const [target, setTarget] = useState('');
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
      const result = await generateContent(
        ecommercePrompts.tagline(product, target, style)
      );
      setContent(result);
    } catch (err) {
      setError('Failed to generate taglines. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToolForm
        title="Tagline Generator"
        description="Create memorable taglines for your products and brand"
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-700">
              Product/Brand Name
            </label>
            <input
              type="text"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your product or brand name"
              required
            />
          </div>
          <div>
            <label htmlFor="target" className="block text-sm font-medium text-gray-700">
              Target Audience
            </label>
            <input
              type="text"
              id="target"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="Describe your target audience"
              required
            />
          </div>
          <div>
            <label htmlFor="style" className="block text-sm font-medium text-gray-700">
              Tagline Style
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