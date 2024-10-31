'use client'
import { motion } from "framer-motion";
import CodeBox from "../components/codeBox/codeBox";

export default function InfiniteText() {
    const sampleCode = `
only test code
    `
    
    return (
        <div className="flex flex-col">
            <div className="border-b border-solid border-black/[.08] dark:border-white/[.145]">
                <h1 className="text-[5rem] font-bold">
                    Infinite Text
                </h1>
            </div>

            <section className="py-4">
                <h1 className="text-xl">
                    Build an Infinite Text Animation with Next.js, Framer Motion
                </h1>
            </section>

            <section className="py-4 ">
                <code>
                    <div 
                        className="flex h-full w-full p-6 flex-col"
                    >
                        <div
                            className="flex overflow-hidden text-4xl border-x-2"
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
                </code>

                <h1>Get code here</h1>
                <CodeBox code={sampleCode} language="JavaScript" />
            </section>
        </div> 
    );
};
