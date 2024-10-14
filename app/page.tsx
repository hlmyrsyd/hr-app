'use client'

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TransitionWrapper } from "./codelab/components";

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const handleTransition = (route: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      router.push(route);
    }, 1000);
};

  return (
    <div className="flex h-full w-full flex-col items-center min-h-screen px-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-neutral-900 z-50"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="flex h-full w-full justify-center items-center text-6xl font-bold">
          <h1>Hi </h1>
        </motion.div>
      </motion.div>
      <header className="flex w-full h-full flex-col items-center sm:items-start border-b border-black/[.08] dark:border-white/[.145]">
        <motion.div 
          className="flex w-full justify-between text-wrap cursor-default font-semibold text-[16rem]"
          whileHover="hover"          
          style={{ fontSize: 'clamp(3rem, 12vw, 16rem)', lineHeight: '1' }}
        >
          {/* first name */}
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
          {/* last name */}
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

      <main>
        <div className="flex w-full gap-10">
          <div className="flex-1 flex-col w-1/4">
            <h1 className="font-semibold">Location</h1>
            <p className="font-light">Bandung, Indonesia</p>
          </div>
          <div className="flex-1 flex-col w-1/4">
            <h1 className="font-semibold">Contact</h1>
            <p className="font-light">hilmyrasyad1998@gmail.com</p>
          </div>
          <div className="flex-2 flex-col w-2/4">
            <h1 className="text-4xl font-medium">Self thought Front End Developer with Creative Thinking.</h1>
            <p className="text-2xl font-extralight">Started as a designer for social media needs, Furniture, and Web Design. Now has been creating some project as a Web Designer and Frontend Developer  </p>
          </div>
        </div>
      </main>

      <footer>
        <TransitionWrapper isTransitioning={isTransitioning}>
          <button
            className="rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={() => handleTransition('/codelab')}
          >
            Go To CodeLab
          </button>
        </TransitionWrapper>
      </footer>
    </div>
  );
}
