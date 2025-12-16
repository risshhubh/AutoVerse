import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const StatItem = ({ label, value, suffix = "+" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, { bounce: 0, duration: 2000 });
    const rounded = useTransform(springValue, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    return (
        <div ref={ref} className="text-center group">
            <div className="text-5xl md:text-7xl font-black text-pastel-blue font-cinzel mb-2 flex justify-center items-baseline">
                <motion.span>{rounded}</motion.span>
                <span className="text-4xl text-pastel-blue/60 ml-1">{suffix}</span>
            </div>
            <div className="h-px w-12 bg-pastel-blue/20 mx-auto my-4 group-hover:w-24 transition-all duration-500" />
            <p className="text-pastel-blue/60 uppercase tracking-widest text-sm font-semibold">
                {label}
            </p>
        </div>
    );
};

const StatsSection = () => {
    return (
        <section className="py-24 bg-white/30 backdrop-blur-sm border-b border-white/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    <StatItem label="Premium Vehicles" value={250} />
                    <StatItem label="Luxury Brands" value={50} />
                    <StatItem label="Client Satisfaction" value={100} suffix="%" />
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
