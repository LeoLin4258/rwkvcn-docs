'use client'

import { ReactNode } from 'react'

interface TitleContainerProps {
    title: ReactNode
    subtitle?: string
    className?: string
}

export const TitleContainer = ({ title, subtitle, className = '' }: TitleContainerProps) => {
    // Function to apply special font to RWKV in text
    const formatRWKV = (text: string) => {
        if (!text.toLowerCase().includes('rwkv')) return text;

        const parts = text.split(/(RWKV)/i);
        return parts.map((part, index) => {
            if (part.toLowerCase() === 'rwkv') {
                return <span key={index} className="font-source-code-pro whitespace-nowrap">{part}</span>;
            }
            return part;
        });
    };



    return (
        <div className={`w-full flex flex-col items-center ${className}`}>
            <h1 className="text-center text-3xl md:text-5xl flex flex-wrap gap-1 items-center justify-center">
                {typeof title === 'string' ? formatRWKV(title) : title}
            </h1>
            {subtitle && (
                <div className="text-center text-sm md:text-lg mt-4 text-neutral-400 w-full flex flex-col items-center">
                    {subtitle}
                </div>
            )}
        </div>
    )
}