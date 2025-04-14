'use client'

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export function VersionNotice({ className }: { className?: string }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const isHidden = localStorage.getItem('versionNoticeHidden');
        if (isHidden === null) {
            setIsVisible(true);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('versionNoticeHidden', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className={`
            w-full p-4 top-0 left-0 z-50 flex items-center justify-center relative
            bg-gradient-to-r from-neutral-200 to-stone-400 text-black 
          dark:from-neutral-700 dark:to-stone-600 dark:text-white 
            text-sm shadow-md`}>
            你正在查看RWKV文档
            <span className='text-blue-600 dark:text-blue-400 font-bold'>V2</span>
            , 点击这里查看
            <a href="/docs/v1" className=' text-blue-600 dark:text-blue-400 hover:text-blue-800 hover:underline'>旧版文档</a>

            <X
                className="w-4 h-4 cursor-pointer absolute right-4"
                onClick={handleClose}
            />
        </div>

     
    );
}
