import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SMOOTH_TRANSITION } from '../animationConstants';
import { ArrowRight, Check, MapPin, Phone, Mail } from 'lucide-react';

const InputField = ({ label, type = "text", value, onChange, name }) => (
    <div className="relative group">
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required
            className="w-full bg-transparent border-b-2 border-pastel-light/20 py-4 text-pastel-light text-lg focus:outline-none focus:border-pastel-light transition-colors peer"
            placeholder=" "
        />
        <label className="absolute left-0 top-4 text-pastel-light/50 transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-focus:text-pastel-light peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-pastel-light">
            {label}
        </label>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pastel-light transition-all duration-500 group-hover:w-full peer-focus:w-full" />
    </div>
);

const RadioOption = ({ label, value, selected, onChange }) => (
    <label className={`cursor-pointer group relative overflow-hidden px-6 py-3 rounded-full border border-pastel-light/30 transition-all duration-300 ${selected === value ? 'bg-pastel-light text-pastel-blue' : 'text-pastel-light hover:border-pastel-light'}`}>
        <input
            type="radio"
            name="topic"
            value={value}
            checked={selected === value}
            onChange={() => onChange(value)}
            className="hidden"
        />
        <span className="relative z-10 font-medium tracking-wide text-sm uppercase">{label}</span>
        {selected === value && (
            <motion.div
                layoutId="activeRadio"
                className="absolute inset-0 bg-pastel-light -z-0"
            />
        )}
    </label>
);

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        topic: 'test-drive'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-[#18181B] relative overflow-hidden pt-32 pb-20 px-4 md:px-8 flex flex-col justify-center">
            {/* Abstract Dashboard/Cockpit Graphics */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-10 w-96 h-96 border border-pastel-light/5 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] border border-pastel-light/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pastel-sky/5 rounded-full blur-[100px]" />

                {/* HUD Elements */}
                <div className="absolute top-40 right-10 flex flex-col items-end gap-2 opacity-20 font-mono text-xs text-pastel-light">
                    <span>SYS.READY</span>
                    <span>LOC.AUTOVERSE.HQ</span>
                    <span>TEMP.OPTIMAL</span>
                </div>
            </div>

            <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left Side: Info & Title */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={SMOOTH_TRANSITION}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-4 mb-8 text-pastel-sky/60"
                    >
                        <div className="h-px w-12 bg-pastel-sky/40" />
                        <span className="text-sm tracking-[0.4em] uppercase">Concierge Service</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-black text-pastel-light font-cinzel mb-8 leading-none">
                        Take The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-light to-pastel-sky">Wheel</span>
                    </h1>

                    <p className="text-xl text-pastel-light/70 leading-relaxed mb-12 max-w-lg">
                        Our dedicated specialists are ready to tailor your AutoVerse experience. Whether it's a test drive or a custom commission, we're here.
                    </p>

                    <div className="space-y-8 font-mono text-sm text-pastel-light/80">
                        <div className="flex items-center gap-6 group cursor-pointer hover:text-pastel-blue transition-colors">
                            <div className="w-12 h-12 rounded-full border border-pastel-sky/20 flex items-center justify-center group-hover:bg-pastel-sky/10 transition-colors">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-pastel-sky/40 uppercase tracking-widest mb-1">Direct Line</p>
                                <p className="text-lg">+1 (555) 000-AUTO</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer hover:text-pastel-blue transition-colors">
                            <div className="w-12 h-12 rounded-full border border-pastel-sky/20 flex items-center justify-center group-hover:bg-pastel-sky/10 transition-colors">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-pastel-sky/40 uppercase tracking-widest mb-1">Headquarters</p>
                                <p className="text-lg">1 AutoVerse Blvd, Innovation City</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer hover:text-pastel-blue transition-colors">
                            <div className="w-12 h-12 rounded-full border border-pastel-sky/20 flex items-center justify-center group-hover:bg-pastel-sky/10 transition-colors">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-pastel-sky/40 uppercase tracking-widest mb-1">Digital Comms</p>
                                <p className="text-lg">concierge@autoverse.com</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: The Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ...SMOOTH_TRANSITION, delay: 0.2 }}
                    className="relative"
                >
                    {/* Form Container */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                        {/* Decorative Scanner Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pastel-blue/50 to-transparent opacity-50 animate-[scan_4s_ease-in-out_infinite]" />

                        {!isSuccess ? (
                            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                                <div>
                                    <p className="text-sm uppercase tracking-widest text-pastel-light/50 mb-6 font-semibold">Select Configuration</p>
                                    <div className="flex flex-wrap gap-4">
                                        <RadioOption label="Test Drive" value="test-drive" selected={formState.topic} onChange={(v) => setFormState({ ...formState, topic: v })} />
                                        <RadioOption label="Sales" value="sales" selected={formState.topic} onChange={(v) => setFormState({ ...formState, topic: v })} />
                                        <RadioOption label="Support" value="support" selected={formState.topic} onChange={(v) => setFormState({ ...formState, topic: v })} />
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <InputField label="Driver Name" name="name" value={formState.name} onChange={handleChange} />
                                    <InputField label="Comms Channel (Email)" type="email" name="email" value={formState.email} onChange={handleChange} />
                                    <InputField label="Mission / Inquiry" name="message" value={formState.message} onChange={handleChange} />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group w-full relative h-16 bg-pastel-light text-pastel-blue font-bold tracking-[0.2em] uppercase overflow-hidden rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                                    <div className="relative flex items-center justify-center gap-3">
                                        {isSubmitting ? (
                                            <span className="animate-pulse">Ignition Sequence...</span>
                                        ) : (
                                            <>
                                                <span>Start Engine</span>
                                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </div>
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                            >
                                <div className="w-20 h-20 rounded-full border-2 border-pastel-light flex items-center justify-center text-pastel-light">
                                    <Check size={40} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-cinzel font-bold text-pastel-light mb-2">Message Received</h3>
                                    <p className="text-pastel-light/60">Our specialists are reviewing your transmission.</p>
                                </div>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="text-sm uppercase tracking-widest text-pastel-light/40 hover:text-pastel-light transition-colors"
                                >
                                    Send Another
                                </button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>

            <style>{`
                @keyframes scan {
                    0%, 100% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(500px); opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default Contact;
