import React from 'react';

interface ResultDisplayProps {
  content: string;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ content }) => {
  if (!content) return null;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <pre className="whitespace-pre-wrap">{content}</pre>
    </div>
  );
};