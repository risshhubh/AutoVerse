import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';

const Brands = () => {
    const brands = [
        {
            id: "tata",
            title: "Tata Motors",
            brandName: "Tata",
            description: "Pioneering Indias EV revolution and known for 5-star safety. Connecting aspirations."
        },
        {
            id: "mahindra",
            title: "Mahindra",
            brandName: "Mahindra",
            description: "The SUV specialists. Creating world-class SUVs with bold design and commanding presence."
        },
        {
            id: "maruti",
            title: "Maruti Suzuki",
            brandName: "Maruti Suzuki",
            description: "The heartbeat of Indian roads. Unmatched efficiency, value, and widespread service network."
        },
        {
            id: "hyundai",
            title: "Hyundai",
            brandName: "Hyundai",
            description: "Smart mobility solutions. Futuristic design language and segment-leading technology."
        },
        {
            id: "toyota",
            title: "Toyota",
            brandName: "Toyota",
            description: "Legendary reliability and hybrid leadership. Cars that are built to last generations."
        },
        {
            id: "honda",
            title: "Honda",
            brandName: "Honda",
            description: "The power of dreams. Renowned for refined engines, comfort, and premium sedan legacy."
        },
        {
            id: "bmw",
            title: "BMW",
            brandName: "BMW",
            description: "Sheer Driving Pleasure. The ultimate dynamic driving experience in the luxury segment."
        },
        {
            id: "mercedes",
            title: "Mercedes-Benz",
            brandName: "Mercedes-Benz",
            description: "The Best or Nothing. The definition of luxury, status, and engineering excellence."
        }
    ];

    const [selectedBrandId, setSelectedBrandId] = useState(brands[0].id);

    const activeBrand = useMemo(() =>
        brands.find(b => b.id === selectedBrandId),
        [selectedBrandId]);

    const filteredCars = useMemo(() =>
        cars.filter(car => car.brand.toLowerCase() === activeBrand?.brandName.toLowerCase()),
        [activeBrand]);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-pastel-light pt-20">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4 lg:h-[calc(100vh-5rem)] lg:sticky lg:top-20 border-r border-pastel-blue/10 bg-white/50 backdrop-blur-sm overflow-y-auto">
                <div className="p-6">
                    <h2 className="text-sm font-bold tracking-widest text-pastel-blue/40 uppercase mb-6">Select Brand</h2>
                    <div className="space-y-1">
                        {brands.map((brand) => (
                            <button
                                key={brand.id}
                                onClick={() => setSelectedBrandId(brand.id)}
                                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${selectedBrandId === brand.id
                                    ? 'bg-pastel-blue text-white shadow-lg shadow-pastel-blue/20'
                                    : 'hover:bg-pastel-blue/5 text-pastel-blue/70'
                                    }`}
                            >
                                <span className={`relative z-10 font-cinzel font-bold text-lg ${selectedBrandId === brand.id ? 'translate-x-2' : ''
                                    } transition-transform duration-300 inline-block`}>
                                    {brand.title}
                                </span>
                                {selectedBrandId === brand.id && (
                                    <motion.div
                                        layoutId="activeBrandIndicator"
                                        className="absolute inset-0 bg-pastel-blue"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:w-3/4 p-6 lg:p-12 min-h-screen">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedBrandId}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="max-w-5xl mx-auto"
                    >
                        {/* Brand Header */}
                        <div className="mb-12 relative">
                            <div className="absolute -top-10 -left-10 text-[8rem] opacity-[0.04] font-black font-cinzel pointer-events-none select-none text-pastel-blue truncate max-w-full">
                                {activeBrand.title}
                            </div>
                            <span className="text-xs tracking-[0.4em] text-pastel-blue/50 uppercase font-light relative z-10">Premium Collection</span>
                            <h1 className="text-4xl md:text-6xl font-black text-pastel-blue mt-2 font-cinzel relative z-10">
                                {activeBrand.title}
                            </h1>
                            <p className="text-xl text-pastel-blue/70 mt-6 max-w-2xl leading-relaxed border-l-4 border-pastel-blue/20 pl-6 relative z-10">
                                {activeBrand.description}
                            </p>
                        </div>

                        {/* Car Grid Showcase */}
                        {filteredCars.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {filteredCars.map((car, index) => (
                                    <motion.div
                                        key={car.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                        className="h-full"
                                    >
                                        <Link
                                            to={`/vehicle/${car.id}`}
                                            className="block group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-pastel-blue/5 h-full"
                                        >
                                            <div className="aspect-[16/10] overflow-hidden relative">
                                                <img
                                                    src={car.image}
                                                    alt={car.name}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                                <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                                    <div className="flex justify-between items-end">
                                                        <h3 className="text-white font-cinzel text-xl font-bold">{car.name}</h3>
                                                        <span className="text-white/90 font-mono text-sm bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                                                            {car.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-6 flex justify-between items-center bg-white/50 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-pastel-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                <div className="text-sm font-semibold text-pastel-blue/60 uppercase tracking-wider relative z-10">
                                                    {car.category}
                                                </div>
                                                <span
                                                    className="relative z-10 px-6 py-2 bg-pastel-blue text-white rounded-lg text-sm font-bold tracking-wide group-hover:bg-pastel-blue/90 transition-colors shadow-lg shadow-pastel-blue/20"
                                                >
                                                    VIEW DETAILS
                                                </span>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center border-2 border-dashed border-pastel-blue/10 rounded-3xl bg-pastel-blue/5">
                                <p className="text-pastel-blue/50 italic text-lg">Coming Soon to AutoVerse</p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Brands;
