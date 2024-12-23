import React, { useState } from 'react';
import { Key } from 'lucide-react';
import { useApiKeyStore } from '../lib/store';

export const ApiKeyInput = () => {
  const [key, setKey] = useState('');
  const setApiKey = useApiKeyStore((state) => state.setApiKey);
  const storedKey = useApiKeyStore((state) => state.apiKey);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApiKey(key);
  };

  if (storedKey) {
    return (
      <div className="flex items-center gap-2 text-green-600">
        <Key size={20} />
        <span>API Key is set</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col gap-2">
        <label htmlFor="apiKey" className="text-sm font-medium text-gray-700">
          Enter your Gemini API Key
        </label>
        <div className="flex gap-2">
          <input
            type="password"
            id="apiKey"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Your Gemini API Key"
            required
          />
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};