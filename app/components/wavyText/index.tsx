'use client'

import { motion } from "framer-motion";
import { useState } from "react";

export const WavyText = ({ text }: { text: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    const letterVariants = {
        initial: { y: 0 }, // Default position
        hover: { y: -18, transition: { ease: "easeInOut", duration: 0.5 } }, // Moves up on hover
        exit: { y: 0, transition: { ease: "easeInOut", duration: 0.5 } }, // Moves down on hover exit
    };

    const secondVariants = {
        initial: { y: 19 }, // Default position
        hover: { y: 0, transition: { ease: "easeInOut", duration: 0.4 } }, // Moves up on hover
        exit: { y: 19, transition: { ease: "easeInOut", duration: 0.4 } }, // Moves down on hover exit
    };

    const borderVariants = {
        initial: { width: 0 },
        hover: { width: "100%", transition: { ease: "easeInOut", duration: 0.8 } }, // Smoothly moves from left to right
        exit: { width: 0, transition: { ease: "easeInOut", duration: 0.2, delay: 0.2 } }, // Retracts smoothly
    };

    const containerVariants = {
        hover: {
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
        <div className="inline-block"> {/* Wrap everything in an outer div */}
            {/* Text Animation */}
            <motion.div
                className="flex flex-col h-5 overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial="initial"
                animate={isHovered ? "hover" : "exit"} // Control hover and exit with state
                variants={containerVariants}
            >
                <div className="relative top-0">
                    {text.split("").map((letter, index) => (
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
                    {text.split("").map((letter, index) => (
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

            {/* Bottom Border Animation - Placed outside of text div */}
            <motion.div 
                className="h-[1px] bg-white mt-1" // Border settings
                variants={borderVariants}
                initial="initial"
                animate={isHovered ? "hover" : "exit"} // Animate based on hover state
            />
        </div>
    );
};
