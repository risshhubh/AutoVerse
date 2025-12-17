import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Calendar, Gauge, Fuel, Cog } from 'lucide-react';
import ModelViewer from './ModelViewer';
import VehicleGlb from './VehicleGlb';
import { cars } from '../data/cars';
import { SMOOTH_TRANSITION } from '../animationConstants';
import { useWishlist } from '../context/WishlistContext';

// Helper to map cars to their GLB files
const getCarModel = (car) => {
    const name = car.name.toLowerCase();
    const brand = car.brand.toLowerCase();

    if (name.includes('thar')) return '/thar_draco.glb';
    if (name.includes('harrier')) return '/harrier.glb';
    if (name.includes('safari')) return '/safari.glb';
    if (name.includes('scorpio')) return '/scorpion.glb'; // scorpion for Scorpio N
    if (name.includes('punch')) return '/tata_punch.glb';
    if (name.includes('swift')) return '/swift.glb';
    if (name.includes('baleno')) return '/baleno.glb';
    if (name.includes('verna')) return '/verna.glb';
    if (name.includes('fortuner')) return '/fortuner.glb';
    if (name.includes('chiron') || brand.includes('bugatti')) return '/chiron.glb';
    if (name.includes('aventador') || brand.includes('lamborghini')) return '/lamborghini_aventador.glb';
    if (name.includes('ciaz')) return '/2021_suzuki_ciaz.glb';
    if (name.includes('camry')) return '/toyota_camry_2020.glb';

    // Luxury / Sports fallbacks based on available files
    if (brand.includes('mercedes')) return '/amgs63.glb'; // Placeholder
    if (name.includes('corvette') || car.category === 'sports') return '/chevrolet_corvette_c7.glb';

    // Fallback
    return null;
};

const VehicleDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { toggleWishlist, isInWishlist } = useWishlist();



    // Find the car
    const car = cars.find(c => c.id === parseInt(id));



    if (!car) {
        return (
            <div className="min-h-screen bg-pastel-light flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-cinzel text-pastel-blue mb-4">Vehicle Not Found</h2>
                    <button
                        onClick={() => navigate('/body-styles')}
                        className="text-pastel-blue underline"
                    >
                        Return to Showroom
                    </button>
                </div>
            </div>
        );
    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const modelPath = getCarModel(car);

    return (
        <div className="min-h-screen bg-pastel-light pt-8 pb-12 px-4 md:px-8">
            {/* Header / Navigation */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl mx-auto mb-8 flex justify-between items-center"
            >
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-pastel-blue/70 hover:text-pastel-blue transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="uppercase tracking-widest text-sm font-medium">Back</span>
                </button>

                <div className="flex gap-4">

                    <button
                        onClick={() => car && toggleWishlist(car.id)}
                        className={`p-3 rounded-full border transition-colors ${car && isInWishlist(car.id)
                            ? 'bg-red-50 border-red-200 text-red-500'
                            : 'border-pastel-blue/20 text-pastel-blue/70 hover:bg-pastel-blue/5 hover:text-pastel-blue'
                            }`}
                        aria-label="Add to Wishlist"
                    >
                        <Heart size={20} fill={car && isInWishlist(car.id) ? "currentColor" : "none"} />
                    </button>
                </div>
            </motion.div>

            <div className="max-w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-12 lg:gap-16">

                {/* LEFT COLUMN: 360 DEGREE VIEW */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={SMOOTH_TRANSITION}
                    className="relative h-[60vh] lg:h-[80vh] w-full bg-[#2d2d2d] rounded-[3rem] shadow-2xl overflow-hidden border border-white/50"
                >
                    {/* "360 View" Badge */}
                    <div className="absolute top-8 left-8 z-10 bg-pastel-blue/10 backdrop-blur-md px-4 py-2 rounded-full border border-pastel-blue/20">
                        <div className="flex items-center gap-2">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="w-4 h-4 border-2 border-dashed border-pastel-blue rounded-full"
                            />
                            <span className="text-xs font-bold text-pastel-blue tracking-widest uppercase">360° Studio</span>
                        </div>
                    </div>

                    {/* 3D Model Viewer OR Image Fallback */}
                    {modelPath ? (
                        <VehicleGlb modelPath={modelPath} />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-black/50">
                            <img
                                src={car.image}
                                alt={car.name}
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-black/70 text-white px-6 py-3 rounded-md backdrop-blur border border-white/10 font-mono text-sm tracking-wider">
                                    3D UNAVAILABLE
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Overlay Gradient at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pastel-blue/10 to-transparent pointer-events-none" />
                </motion.div>


                {/* RIGHT COLUMN: DETAILS */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...SMOOTH_TRANSITION, delay: 0.2 }}
                    className="flex flex-col justify-center"
                >
                    {/* Brand & Title */}
                    <div className="mb-2">
                        <span className="text-pastel-blue/60 tracking-[0.4em] uppercase text-sm font-medium pl-1">
                            {car.brand}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-pastel-blue font-cinzel mt-2 leading-none">
                            {car.name}
                        </h1>
                    </div>

                    {/* Price Tag */}
                    <div className="mt-8 mb-12 flex items-baseline gap-4">
                        <span className="text-4xl font-sans font-bold text-pastel-blue">
                            {formatPrice(car.price)}
                        </span>
                        <span className="text-pastel-blue/50 text-lg">ex-showroom</span>
                    </div>

                    {/* Description */}
                    <p className="text-xl text-pastel-blue/70 leading-relaxed mb-12 font-light">
                        {car.description}
                        <br /><br />
                        Experience unparalleled excellence with the {car.year} {car.name}.
                        Meticulously crafted to deliver a driving experience that transcends the ordinary.
                    </p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-6 mb-12">
                        <div className="p-6 bg-white/50 rounded-2xl border border-white/60 hover:bg-white hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-3 mb-2 text-pastel-blue/60">
                                <Cog size={20} />
                                <span className="text-xs uppercase tracking-widest font-bold">Engine</span>
                            </div>
                            <span className="text-lg font-bold text-pastel-blue">{car.specs.engine}</span>
                        </div>
                        <div className="p-6 bg-white/50 rounded-2xl border border-white/60 hover:bg-white hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-3 mb-2 text-pastel-blue/60">
                                <Fuel size={20} />
                                <span className="text-xs uppercase tracking-widest font-bold">Economy</span>
                            </div>
                            <span className="text-lg font-bold text-pastel-blue">{car.specs.mpg}</span>
                        </div>
                        <div className="p-6 bg-white/50 rounded-2xl border border-white/60 hover:bg-white hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-3 mb-2 text-pastel-blue/60">
                                <Gauge size={20} />
                                <span className="text-xs uppercase tracking-widest font-bold">Speed</span>
                            </div>
                            <span className="text-lg font-bold text-pastel-blue">{car.specs.transmission}</span>
                        </div>
                        <div className="p-6 bg-white/50 rounded-2xl border border-white/60 hover:bg-white hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-3 mb-2 text-pastel-blue/60">
                                <Calendar size={20} />
                                <span className="text-xs uppercase tracking-widest font-bold">Year</span>
                            </div>
                            <span className="text-lg font-bold text-pastel-blue">{car.year}</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-4">
                        <button className="flex-1 py-5 bg-pastel-blue text-white font-bold tracking-wider uppercase rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all active:scale-[0.98]">
                            Book Test Drive
                        </button>
                        <button className="flex-1 py-5 bg-white border-2 border-pastel-blue text-pastel-blue font-bold tracking-wider uppercase rounded-xl hover:bg-pastel-blue/5 transition-colors">
                            Contact Dealer
                        </button>
                    </div>

                    <p className="mt-6 text-xs text-pastel-blue/40 text-center uppercase tracking-widest">
                        *Specifications may vary by region
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default VehicleDetails;
