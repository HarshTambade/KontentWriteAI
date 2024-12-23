import React from 'react';

interface ContentFormProps {
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
  loading?: boolean;
  submitText?: string;
}

export const ContentForm: React.FC<ContentFormProps> = ({
  onSubmit,
  children,
  loading = false,
  submitText = 'Generate'
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {children}
      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-400"
      >
        {loading ? 'Generating...' : submitText}
      </button>
    </form>
  );
};