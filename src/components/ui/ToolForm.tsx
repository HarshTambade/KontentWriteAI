import React from 'react';

interface ToolFormProps {
  title: string;
  description: string;
  onSubmit: (e: React.FormEvent) => void;
  loading?: boolean;
  error?: string;
  children: React.ReactNode;
}

export const ToolForm: React.FC<ToolFormProps> = ({
  title,
  description,
  onSubmit,
  loading = false,
  error,
  children
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        {children}

        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-400"
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>

      {error && (
        <div className="rounded-md bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}
    </div>
  );
};