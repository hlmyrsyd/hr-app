// components/CodeBox.js
import React, { useState } from 'react';

const CodeBox = ({ code, language = 'JavaScript' }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset "Copied!" after 2 seconds
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="relative bg-[#22222] border-2 border-white/20 text-white rounded-md p-4 overflow-auto font-mono">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-400">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center text-gray-400 hover:text-gray-200 transition"
        >
          {isCopied ? (
            <>
              Copied!
            </>
          ) : (
            <>
              Copy Code
            </>
          )}
        </button>
      </div>
      <pre className="whitespace-pre-wrap">{code}</pre>
    </div>
  );
};

export default CodeBox;
