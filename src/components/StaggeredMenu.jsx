import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SMOOTH_TRANSITION } from '../animationConstants';
import { Heart } from 'lucide-react';

const StaggeredMenu = ({
    items = [],
    socialItems = [],
    displaySocials = false,
    displayItemNumbering = false,
    menuButtonColor = "#000",
    openMenuButtonColor = "#fff",
    changeMenuColorOnOpen = true,
    colors = ['#f3f4f6', '#d1d5db'],
    logoUrl,
    accentColor = "#000",
    textColor = "#ffffff",
    onMenuOpen,
    onMenuClose,
    position = "right"
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (isOpen && onMenuOpen) onMenuOpen();
        if (!isOpen && onMenuClose) onMenuClose();
    }, [isOpen]);

    // Handle click outside to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const sidebarVariants = {
        closed: {
            clipPath: `circle(30px at ${position === 'left' ? '40px' : 'calc(100% - 40px)'} 40px)`,
            transition: {
                ...SMOOTH_TRANSITION,
                delay: 0.2 // Wait foritems to disappear
            }
        },
        open: {
            clipPath: `circle(150% at ${position === 'left' ? '40px' : 'calc(100% - 40px)'} 40px)`,
            transition: SMOOTH_TRANSITION
        }
    };

    const itemVariants = {
        closed: { opacity: 0, y: 20 },
        open: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                ...SMOOTH_TRANSITION,
                delay: i * 0.1 + 0.3
            }
        })
    };

    const buttonColor = isOpen && changeMenuColorOnOpen ? openMenuButtonColor : menuButtonColor;

    return (
        <>
            {/* Menu Toggle Button */}
            <button
                ref={buttonRef}
                onClick={toggleMenu}
                className="fixed top-6 z-50 w-16 h-16 rounded-full bg-[#1B3C53] shadow-2xl flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 focus:outline-none group"
                style={{ [position]: '24px' }}
            >
                <div className="relative w-7 h-5 flex flex-col justify-between items-center overflow-hidden">
                    <motion.span
                        className="w-full h-[2px] rounded-full bg-current transition-all duration-300 origin-right"
                        style={{ backgroundColor: buttonColor }}
                        animate={isOpen ? { rotate: -45, y: -1 } : { rotate: 0, y: 0 }}
                    />
                    <motion.span
                        className="w-full h-[2px] rounded-full bg-current transition-all duration-300"
                        style={{ backgroundColor: buttonColor }}
                        animate={isOpen ? { x: "100%", opacity: 0 } : { x: 0, opacity: 1 }}
                    />
                    <motion.span
                        className="w-full h-[2px] rounded-full bg-current transition-all duration-300 origin-right"
                        style={{ backgroundColor: buttonColor }}
                        animate={isOpen ? { rotate: 45, y: 1 } : { rotate: 0, y: 0 }}
                    />
                </div>
            </button>

            {/* Full Screen Menu - Half Width */}
            <motion.nav
                ref={menuRef}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={sidebarVariants}
                className={`fixed top-0 bottom-0 z-40 h-screen w-full md:w-1/2 ${position === 'left' ? 'left-0' : 'right-0'}`}
                style={{
                    background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
                }}
            >
                <div className="flex flex-col h-full p-8 md:p-16 justify-center">
                    {logoUrl && (
                        <motion.img
                            src={logoUrl}
                            alt="Logo"
                            className="absolute top-8 left-8 h-12 w-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isOpen ? 1 : 0 }}
                            transition={{ delay: 0.2 }}
                        />
                    )}

                    <Link
                        to="/wishlist"
                        onClick={handleLinkClick}
                        className="absolute top-8 left-8 z-50 hover:scale-110 transition-transform text-white/90 hover:text-white"
                        style={{ color: textColor }}
                        aria-label="View Wishlist"
                    >
                        <Heart size={32} />
                    </Link>

                    <ul className="flex flex-col space-y-4">
                        {items.map((item, i) => {
                            const hasSubItems = item.subItems && item.subItems.length > 0;
                            const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

                            return (
                                <motion.li
                                    key={item.label}
                                    custom={i}
                                    variants={itemVariants}
                                    className="overflow-hidden"
                                >
                                    <div className="group flex flex-col">
                                        <div className="flex items-center justify-between">
                                            <Link
                                                to={item.link}
                                                onClick={handleLinkClick}
                                                className="flex items-center text-4xl md:text-5xl font-bold tracking-tight hover:opacity-80 transition-all cursor-pointer"
                                                style={{ color: textColor }}
                                                aria-label={item.ariaLabel}
                                            >
                                                {displayItemNumbering && (
                                                    <span className="text-lg md:text-xl mr-4 opacity-50 font-mono" style={{ color: accentColor }}>
                                                        {String(i + 1).padStart(2, '0')}
                                                    </span>
                                                )}
                                                <span className="relative overflow-hidden flex items-center">
                                                    {item.label}
                                                    <span className="absolute bottom-0 left-0 w-full h-1 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" style={{ backgroundColor: accentColor }}></span>
                                                </span>
                                            </Link>

                                            {hasSubItems && (
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setIsSubMenuOpen(!isSubMenuOpen);
                                                    }}
                                                    className={`ml-4 text-2xl transform transition-transform focus:outline-none p-2 ${isSubMenuOpen ? 'rotate-180' : ''}`}
                                                    style={{ color: textColor }}
                                                    aria-label="Toggle submenu"
                                                >
                                                    ▼
                                                </button>
                                            )}
                                        </div>

                                        {/* Submenu */}
                                        <AnimatePresence>
                                            {hasSubItems && isSubMenuOpen && (
                                                <motion.ul
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="pl-12 mt-2 space-y-2 border-l-2"
                                                    style={{ borderColor: accentColor }}
                                                >
                                                    {item.subItems.map((subItem, index) => (
                                                        <motion.li
                                                            key={subItem.label}
                                                            initial={{ x: -20, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ delay: index * 0.05 }}
                                                        >
                                                            <Link
                                                                to={subItem.link}
                                                                onClick={handleLinkClick}
                                                                className="text-xl md:text-2xl opacity-80 hover:opacity-100 transition-all block py-1"
                                                                style={{ color: textColor }}
                                                            >
                                                                {subItem.label}
                                                            </Link>
                                                        </motion.li>
                                                    ))}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.li>
                            );
                        })}
                    </ul>

                    {displaySocials && socialItems.length > 0 && (
                        <motion.div
                            className="absolute bottom-12 left-0 w-full px-8 md:px-16 flex space-x-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{
                                ...SMOOTH_TRANSITION,
                                delay: items.length * 0.1 + 0.4
                            }}
                        >
                            {socialItems.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.link}
                                    className="opacity-70 hover:opacity-100 transition-opacity text-sm uppercase tracking-widest font-medium"
                                    style={{ color: textColor }}
                                >
                                    {social.label}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </div>
            </motion.nav>
        </>
    );
};

export default StaggeredMenu;
