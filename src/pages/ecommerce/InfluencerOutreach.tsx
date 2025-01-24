import React, { useState } from 'react';
import { ToolForm } from '../../components/ui/ToolForm';
import { ResultDisplay } from '../../components/ui/ResultDisplay';
import { generateContent } from '../../lib/gemini';
import { ecommercePrompts } from '../../lib/prompts/ecommercePrompts';
import { useApiKeyStore } from '../../lib/store';

export const InfluencerOutreach = () => {
  const [brand, setBrand] = useState('');
  const [campaign, setCampaign] = useState('');
  const [requirements, setRequirements] = useState('');
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
        ecommercePrompts.influencerOutreach(brand, campaign, requirements)
      );
      setContent(result);
    } catch (err) {
      setError('Failed to generate influencer outreach email. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToolForm
        title="Influencer Outreach Generator"
        description="Create compelling influencer collaboration proposals"
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
              Brand Name
            </label>
            <input
              type="text"
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your brand name"
              required
            />
          </div>
          <div>
            <label htmlFor="campaign" className="block text-sm font-medium text-gray-700">
              Campaign Details
            </label>
            <textarea
              id="campaign"
              value={campaign}
              onChange={(e) => setCampaign(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="Describe your campaign goals and objectives"
              rows={4}
              required
            />
          </div>
          <div>
            <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
              Collaboration Requirements
            </label>
            <textarea
              id="requirements"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              placeholder="List your requirements and expectations"
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