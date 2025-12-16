import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ExperienceCard from './ExperienceCard';
import { SMOOTH_TRANSITION } from '../animationConstants';

const ExperienceSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax Transforms
    const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const bgTextY = useTransform(scrollYProgress, [0, 1], [100, -200]);
    const gridY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <section ref={containerRef} id="experience" className="relative py-32 px-4 md:px-8 bg-pastel-light z-20 overflow-hidden">
            {/* Parallax Background Grid */}
            <motion.div
                style={{ y: gridY }}
                className="absolute inset-0 opacity-20 pointer-events-none"
            >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(27,60,83,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(27,60,83,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]" />
            </motion.div>

            {/* Parallax Background Title */}
            <motion.div
                style={{ y: bgTextY }}
                className="absolute top-1/4 left-0 w-full text-center pointer-events-none select-none opacity-[0.03] z-0"
            >
                <h2 className="text-[12vw] md:text-[15vw] leading-none font-black font-cinzel text-pastel-blue">
                    EXPERIENCE
                </h2>
            </motion.div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    style={{ y: headerY }} // Parallax on the header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }} // We keep whileInView for the fade-in, but y is controlled by scroll
                    transition={SMOOTH_TRANSITION}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-pastel-blue mb-6 font-cinzel tracking-wide">
                        The Art of Performance
                    </h2>
                    <p className="text-xl text-pastel-blue/70 max-w-2xl mx-auto leading-relaxed">
                        Every curve, every line, every detail is continuously refined to deliver an experience that transcends mere transportation.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {[
                        {
                            title: "The Engine",
                            subtitle: "Internal Combustion",
                            desc: "An internal combustion engine converts chemical energy from fuel into mechanical energy. Through a cycle of intake, compression, combustion, and exhaust, pistons drive the crankshaft to generate power.",
                            label: "ENGINE",
                            image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop",
                            video: "/engine.mp4"
                        },
                        {
                            title: "The Chassis",
                            subtitle: "Structural Framework",
                            desc: "The chassis serves as the load-bearing framework of the vehicle. It supports the suspension, engine, and body components, providing structural rigidity and determining vehicle dynamics.",
                            label: "BODY",
                            image: "https://images.unsplash.com/photo-1618428449772-2f377484dcc6?q=80&w=2070&auto=format&fit=crop",
                            video: "/chassis.mp4"
                        },
                        {
                            title: "The Interior",
                            subtitle: "Passenger Compartment",
                            desc: "The interior space is designed for driver and passenger accommodation. It houses the instrumentation, control systems, and safety features necessary for vehicle operation and comfort.",
                            label: "INTERIOR",
                            image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop",
                            video: "/interior.mp4"
                        },
                        {
                            title: "Transmission",
                            subtitle: "Power Transmission",
                            desc: "The transmission system transfers power from the engine to the wheels. It uses gear ratios to optimize torque and speed delivery across different driving conditions.",
                            label: "GEARBOX",
                            image: "https://images.unsplash.com/photo-1593055491718-64b1f69207e9?q=80&w=2070&auto=format&fit=crop",
                            video: "/transmission.mp4"
                        }
                    ].map((item, i) => (
                        <ExperienceCard key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
