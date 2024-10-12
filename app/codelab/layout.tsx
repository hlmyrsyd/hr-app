'use client'

import { Metadata } from "next";
import Link from "next/link";
import { Sidebar } from "./components";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//     title: "Hilmy Creative CodeLab",
// };

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-full h-full bg-neutral-800 z-50"
                initial={{ y: 0 }} // Fullscreen overlay
                animate={{ y: "-100%" }} // Slide up out of view
                transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }} // 1 second delay, 1 second slide up
            />
            <motion.div 
                initial={{ opacity: 0 }} // Start with hidden content
                animate={{ opacity: 1 }} // Fade in to fully visible
                transition={{ duration: 2 }} // Adjust the duration as needed
                className="flex flex-row mx-auto max-w-screen-xl gap-4">
                <Sidebar>
                    <Link
                    className="rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-between hover:bg-[#f2f2f2] dark:hover:bg-[#2a2a2a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 mb-4"
                    href="/"
                    >
                    <h1>Home</h1>
                    </Link>
                    <Link
                    className="rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-between hover:bg-[#f2f2f2] dark:hover:bg-[#2a2a2a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 mb-4"
                    href="/codelab/ssrcsr"
                    >
                    <h1>CSR vs SSR</h1>
                    </Link>
                </Sidebar>

                <main
                    className="h-full w-full px-4 py-20"
                >
                    {children}
                </main>
            </motion.div>
        </>
    );
}
