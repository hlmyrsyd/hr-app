'use client';

import { motion } from "framer-motion";
import { WavyClick } from "..";

interface ProjectCardProps {
    title: string;
    description: string;
    images: string[];
    toolsImage: string;
    isExpanded: boolean;
    onExpand: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    images,
    toolsImage,
    isExpanded,
    onExpand,
}) => {
    return (
        <motion.div
            className="relative border-b border-black/[.08] hover:border-white dark:border-white/[.145] transition duration-300 text-white overflow-hidden"
            whileHover="hover"        
        >
            {/* White overlay div */}
            <motion.div
                onClick={onExpand}
                className="cursor-pointer absolute top-0 left-0 w-full h-full max-h-[60px] bg-white z-50"  // Make sure it's in front
                initial={{ y:'-100%' }}
                variants={{
                    hover: { y: 0 },  // Slides down on hover
                }}
                transition={{ duration: 0.3, ease: 'circInOut' }}
            >
                <div className="flex h-full w-full justify-center items-center text-neutral-700">
                    <WavyClick isExpanded={isExpanded} />
                </div>
            </motion.div>

            {/* Content of the card */}
            <div className="relative">
                <div>

                </div>
                <h3 className="text-lg font-bol p-4">{title}</h3>

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
                        <img key={idx} src={image} alt={`Project image ${idx}`} className="w-1/3" />
                        ))}
                    </div>
                    <div className="mt-4">
                        <img src={toolsImage} alt="Tools used" className="w-full" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};
