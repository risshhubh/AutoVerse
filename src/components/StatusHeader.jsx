import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const StatusHeader = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    };

    return (
        <header className="absolute top-0 left-0 right-0 z-30 pointer-events-none text-[#94A3B8]">
            {/* Scroll Progress Line */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-current origin-left opacity-50"
                style={{ scaleX }}
            />

            <div className="container mx-auto px-6 h-24 flex items-start justify-between pt-6">
                {/* Left Side - Hidden to avoid Logo Collision when scrolled */}
                <div className="w-1/3 invisible md:visible opacity-0">
                    {/* Placeholder to balance layout */}
                </div>

                {/* Center - System Status */}
                <div
                    onClick={() => window.dispatchEvent(new CustomEvent('open-search'))}
                    className="w-1/3 flex flex-col items-center justify-start space-y-1 pointer-events-auto cursor-pointer group"
                >
                    <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                        <motion.div
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-green-500"
                        />
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
                            System Online
                        </span>
                    </div>
                    <div className="font-mono text-xs tracking-widest opacity-40 group-hover:opacity-100 transition-opacity text-center">
                        <span className="hidden md:inline">
                            PRESS <span className="font-bold">CTRL+K</span> TO SEARCH
                        </span>
                        <span className="md:hidden font-semibold text-[10px]">
                            TAP TO SEARCH
                        </span>
                    </div>
                </div>

                {/* Right Side - Time & Location (Offset to avoid Menu) */}
                <div className="w-1/3 flex flex-col items-end justify-start pr-4 md:pr-20 opacity-60">
                    <span className="font-mono text-xs tracking-widest">
                        {formatTime(time)} <span className="text-[10px] align-top">UTC-5</span>
                    </span>
                    <div className="hidden md:flex items-center gap-2 text-[10px] font-mono tracking-widest mt-1">
                        <span>34.0522° N</span>
                        <div className="w-px h-3 bg-current opacity-30"></div>
                        <span>118.2437° W</span>
                    </div>
                </div>
            </div>

            {/* Decoration Lines */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-current opacity-30"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-current opacity-30"></div>
        </header>
    );
};

export default StatusHeader;
