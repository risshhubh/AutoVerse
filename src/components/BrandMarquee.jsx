import React from 'react';
import { motion } from 'framer-motion';

const brands = [
    { name: 'Toyota', url: 'https://cdn.simpleicons.org/toyota' },
    { name: 'BMW', url: 'https://cdn.simpleicons.org/bmw' },
    { name: 'Mercedes', url: 'https://cdn.simpleicons.org/mercedes/000000' },
    { name: 'Audi', url: 'https://cdn.simpleicons.org/audi' },
    { name: 'Tesla', url: 'https://cdn.simpleicons.org/tesla' },
    { name: 'Porsche', url: 'https://cdn.simpleicons.org/porsche' },
    { name: 'Ford', url: 'https://cdn.simpleicons.org/ford' },
    { name: 'Honda', url: 'https://cdn.simpleicons.org/honda' },
    { name: 'Lamborghini', url: 'https://cdn.simpleicons.org/lamborghini' },
    { name: 'Ferrari', url: 'https://cdn.simpleicons.org/ferrari' },
    { name: 'Bugatti', url: 'https://cdn.simpleicons.org/bugatti' },
    { name: 'Lexus', url: 'https://cdn.simpleicons.org/lexus/000000' },
    { name: 'Volvo', url: 'https://cdn.simpleicons.org/volvo' },
    { name: 'Jaguar', url: 'https://cdn.simpleicons.org/jaguar/000000' }
];

const BrandMarquee = () => {
    return (
        <div className="relative w-full py-16 bg-white/50 backdrop-blur-sm border-y border-white/50 overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-32 h-full z-10 bg-gradient-to-r from-pastel-light to-transparent" />
            <div className="absolute top-0 right-0 w-32 h-full z-10 bg-gradient-to-l from-pastel-light to-transparent" />

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-content {
                    animation: marquee 40s linear infinite;
                }
            `}</style>

            <div className="flex">
                <div
                    className="flex gap-20 md:gap-32 whitespace-nowrap pr-20 md:pr-32 items-center marquee-content bg-transparent"
                    style={{ width: "fit-content" }}
                >
                    {[...brands, ...brands, ...brands].map((brand, i) => (
                        <img
                            key={i}
                            src={brand.url}
                            alt={brand.name}
                            loading="lazy"
                            className="h-12 md:h-16 w-auto object-contain pointer-events-none select-none"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandMarquee;
