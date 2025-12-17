import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'
import { SMOOTH_TRANSITION } from '../animationConstants';
import ModelViewer from './ModelViewer';
import ExperienceSection from './ExperienceSection'
import BrandMarquee from './BrandMarquee';
import StatsSection from './StatsSection';

import StatusHeader from './StatusHeader';

const Homepage = () => {
    const { scrollY } = useScroll();
    const scrollProgress = useTransform(scrollY, [0, 600], [0, 1]);

    const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);
    const orbsY = useTransform(scrollY, [0, 1000], [0, -150]);

    return (
        <>
            <StatusHeader />
            {/* Floating AutoVerse Title for Home */}
            <motion.div
                className="responsive-logo-container font-cinzel pointer-events-none"
                style={{
                    "--scroll-p": scrollProgress
                }}
            >
                <h1 className="font-playfair font-black text-6xl md:text-8xl lg:text-9xl tracking-tight whitespace-nowrap">
                    {Array.from("AutoVerse").map((letter, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, rotateX: -90 }}
                            animate={{ opacity: 1, rotateX: 0 }}
                            transition={{
                                ...SMOOTH_TRANSITION,
                                delay: 0.4 + i * 0.1,
                                duration: 1.2,
                            }}
                            className="inline-block"
                            style={{ transformOrigin: 'center bottom' }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </h1>
            </motion.div>


            {/* HERO SECTION */}
            <main className="relative min-h-screen overflow-hidden flex items-center">
                {/* Optimized Grid Background */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        y: backgroundY,
                        backgroundImage: `
              linear-gradient(rgba(27,60,83,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(27,60,83,0.03) 1px, transparent 1px)
            `,
                        backgroundSize: '80px 80px'
                    }}
                />

                {/* Floating Orbs (GPU Safe) - Wrapped in Parallax Container */}
                <motion.div className="absolute inset-0 pointer-events-none" style={{ y: orbsY }}>
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: 200 + i * 100,
                                height: 200 + i * 100,
                                left: `${20 + i * 25}%`,
                                top: `${15 + i * 20}%`,
                                background: `radial-gradient(circle, rgba(69,104,130,${0.08 - i * 0.02}) 0%, transparent 70%)`,
                                willChange: 'transform'
                            }}
                            animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
                            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    ))}
                </motion.div>

                <div className="relative z-10 container mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* LEFT COL: Text Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl mx-auto lg:mx-0"
                    >
                        {/* Overline */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...SMOOTH_TRANSITION, delay: 0.2 }}
                            className="mb-8"
                        >
                            <span className="text-sm md:text-base tracking-[0.4em] text-pastel-blue/60 font-light uppercase">
                                Redefining Automotive Excellence
                            </span>
                        </motion.div>

                        {/* Spacer for the Fixed Title */}
                        <div className="h-24 md:h-32 lg:h-48 mb-12 w-full" aria-hidden="true" />

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...SMOOTH_TRANSITION, delay: 1.2 }}
                            className="text-lg md:text-2xl text-pastel-blue/70 font-light max-w-3xl mx-auto mb-16 leading-relaxed"
                        >
                            Experience the pinnacle of automotive design and engineering.
                            <br />
                            Where innovation meets timeless elegance.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...SMOOTH_TRANSITION, delay: 1.5 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        >
                            <motion.a
                                href="#experience"
                                className="group relative px-10 py-4 bg-pastel-blue text-pastel-light font-semibold tracking-wide overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10">Discover More</span>
                                <motion.div
                                    className="absolute inset-0 bg-pastel-blue/80"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>

                            <motion.a
                                href="#contact"
                                className="px-10 py-4 border-2 border-pastel-blue text-pastel-blue font-semibold tracking-wide hover:bg-pastel-blue/5 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get in Touch
                            </motion.a>
                        </motion.div>


                    </motion.div>

                    {/* RIGHT COL: 3D Model */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...SMOOTH_TRANSITION, delay: 0.5 }}
                        className="hidden lg:flex justify-center items-center md:h-[600px] w-full relative z-20"
                    >
                        <ModelViewer
                            url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
                            width="100%"
                            height="100%"
                            autoRotate={true}
                            enableManualRotation={true}
                            autoFrame={true}
                            autoFrameScale={0.8}
                            environmentPreset="city"
                            showScreenshotButton={false}
                            modelXOffset={0.2}
                        />
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="flex flex-col items-center gap-2"
                        >
                            <span className="text-xs tracking-widest text-pastel-blue/50 uppercase">Scroll</span>
                            <div className="w-px h-16 bg-gradient-to-b from-pastel-blue/50 to-transparent" />
                        </motion.div>
                    </motion.div>
                </div>
            </main>

            <ExperienceSection />

            <BrandMarquee />
            <StatsSection />
        </>
    );
};

export default Homepage;
