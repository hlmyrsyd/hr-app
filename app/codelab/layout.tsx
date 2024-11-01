'use client'
import Link from "next/link";
import { Sidebar } from "./components";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TransitionWrapper } from "../components";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const router = useRouter();
    
    const handleTransition = (route: string) => {
        setIsTransitioning(true);
        setTimeout(() => {
          router.push(route); // Use the route passed as a parameter
        }, 1300);
    };

    return (
        <div className="w-full h-full">
            <motion.div
                className="fixed top-0 left-0 w-full h-full bg-white dark:bg-neutral-900 z-50"
                initial={{ y: 0 }} // Fullscreen overlay
                animate={{ y: "-100%" }} // Slide up out of view
                transition={{ duration: 0.8, delay: 0.8, ease: "circInOut" }} // 1 second delay, 1 second slide up
            >
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    className="flex h-full w-full justify-center items-center text-6xl font-bold">
                    <h1>CodeLab</h1>
                </motion.div>
            </motion.div>
            <div
                className="flex flex-row mx-auto max-w-screen-xl gap-4"
            >
                <TransitionWrapper isTransitioning={isTransitioning}>
                    <Sidebar>
                        <button
                            className="w-full rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-between hover:bg-[#f2f2f2] dark:hover:bg-[#2a2a2a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 mb-4"
                            onClick={() => handleTransition('/')}
                        >
                            <h1>Let's get back</h1>
                        </button>
                        <Link
                            className="w-full rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-between hover:bg-[#f2f2f2] dark:hover:bg-[#2a2a2a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 mb-4"
                            href="/codelab"
                        >
                            <h1>CodeLab</h1>
                        </Link>
                        <Link
                            className="w-full rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-between hover:bg-[#f2f2f2] dark:hover:bg-[#2a2a2a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 mb-4"
                            href="/codelab/infiniteText"
                        >
                            <h1>Infinite Text</h1>
                        </Link>
                    </Sidebar>
                </TransitionWrapper>

                <div
                    className="h-full w-full px-4 py-20"
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
