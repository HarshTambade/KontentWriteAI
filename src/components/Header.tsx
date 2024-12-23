import React from 'react';
import { PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ApiKeyInput } from './ApiKeyInput';

export const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <PenTool className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">KontentWriteAI</span>
          </Link>
          <div className="flex items-center gap-4">
            <ApiKeyInput />
          </div>
        </div>
      </div>
    </header>
  );
};