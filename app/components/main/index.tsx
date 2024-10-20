import { motion } from 'framer-motion';
import { WavyText } from '..';

interface MainContentProps {
    isMainExpanded: boolean;
}

export const MainContent: React.FC<MainContentProps> = ({ isMainExpanded }) => {
    return (
        <motion.main
        className="overflow-hidden border-b border-black/15 dark:border-white/[.145]"
        initial={{ height: 0 }}
        animate={{ height: isMainExpanded ? 'auto' : 0 }}
        transition={{ duration: 0.5, ease: "circInOut" }}
        >
        <div className="flex flex-col lg:flex-row w-full gap-10 py-10">
            <div className="flex-1 flex flex-col w-full lg:w-1/4">
            <h1 className="font-semibold">Location</h1>
            <div className="font-light cursor-default" title="One of the Beautiful Cities in Indonesia">
                <WavyText text="Bandung, Indonesia" />
            </div>
            </div>
            <div className="flex-1 flex flex-col w-full lg:w-1/4">
            <h1 className="font-semibold">Contact</h1>
            <a 
                target="_blank" 
                href="mailto:hilmyrasyad198@gmail.com" 
                className="font-light"
                title="Click to mail me"
            >
                <WavyText text="hilmyrasyad1998@gmail.com" />
            </a>
            </div>
            <div className="flex-2 flex flex-col w-full lg:w-2/4 lg:mt-0">
            <h1 className="text-2xl lg:text-4xl font-medium">
                Self-taught Front End Developer with Creative Thinking.
            </h1>
            <p className="text-xl lg:text-2xl font-extralight">
                Passionate and creative individual with a strong interest in FrontEnd Development. Started as a designer for social media, Furniture, and Web Design. Now has been creating some projects as a Web Designer and Front End Developer.
            </p>
            </div>
        </div>
        </motion.main>
    );
};
