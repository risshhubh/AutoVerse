import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { useWishlist } from '../context/WishlistContext';

import { X } from 'lucide-react';

const Wishlist = () => {
    const { wishlist, toggleWishlist } = useWishlist();
    const wishlistedCars = cars.filter(car => wishlist.includes(car.id));

    return (
        <div className="pt-32 min-h-screen bg-pastel-light px-4 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h1 className="text-6xl md:text-8xl font-black text-pastel-blue font-cinzel tracking-tight">Wishlist</h1>
                <p className="text-pastel-blue/60 mt-4 text-xl tracking-widest uppercase">Your Dream Collection</p>
            </motion.div>

            {wishlistedCars.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                    {wishlistedCars.map((car, index) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <div className="block group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-pastel-blue/5 h-full relative">
                                <Link
                                    to={`/vehicle/${car.id}`}
                                    className="absolute inset-0 z-10"
                                    aria-label={`View details for ${car.name}`}
                                />

                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        toggleWishlist(car.id);
                                    }}
                                    className="absolute top-4 right-4 z-20 p-2.5 bg-black/20 hover:bg-red-500 text-white rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-110 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                                    title="Remove from Wishlist"
                                >
                                    <X size={20} />
                                </button>

                                <div className="aspect-[16/10] overflow-hidden relative pointer-events-none">
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
                                <div className="p-6 flex justify-between items-center bg-white/50 relative overflow-hidden pointer-events-none">
                                    <div className="absolute inset-0 bg-pastel-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="text-sm font-semibold text-pastel-blue/60 uppercase tracking-wider relative z-10">
                                        {car.brand}
                                    </div>
                                    <span className="relative z-10 px-6 py-2 bg-pastel-blue text-white rounded-lg text-sm font-bold tracking-wide group-hover:bg-pastel-blue/90 transition-colors shadow-lg shadow-pastel-blue/20">
                                        VIEW DETAILS
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 opacity-50">
                    <p className="text-2xl text-pastel-blue font-cinzel">Your collection is empty</p>
                    <Link to="/brands" className="mt-8 px-8 py-3 border border-pastel-blue text-pastel-blue hover:bg-pastel-blue hover:text-white transition-colors rounded-full uppercase tracking-widest text-sm font-bold">
                        Start Exploring
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
