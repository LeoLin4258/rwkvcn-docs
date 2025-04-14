'use client'
import { ChevronRight, ChevronsUpDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { BookOpen, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type RootDropdownProps = {
  currentPage: 'docs' | 'tutorials';
};

export function RootDropdown({ currentPage }: RootDropdownProps) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const pages = {
        docs: {
            title: '文档',
            description: 'RWKV 中文文档',
            backgroundImage: '/docs/images/ui/docs-select-bg.png',
            href: '/docs',
            icon: BookOpen,
        },
        tutorials: {
            title: '教程',
            description: 'RWKV 教程',
            backgroundImage: '/docs/images/ui/tutorials-select-bg.jpg',
            href: '/tutorials',
            icon: Compass,
        }
    }

    // 获取另一个页面的信息
    const otherPage = currentPage === 'docs' ? 'tutorials' : 'docs';
    const CurrentIcon = pages[currentPage].icon;
    const OtherIcon = pages[otherPage].icon;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='flex flex-col items-center relative' ref={dropdownRef}>
            <div
                className='w-full rounded-lg px-4 py-2 text-white hover:opacity-80 cursor-pointer transition-all duration-300 z-20 relative '
                onClick={() => setOpen(!open)}
                style={{ backgroundImage: `url(${pages[currentPage].backgroundImage})`  }}
            >
                <div className='flex flex-col items-center gap-2'>
                    <div className="flex items-center gap-2 w-full">
                        {CurrentIcon && <CurrentIcon />}
                        <div className="text-xl font-semibold">{pages[currentPage].title}</div>
                    </div>
                    <div className="text-sm w-full">{pages[currentPage].description}</div>
                </div>

                <ChevronsUpDown className='ml-auto w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2' />
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center gap-4 w-full bg-white dark:bg-neutral-800 rounded-b-md px-2 py-4 shadow-2xl  absolute top-full z-10 -translate-y-2"
                    >
                        <a 
                            href={pages[otherPage].href} 
                            className='w-full rounded-lg px-4 py-2 hover:opacity-90 cursor-pointer transition-all duration-300 group relative'
                            style={{ backgroundImage: `url(${pages[otherPage].backgroundImage})` }}
                        >
                            <div className='flex flex-col items-center gap-2'>
                                <div className="flex items-center gap-2 w-full">
                                    {OtherIcon && <OtherIcon className="text-white" />}
                                    <div className="text-xl font-semibold text-white">{pages[otherPage].title}</div>
                                </div>
                                <div className="text-sm w-full text-white">{pages[otherPage].description}</div>
                            </div>
                            
                            <ChevronRight className="ml-auto w-4 h-4 text-white absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
