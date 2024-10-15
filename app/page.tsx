'use client'

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TransitionWrapper, WavyText } from "./components";
import { Header } from "./components";

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMainExpanded, setIsMainExpanded] = useState(false);
  const router = useRouter();

  const handleTransition = (route: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      router.push(route);
    }, 1000);
  };

  const toggleMain = () => {
    setIsMainExpanded((prev) => !prev);
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
          <h1>Hi</h1>
        </motion.div>
      </motion.div>

      <div className="flex flex-col w-full gap-1">
        <Header />
        <div>
          <motion.button 
            onClick={toggleMain}
            title="Checkout Information about me"
          >
            <WavyText text="Information" />
          </motion.button>
        </div>
      </div>


      <motion.main
        className="overflow-hidden border-b border-black/[.08] dark:border-white/[.145]"
        initial={{ height: 0 }} // Start collapsed
        animate={{ height: isMainExpanded ? "auto" : 0 }} // Animate height based on state
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col lg:flex-row w-full gap-10">
          <div className="flex-1 flex flex-col w-full lg:w-1/4">
            <h1 className="font-semibold">Location</h1>
            <p className="font-light">Bandung, Indonesia</p>
          </div>
          <div className="flex-1 flex flex-col w-full lg:w-1/4">
            <h1 className="font-semibold">Contact</h1>
            <p className="font-light">hilmyrasyad1998@gmail.com</p>
          </div>
          <div className="flex-2 flex flex-col w-full lg:w-2/4 pb-10 lg:mt-0">
            <h1 className="text-2xl lg:text-4xl font-medium">
              Self-taught Front End Developer with Creative Thinking.
            </h1>
            <p className="text-xl lg:text-2xl font-extralight">
              Started as a designer for social media needs, Furniture, and Web Design.
              Now has been creating some projects as a Web Designer and Frontend Developer.
            </p>
          </div>
        </div>
      </motion.main>

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
