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
                <div className="absolute inset-0 bg-[linear-gradient(rgba(128,128,128,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.15)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]" />
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
                <div className="mt-40 border-t border-pastel-sky/10 pt-32 relative">
                    {/* Background glow for telemetry */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-pastel-blue/5 blur-[120px] rounded-full pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-sm tracking-[0.3em] text-pastel-sky uppercase font-mono mb-4">Live Analytics</h3>
                        <h3 className="text-4xl md:text-5xl font-cinzel font-black text-pastel-blue mb-4">
                            Performance Telemetry
                        </h3>
                        <p className="text-pastel-blue/60 max-w-2xl mx-auto font-mono text-sm leading-relaxed">
                            A dynamic visualization of AutoVerse's peak engineering capabilities. Tracking simulated real-time data from our flagship models.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            { name: 'Apex-RS', type: 'Track Focused', topSpeed: 215, accel: 2.8, handling: 98, power: 850 },
                            { name: 'Horizon-EV', type: 'Electric GT', topSpeed: 195, accel: 2.1, handling: 92, power: 1020 },
                            { name: 'Vanguard-V8', type: 'Grand Tourer', topSpeed: 205, accel: 3.2, handling: 95, power: 720 }
                        ].map((car, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.2, duration: 0.8 }}
                                key={idx}
                                className="bg-pastel-light/10 backdrop-blur-md border border-pastel-sky/20 p-8 rounded-3xl relative overflow-hidden group hover:border-pastel-blue/40 transition-colors duration-500"
                            >
                                {/* Scanner line effect */}
                                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pastel-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-y-full group-hover:animate-[scan_3s_ease-in-out_infinite]" />

                                <div className="flex justify-between items-start mb-10">
                                    <div>
                                        <h4 className="text-2xl font-bold text-pastel-blue font-mono tracking-tight">{car.name}</h4>
                                        <p className="text-xs text-pastel-sky uppercase tracking-widest mt-2">{car.type}</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-pastel-sky/20 flex items-center justify-center font-mono text-xs text-pastel-blue opacity-50">
                                        0{idx + 1}
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    {/* Top Speed */}
                                    <div>
                                        <div className="flex justify-between text-xs tracking-widest uppercase font-mono text-pastel-blue/60 mb-3">
                                            <span>Top Speed</span>
                                            <span className="text-pastel-blue">{car.topSpeed} MPH</span>
                                        </div>
                                        <div className="h-1 w-full bg-pastel-sky/10 rounded-full overflow-hidden relative">
                                            <div className="absolute inset-y-0 left-0 border-r border-pastel-blue/40 z-10 mix-blend-overlay" style={{ left: '25%' }} />
                                            <div className="absolute inset-y-0 left-0 border-r border-pastel-blue/40 z-10 mix-blend-overlay" style={{ left: '50%' }} />
                                            <div className="absolute inset-y-0 left-0 border-r border-pastel-blue/40 z-10 mix-blend-overlay" style={{ left: '75%' }} />
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(car.topSpeed / 250) * 100}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.4 + idx * 0.1, ease: "easeOut" }}
                                                className="h-full bg-pastel-blue relative"
                                            >
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full blur-[2px]" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* 0-60 MPH */}
                                    <div>
                                        <div className="flex justify-between text-xs tracking-widest uppercase font-mono text-pastel-blue/60 mb-3">
                                            <span>0-60 MPH</span>
                                            <span className="text-pastel-blue">{car.accel}s</span>
                                        </div>
                                        <div className="h-1 w-full bg-pastel-sky/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${100 - (car.accel / 5) * 100}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.6 + idx * 0.1, ease: "easeOut" }}
                                                className="h-full bg-pastel-blue relative"
                                            >
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full blur-[2px]" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Horsepower */}
                                    <div>
                                        <div className="flex justify-between text-xs tracking-widest uppercase font-mono text-pastel-blue/60 mb-3">
                                            <span>Power</span>
                                            <span className="text-pastel-blue">{car.power} HP</span>
                                        </div>
                                        <div className="h-1 w-full bg-pastel-sky/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(car.power / 1200) * 100}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.8 + idx * 0.1, ease: "easeOut" }}
                                                className="h-full bg-pastel-blue relative"
                                            >
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full blur-[2px]" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
