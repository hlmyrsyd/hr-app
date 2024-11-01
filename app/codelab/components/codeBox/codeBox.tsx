'use client'

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow as codeStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBoxProps {
    code: string;
    language: 'javascript' | 'typescript' | 'python' | 'html' | 'css' | 'json' | string;
}

const CodeBox: React.FC<CodeBoxProps> = ({ code, language }) => {
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
        <div className="relative bg-[#22222] overflow-auto font-mono border border-neutral-900/20 dark:border-white/20 rounded-xl">
            <div className="flex items-center rounded-t-xl p-2 justify-between ">
                <span className="text-sm text-neutral-600">{language}</span>
                <button
                onClick={handleCopy}
                className="flex items-center text-neutral-600 hover:text-neutral-400 transition"
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
            <SyntaxHighlighter
                className="rounded-b-xl bg-[#222] !m-0"
                language={language}
                style={codeStyle}
                showLineNumbers={true}
                wrapLongLines={true}
                lineNumberStyle={{
                    color: 'rgba(255, 255, 255, 0.3)',
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBox;
