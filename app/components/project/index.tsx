'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { WavyClick } from "..";

interface ProjectCardProps {
    title: string;
    year: string;
    tools: string[];
    description: string;
    images: string[];
    isExpanded: boolean;
    onExpand: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    year,
    tools,
    description,
    images,
    isExpanded,
    onExpand,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [hoveredTool, setHoveredTool] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // LOGO STICKY TO MOUSE
    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // TOOL HOVER
    const handleToolHover = (tool: string) => {
        setHoveredTool(tool);
    };

    const handleToolLeave = () => {
        setHoveredTool(null);
    };

    // IMAGE HOVER
    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null); // Reset on hover out
    };

    // Determine whether to show animation based on hover state or click (for mobile)
    const handleClick = () => {
        setIsHovered(true);
        onExpand(); 
    };

    return (
        <motion.div
            className="relative border-b border-black/15 hover:border-black dark:hover:border-white dark:border-white/[.145] transition duration-300 text-neutral-800 dark:text-white overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick} 
            whileHover="hover"
        >
            {/* White overlay div */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full max-h-[60px] bg-neutral-800 dark:bg-white z-30"
                initial={{ y: '-100%' }}
                animate={isHovered ? { y: 0 } : { y: '-100%' }} 
                transition={{ duration: 0.3, ease: 'circInOut' }}
            >
                {/* Hover Project Text */}
                <div 
                    className="cursor-pointer flex p-4 h-full w-full justify-between items-center text-white dark:text-neutral-700"
                >
                    <motion.h3 
                        className="text-6xl -my-4 font-semibold"
                        initial={{ x: 0, opacity: 0 }}
                        animate={isHovered ? { x: '10px', opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontFamily: 'var(--font-micro5)' }}
                    >
                        {title}
                    </motion.h3>
                    <WavyClick isExpanded={isExpanded} />
                </div>
            </motion.div>

            {/* Content of the card */}
            <div className="relative">
                <div className="flex items-center p-4">
                    <h3 
                        className="w-1/2 text-xl font-bold transition duration-100"
                    >
                        {title}
                    </h3>
                    <p className="w-1/2 text-4xl -my-4 font-thin text-right">
                        {year}
                    </p>
                </div>

                {/* Expandable content */}
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: isExpanded ? 'auto' : 0 }}
                    transition={{ duration: 0.5, ease: 'circInOut' }}
                    className="overflow-hidden"
                >
                    <div className="flex flex-col px-4 w-full">
                        <p className="text-3xl md:w-1/2 py-4 ">{description}</p>
                        <ul className="flex flex-col gap-4 w-36">
                            {tools.map((tool, idx) => (
                                <li
                                    key={idx}
                                    className="flex flex-row items-center cursor-pointer relative gap-2"
                                    onMouseEnter={() => handleToolHover(tool)}
                                    onMouseLeave={handleToolLeave}
                                    onMouseMove={handleMouseMove}
                                >
                                    <div 
                                        className="flex w-3 h-3 rounded-full bg-neutral-800 dark:bg-white"
                                    />
                                    <span>{tool}</span>
                                    {/* Display the logo next to the tool name */}
                                    {hoveredTool === tool && (
                                        <motion.div
                                            className="absolute pointer-events-none z-50"
                                            initial={{ scale: 0.5 , opacity: 0, x: '-30px' }}
                                            animate={{ scale: 1 , opacity: 1, x: 0 }}
                                            style={{
                                                left: `${mousePosition.x + 15}px`,
                                                top: `${mousePosition.y - 30}px`,
                                                position: 'fixed',
                                            }}
                                            transition={{ duration: 0.3, ease: 'circInOut' }}
                                        >
                                            <Image 
                                                src={`/logos/${tool}.svg`}
                                                alt={`${tool} logo`}
                                                width={50}
                                                height={50}
                                                className="shadow-black"                                            />
                                        </motion.div>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-3 py-4 flex-col md:flex-row flex-wrap sm:flex-nowrap">
                            {images.map((image, idx) => (
                                <motion.div
                                    key={idx}
                                    onMouseEnter={() => handleMouseEnter(idx)}
                                    onMouseLeave={handleMouseLeave}
                                    initial={{ flex: 1 }}
                                    animate={{ 
                                        flex: hoveredIndex === idx ? 4 : 3,
                                        transition: { duration: 0.7, ease: 'easeInOut' }
                                    }}
                                >
                                    <Image 
                                        src={image}
                                        width={800}
                                        height={800}
                                        alt={`Project image ${idx}`}
                                        className="w-full h-auto transition-transform duration-300"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};
