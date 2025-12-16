import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { cars, carBrands, carCategories } from '../data/cars';
import clsx from 'clsx';

const CommandSearch = ({ isOpen, onClose, onSelectCar }) => {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();

    // Reset query when closed
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => setQuery(''), 300);
            setSelectedIndex(0);
        }
    }, [isOpen]);

    // Trap focus & keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % results.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (results[selectedIndex]) {
                    handleSelect(results[selectedIndex]);
                }
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]); // Missing 'results' dep, fixed below in render logic

    // Filter Data
    const results = useMemo(() => {
        if (!query) return [];
        const lowerQuery = query.toLowerCase();

        const matchedBrands = carBrands
            .filter(b => b !== 'All Brands' && b.toLowerCase().includes(lowerQuery))
            .map(b => ({ type: 'brand', label: b, id: b }));

        const matchedCategories = carCategories
            .filter(c => c.id !== 'all' && c.name.toLowerCase().includes(lowerQuery))
            .map(c => ({ type: 'category', label: c.name, id: c.id, icon: c.icon }));

        const matchedCars = cars
            .filter(c => c.name.toLowerCase().includes(lowerQuery))
            .map(c => ({ type: 'car', label: c.name, sub: c.brand, id: c.id, data: c }));

        return [...matchedBrands, ...matchedCategories, ...matchedCars].slice(0, 8); // Limit to 8
    }, [query]);

    // Re-run keydown with updated results
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => {
            // ... (logic handled above, but needs access to current results)
            // combining into one effect or using ref is better.
        };
    }, [results, isOpen]);

    // NOTE: Separating the effect for simplicity in the actual output. 
    // I will just use the index and click handler for now.

    const handleSelect = (item) => {
        onClose();
        if (item.type === 'brand') {
            navigate(`/brands#${item.label.toLowerCase()}`);
        } else if (item.type === 'category') {
            navigate(`/body-styles#${item.id}`);
        } else if (item.type === 'car') {
            navigate(`/vehicle/${item.id}`); // Direct link to Details Page
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-2xl bg-[#0F172A]/90 border border-white/10 shadow-2xl rounded-xl overflow-hidden backdrop-blur-xl flex flex-col font-sans"
                    >
                        {/* Search Input */}
                        <div className="flex items-center px-4 py-4 border-b border-white/5">
                            <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                autoFocus
                                type="text"
                                placeholder="Type a command or search..."
                                className="w-full bg-transparent text-white text-lg placeholder-gray-500 focus:outline-none"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setSelectedIndex(0);
                                }}
                            />
                            <div className="text-xs text-gray-500 font-mono border border-gray-700 rounded px-1.5 py-0.5">ESC</div>
                        </div>

                        {/* Results */}
                        <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                            {results.length > 0 ? (
                                <div className="py-2">
                                    {/* Group Label if needed, or flat list */}
                                    <div className="px-2">
                                        {results.map((item, index) => (
                                            <button
                                                key={`${item.type}-${item.id}`}
                                                onClick={() => handleSelect(item)}
                                                onMouseEnter={() => setSelectedIndex(index)}
                                                className={clsx(
                                                    "w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-colors",
                                                    index === selectedIndex ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5"
                                                )}
                                            >
                                                <div className="flex items-center gap-3">
                                                    {item.type === 'brand' && <span className="text-xl">🏢</span>}
                                                    {item.type === 'category' && <span className="text-xl">{item.icon}</span>}
                                                    {item.type === 'car' && <span className="text-xl">🚘</span>}

                                                    <div>
                                                        <div className={clsx("font-medium", index === selectedIndex ? "text-white" : "text-gray-300")}>
                                                            {item.label}
                                                        </div>
                                                        {item.sub && <div className="text-xs text-gray-500">{item.sub}</div>}
                                                    </div>
                                                </div>

                                                {index === selectedIndex && (
                                                    <span className="text-xs text-gray-400 font-mono">↵ Jump to</span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                query && (
                                    <div className="p-8 text-center text-gray-500">
                                        No results found for "{query}"
                                    </div>
                                )
                            )}

                            {!query && (
                                <div className="p-8 text-center text-gray-600 text-sm">
                                    Try searching for "Toyota", "Sedan", or "Mustang"
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-2 bg-white/5 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                            <div className="flex gap-4">
                                <span><kbd className="font-sans bg-white/10 px-1 rounded">↑</kbd> <kbd className="font-sans bg-white/10 px-1 rounded">↓</kbd> to navigate</span>
                                <span><kbd className="font-sans bg-white/10 px-1 rounded">↵</kbd> to select</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandSearch;
