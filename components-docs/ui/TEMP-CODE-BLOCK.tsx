// TEMPORARY COMPONENT: 
// This code block is a provisional solution to address the issue of extra spaces on line breaks.
// Avoid using this component, as it will be deprecated and removed soon.
// Please use the built-in code block component once the whitespace issue is resolved.

// Usage:
// import { TEMP_CODE_BLOCK } from 'components-docs/ui/TEMP-CODE-BLOCK.tsx'
//
// <TEMP_CODE_BLOCK text={
// `line1
//
// line2
// line3`
// }/>

'use client'
import { CopyIcon, CheckIcon } from "lucide-react";
import React, { useState } from "react";

export function TEMP_CODE_BLOCK(props: { text: string }) {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(props.text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className="relative group px-4 py-2 bg-[#f6f6f7] dark:bg-[#191919] rounded-lg border border-neutral-200 dark:border-neutral-800 whitespace-nowrap overflow-x-auto"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#d1d5db #f6f6f7' }}
        >
            <pre className="m-0 p-0 bg-transparent border-none whitespace-pre-wrap">
                {props.text}
            </pre>

            {/* copy button */}
            <button
                className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-md"
                onClick={handleCopy}
            >
                {copied ? <CheckIcon className="w-4 h-4" /> : <CopyIcon className="w-4 h-4" />}
            </button>
        </div>
    )
}