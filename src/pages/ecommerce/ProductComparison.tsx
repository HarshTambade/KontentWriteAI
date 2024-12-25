import React, { useState } from 'react';
import { ToolForm } from '../../components/ui/ToolForm';
import { ResultDisplay } from '../../components/ui/ResultDisplay';
import { generateContent } from '../../lib/gemini';
import { ecommercePrompts } from '../../lib/prompts/ecommercePrompts';
import { useApiKeyStore } from '../../lib/store';

export const ProductComparison = () => {
  const [products, setProducts] = useState(['', '']);
  const [criteria, setCriteria] = useState('');
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const apiKey = useApiKeyStore((state) => state.apiKey);

  const handleAddProduct = () => {
    setProducts([...products, '']);
  };

  const handleRemoveProduct = (index: number) => {
    if (products.length > 2) {
      const newProducts = [...products];
      newProducts.splice(index, 1);
      setProducts(newProducts);
    }
  };

  const handleProductChange = (index: number, value: string) => {
    const newProducts = [...products];
    newProducts[index] = value;
    setProducts(newProducts);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey) {
      setError('Please set your Gemini API key first');
      return;
    }

    if (products.some(p => !p.trim())) {
      setError('Please fill in all product names');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const result = await generateContent(
        ecommercePrompts.productComparison(products, criteria)
      );
      setContent(result);
    } catch (err) {
      setError('Failed to generate comparison. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToolForm
        title="Product Comparison Generator"
        description="Create detailed product comparisons"
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Products to Compare
            </label>
            {products.map((product, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={product}
                  onChange={(e) => handleProductChange(index, e.target.value)}
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder={`Product ${index + 1}`}
                  required
                />
                {products.length > 2 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveProduct(index)}
                    className="rounded-md bg-red-100 px-3 py-2 text-red-600 hover:bg-red-200"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            {products.length < 5 && (
              <button
                type="button"
                onClick={handleAddProduct}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                + Add another product
              </button>
            )}
          </div>
          <div>
            <label htmlFor="criteria" className="block text-sm font-medium text-gray-700">
              Comparison Criteria
            </label>
            <textarea
              id="criteria"
              value={criteria}
              onChange={(e) => setCriteria(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter comparison criteria (e.g., price, features, quality)"
              rows={4}
              required
            />
          </div>
        </div>
      </ToolForm>

      <ResultDisplay content={content} />
    </>
  );
};