'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { WavyClick } from "..";

interface ProjectCardProps {
    title: string;
    tools: string;
    description: string;
    images: string[];
    isExpanded: boolean;
    onExpand: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    tools,
    description,
    images,
    isExpanded,
    onExpand,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Determine whether to show animation based on hover state or click (for mobile)
    const handleClick = () => {
        setIsHovered(true); // Toggle hover state on click (for mobile)
        onExpand(); // Keep the expansion functionality
    };

    return (
        <motion.div
            className="relative border-b border-black/[.08] hover:border-black dark:hover:border-white dark:border-white/[.145] transition duration-300 text-white overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick} // Handle click for mobile
            whileHover="hover"
        >
            {/* White overlay div */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full max-h-[60px] bg-white z-30"  // Make sure it's in front
                initial={{ y: '-100%' }}
                animate={isHovered ? { y: 0 } : { y: '-100%' }} // Animate based on hover or click
                transition={{ duration: 0.3, ease: 'circInOut' }}
            >
                {/* Hover Project Text */}
                <div 
                    className="cursor-pointer flex p-4 h-full w-full justify-between items-center text-neutral-700 font-[family-name:var(--font-geist-sans)]"
                >
                    <motion.h3 
                        className="text-3xl font-semibold hover:text-neutral-700"
                        initial={{ x: 0, opacity: 0 }}
                        animate={isHovered ? { x: '10px', opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontFamily: 'var(--font-micro5)' }}
                    >
                        {title}
                    </motion.h3>
                    <motion.p
                        className="text-3xl font-semibold hover:text-neutral-700"
                        initial={{ y: '-10px', opacity: 0 }}
                        animate={isHovered ? { y: 0, opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.2, ease: "circInOut" }}
                        style={{ fontFamily: 'var(--font-micro5)' }}
                    >
                        {tools}
                    </motion.p>
                    <WavyClick isExpanded={isExpanded} />
                </div>
            </motion.div>

            {/* Content of the card */}
            <div className="relative">
                <h3 
                    className="text-lg font-bold p-4 transition duration-100 hover:text-neutral-400"
                >
                    {title}
                </h3>

                {/* Expandable content */}
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: isExpanded ? 'auto' : 0 }}
                    transition={{ duration: 0.5, ease: 'circInOut' }}
                    className="overflow-hidden"
                >
                    <p>{description}</p>
                    <div className="flex gap-2 mt-4">
                        {images.map((image, idx) => (
                        <Image 
                            key={idx} 
                            src={image}
                            width={100}
                            height={100}
                            alt={`Project image ${idx}`} 
                            className="w-full" />
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};
