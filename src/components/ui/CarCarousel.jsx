
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const CarCarousel = ({ cars }) => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    if (cars.length === 0) {
        return (
            <div className="py-20 text-center text-pastel-blue/40 italic w-full">
                No vehicles currently available in this category.
            </div>
        );
    }

    return (
        <div className="relative group/carousel w-full">
            {/* Scroll Buttons */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-pastel-blue/80 hover:bg-pastel-blue backdrop-blur-md p-3 rounded-full text-white shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-all disabled:opacity-0 -ml-4 md:-ml-8 cursor-pointer border border-white/10 hidden md:block"
                aria-label="Scroll left"
            >
                <ArrowLeft size={24} />
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-pastel-blue/80 hover:bg-pastel-blue backdrop-blur-md p-3 rounded-full text-white shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-all disabled:opacity-0 -mr-4 md:-mr-8 cursor-pointer border border-white/10 hidden md:block"
                aria-label="Scroll right"
            >
                <ArrowRight size={24} />
            </button>

            {/* Carousel Container */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-8 pb-12 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 md:px-2"
            >
                {cars.map((car, index) => (
                    <motion.div
                        key={car.id}
                        className="snap-center shrink-0 w-[85vw] md:w-auto flex flex-col items-center first:pl-2 last:pr-2"
                        // Simple Fade Entrance (No Movement)
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1
                        }}
                    >
                        <div className="group relative w-full aspect-[4/3] md:w-96 md:h-72 bg-gray-100 rounded-2xl shadow-md overflow-hidden cursor-pointer">
                            <img
                                src={car.image}
                                alt={car.name}
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="space-y-4 text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="font-bold text-2xl text-white font-cinzel">
                                        {car.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                                    </p>
                                    <Link to={`/vehicle/${car.id}`} className="px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/50 rounded-full text-white text-sm tracking-widest uppercase transition-colors inline-block">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <span className="text-xs font-bold tracking-widest text-pastel-blue/40 uppercase block mb-1">{car.brand}</span>
                            <h3 className="text-2xl font-cinzel font-bold text-pastel-blue">{car.name}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
