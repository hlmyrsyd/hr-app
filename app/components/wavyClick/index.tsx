'use client';

import { motion } from "framer-motion";

interface WavyClickProps {
    isExpanded: boolean;
}

export const WavyClick: React.FC<WavyClickProps> = ({ isExpanded }) => {
    const expandText = "Expand";
    const closeText = "Close";

    const letterVariants = {
        initial: { y: 0 }, // Default position
        animate: { y: -22, transition: { ease: "easeInOut", duration: 0.5 } }, // Moves up on click
        exit: { y: 0, transition: { ease: "easeInOut", duration: 0.5 } }, // Moves down when clicked again
    };

    const secondVariants = {
        initial: { y: 20 }, // Default position
        animate: { y: 0, transition: { ease: "easeInOut", duration: 0.4 } }, // Moves up on click
        exit: { y: 20, transition: { ease: "easeInOut", duration: 0.4 } }, // Moves down when clicked again
    };

    const borderVariants = {
        initial: { width: 0 },
        animate: { width: "100%", transition: { ease: "easeInOut", duration: 0.8 } }, // Smoothly moves from left to right
        exit: { width: 0, transition: { ease: "easeInOut", duration: 0.2, delay: 0.2 } }, // Retracts smoothly
    };

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.01,
                ease: "easeInOut",
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.005,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className="inline-block text-white dark:text-neutral-700 hover:text-neutral-800 transition duration-300 delay-100">
            {/* Text Animation */}
            <motion.div
                className="flex flex-col h-5 overflow-hidden"
                initial="initial"
                animate={isExpanded ? "animate" : "exit"} // Link animation with isExpanded state
                variants={containerVariants}
            >
                <div className="relative top-0">
                    {expandText.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
                <div className="relative -top-6">
                    {closeText.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={secondVariants}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Bottom Border Animation */}
            <motion.div
                className="h-[1px] bg-white dark:bg-neutral-800 mt-1"
                variants={borderVariants}
                initial="initial"
                animate={isExpanded ? "animate" : "exit"} // Animate based on isExpanded state
            />
        </div>
    );
};