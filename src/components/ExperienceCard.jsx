
import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SMOOTH_TRANSITION } from '../animationConstants';

const ExperienceCard = ({ item, index }) => {
    // ... (refs and hooks unchaged)
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "-20%" });
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        if (!videoRef.current) return;

        if (isInView) {
            videoRef.current.play().catch(e => console.log("Auto-play prevented", e));
        } else {
            videoRef.current.pause();
        }
    }, [isInView]);

    const isReverse = index % 2 === 1;

    return (
        <div ref={containerRef} className={`flex flex-col md:flex-row gap-12 items-center ${isReverse ? 'md:flex-row-reverse' : ''}`}>
            {/* Visual Part */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut"
                }}
                className="w-full md:w-1/2 aspect-[4/3] bg-pastel-sky/10 rounded-2xl relative overflow-hidden group shadow-lg transform-gpu"
            >
                {item.video ? (
                    <video
                        ref={videoRef}
                        src={item.video}
                        poster={item.image}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onLoadedData={() => setHasLoaded(true)}
                        className={`absolute inset-0 w-full h-full object-cover ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                ) : null}

                {/* Fallback/Poster Image - Always visible while video loads or if no video */}
                <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover ${item.video && hasLoaded ? 'opacity-0' : 'opacity-100'}`}
                />

                <div className="absolute inset-0 bg-pastel-blue/20 group-hover:bg-pastel-blue/10 transition-colors duration-500 pointer-events-none" />

                <div className="absolute inset-0 border border-white/20 rounded-2xl m-4 transition-all duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-pastel-blue/40 to-transparent pointer-events-none" />
            </motion.div>

            {/* Text Description Part */}
            <motion.div
                initial={{ opacity: 0, x: isReverse ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                    ...SMOOTH_TRANSITION,
                    delay: 0.1
                }}
                className="w-full md:w-1/2 text-center md:text-left space-y-6"
                style={{ willChange: "transform, opacity" }}
            >
                <div>
                    <span className="text-sm tracking-[0.3em] text-pastel-blue/60 uppercase font-light">{item.subtitle}</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-pastel-blue mt-2 font-cinzel">{item.title}</h3>
                </div>
                <p className="text-lg text-pastel-blue/70 leading-relaxed max-w-lg mx-auto md:mx-0">
                    {item.desc}
                </p>
                <div className="w-12 h-px bg-pastel-blue/30 mx-auto md:mx-0" />
            </motion.div>
        </div>
    );
};

export default ExperienceCard;
