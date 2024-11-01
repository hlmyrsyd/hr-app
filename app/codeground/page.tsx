'use client'

import { motion } from "framer-motion";

export default function page() {
    return (
        <div className="flex w-full h-screen p-10 border-2 border-white/20 flex-col">
            <code className="w-full items-center justify-center text-center">
                <h1>This is CodeGround to test <a href="/codelab">CodeLab</a> Documentation</h1>
            </code>
            <div className="h-full flex items-center justify-center">
                <div
                    className="flex overflow-hidden text-[10rem] border-x-2"
                >
                    <motion.div
                    style={{ display: 'flex', minWidth: '100%' }}
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: 'linear',
                    }}
                    >
                        <div 
                            className="flex w-full justify-around"
                        >
                            <p>This</p>
                            <p>text</p>
                            <p>keeps</p>
                            <p>moving</p>
                        </div>
                    </motion.div>
                    <motion.div
                    style={{ display: 'flex', minWidth: '100%' }}
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: 'linear',
                    }}
                    >
                        <div 
                            className="flex w-full justify-around"
                        >
                            <p>This</p>
                            <p>text</p>
                            <p>keeps</p>
                            <p>moving</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
};
