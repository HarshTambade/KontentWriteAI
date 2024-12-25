import React, { useState } from 'react';
import { ToolForm } from '../../components/ui/ToolForm';
import { ResultDisplay } from '../../components/ui/ResultDisplay';
import { generateContent } from '../../lib/gemini';
import { ecommercePrompts } from '../../lib/prompts/ecommercePrompts';
import { useApiKeyStore } from '../../lib/store';

export const AmazonDescription = () => {
  const [product, setProduct] = useState('');
  const [features, setFeatures] = useState('');
  const [keywords, setKeywords] = useState('');
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
        ecommercePrompts.amazonDescription(product, features, keywords)
      );
      setContent(result);
    } catch (err) {
      setError('Failed to generate Amazon description. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToolForm
        title="Amazon Product Description Generator"
        description="Create optimized product descriptions for Amazon listings"
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
            <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">
              Target Keywords
            </label>
            <input
              type="text"
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter target keywords (comma separated)"
              required
            />
          </div>
        </div>
      </ToolForm>

      <ResultDisplay content={content} />
    </>
  );
};