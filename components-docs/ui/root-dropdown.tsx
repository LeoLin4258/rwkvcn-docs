'use client'
import { ChevronRight, ChevronsUpDown } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import { BookOpen, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type RootDropdownProps = {
    currentPage: 'docs' | 'tutorials';
};

export function RootDropdown({ currentPage }: RootDropdownProps) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const pages = {
        docs: {
            title: '文档',
            backgroundImage: '/docs/images/ui/docs-banner.png',
            href: '/docs',
            icon: BookOpen,
        },
        tutorials: {
            title: '教程',
            backgroundImage: '/docs/images/ui/tutorials-banner.png',
            href: '/tutorials',
            icon: Compass,
        }
    }

    // 获取另一个页面的信息
    const otherPage = currentPage === 'docs' ? 'tutorials' : 'docs';
    const CurrentIcon = pages[currentPage].icon;
    const OtherIcon = pages[otherPage].icon;

    const handleToggle = useCallback(() => {
        setOpen(prev => !prev);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
        buttonRef.current?.focus();
    }, []);

    // 处理键盘事件
    const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleClose();
        } else if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleToggle();
        }
    }, [handleClose, handleToggle]);

    // 点击外部关闭
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    return (
        <div className='flex flex-col items-center relative' ref={dropdownRef}>
            <button
                ref={buttonRef}
                className='w-full rounded-lg p-4 text-white hover:opacity-80 cursor-pointer transition-all duration-300 z-20 relative'
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                aria-expanded={open}
                aria-haspopup="true"
                aria-label={`切换到${pages[otherPage].title}`}
                style={{ backgroundImage: `url(${pages[currentPage].backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className='flex flex-col items-center gap-2'>
                    <div className="flex items-center gap-2 w-full">
                        <CurrentIcon className="text-white" aria-hidden="true" />
                        <div className="text-xl font-semibold text-white/90">{pages[currentPage].title}</div>
                    </div>
                </div>

                <ChevronsUpDown className='ml-auto w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-white/70' aria-hidden="true" />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center gap-4 w-full bg-white dark:bg-neutral-900 rounded-b-md pb-2 px-2 shadow-2xl absolute top-full z-10 -translate-y-2"
                        role="menu"
                        aria-label="页面切换菜单"
                    >
                        <a
                            href={pages[otherPage].href}
                            className='w-full rounded-lg p-4 mt-4 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer transition-all duration-300 group relative'
                            style={{ backgroundImage: `url(${pages[otherPage].backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            role="menuitem"
                            onKeyDown={(e) => {
                                if (e.key === 'Escape') {
                                    handleClose();
                                }
                            }}
                        >
                            <div className='flex flex-col items-center gap-2'>
                                <div className="flex items-center gap-2 w-full">
                                    <OtherIcon className="text-white" aria-hidden="true" />
                                    <div className="text-xl font-semibold text-white">{pages[otherPage].title}</div>
                                </div>
                            </div>

                            <ChevronRight className="ml-auto w-4 h-4 text-white absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
