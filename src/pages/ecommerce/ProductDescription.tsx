import React, { useState } from 'react';
import { ToolForm } from '../../components/ui/ToolForm';
import { ResultDisplay } from '../../components/ui/ResultDisplay';
import { generateContent } from '../../lib/gemini';
import { ecommercePrompts } from '../../lib/prompts/ecommercePrompts';
import { useApiKeyStore } from '../../lib/store';

const toneOptions = ['Professional', 'Casual', 'Luxury', 'Technical', 'Friendly'];

export const ProductDescription = () => {
  const [product, setProduct] = useState('');
  const [features, setFeatures] = useState('');
  const [tone, setTone] = useState(toneOptions[0]);
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
        ecommercePrompts.productDescription(product, features, tone)
      );
      setContent(result);
    } catch (err) {
      setError('Failed to generate product description. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToolForm
        title="Product Description Generator"
        description="Create compelling product descriptions that convert"
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
            <label htmlFor="features" className="block text-sm font-medium text-gray-700">
              Key Features
            </label>
            <textarea
              id="features"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter key features (one per line)"
              rows={4}
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
      </ToolForm>

      <ResultDisplay content={content} />
    </>
  );
};