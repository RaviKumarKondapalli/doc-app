import React, { useState } from 'react';

const CodeBlock = ({ command }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-gray-300 dark:bg-gray-800 text-sm rounded p-4 overflow-x-auto pr-10">
        <code>{command}</code>
      </pre>

      {/* Copy Icon (visible on hover) */}
      <button
        onClick={handleCopy}
        className="absolute top-3 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 cursor-pointer"
        title="Copy"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4"><rect x="9" y="9" width="13" height="13" rx="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </button>

      {/* Copied feedback */}
      {copied && (
        <span className="absolute top-4 right-10 text-green-600 text-xs font-medium">
          Copied!
        </span>
      )}
    </div>
  );
};

export default CodeBlock;
