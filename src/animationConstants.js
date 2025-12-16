
// animationConstants.js

/**
 * Standard ultra-smooth glide transition for the entire application.
 * Duration: 2.4s
 * Easing: Custom soft ease-out [0.23, 1, 0.32, 1]
 */
export const SMOOTH_TRANSITION = {
    duration: 2.4,
    ease: [0.23, 1, 0.32, 1]
};

/**
 * Helper to generate a staggered delay with the standard smooth transition.
 * @param {number} delay - The delay in seconds
 * @returns {object} - Transition object with delay
 */
export const getSmoothTransition = (delay = 0) => ({
    ...SMOOTH_TRANSITION,
    delay
});
