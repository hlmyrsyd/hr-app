'use client';

import { motion } from "framer-motion";

export default function Header() {
    return (
        <header className="flex w-full h-full flex-col items-center sm:items-start border-b border-black/[.08] dark:border-white/[.145]">
            <motion.div 
                className="flex w-full justify-between text-wrap cursor-default font-semibold text-[16rem]"
                whileHover="hover"          
                style={{ fontSize: 'clamp(3rem, 12vw, 16rem)', lineHeight: '1' }}
            >
                {/* First name */}
                <div className="flex" title="This is my First Name">
                <h1>H</h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    variants={{
                    hover: { opacity: 1, transition: { duration: 0.1, ease: "easeInOut" } }
                    }}
                >
                    I
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    variants={{
                    hover: { opacity: 1, transition: { duration: 0.1, delay: 0.03, ease: "easeInOut" } }
                    }}
                >
                    L
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    variants={{
                    hover: { opacity: 1, transition: { duration: 0.1, delay: 0.06, ease: "easeInOut" } }
                    }}
                >
                    M
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    variants={{
                    hover: { opacity: 1, transition: { duration: 0.1, delay: 0.09, ease: "easeInOut" } }
                    }}
                >
                    Y
                </motion.h1>
                </div>
                {/* Last name */}
                <div className="flex" title="This is my Last Name">
                <h1>R</h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    variants={{
                    hover: { opacity: 1, transition: { duration: 0.1, delay: 0.12, ease: "easeInOut" } }
                    }}
                >
                    A
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    variants={{
                    hover: { opacity: 1, transition: { duration: 0.1, delay: 0.15, ease: "easeInOut" } }
                    }}
                >
                    S
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    variants={{
                    hover: { opacity: 1, transition: { duration: 0.1, delay: 0.18, ease: "easeInOut" } }
                    }}
                >
                    Y
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    variants={{
                    hover: { opacity: 1, transition: { duration: 0.1, delay: 0.21, ease: "easeInOut" } }
                    }}
                >
                    A
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    variants={{
                    hover: { opacity: 1, transition: { duration: 0.1, delay: 0.24, ease: "easeInOut" } }
                    }}
                >
                    D
                </motion.h1>
                </div>
            </motion.div>
        </header>
    );
}
