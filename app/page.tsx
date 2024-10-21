'use client'

import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { 
  Hero, 
  MainContent, 
  ProjectCard, 
  // TransitionWrapper, 
  WavyText 
} from "./components";
import { Header } from "./components";
import { projectDetails } from "./data";

export default function Home() {
  // const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMainExpanded, setIsMainExpanded] = useState(false);
  const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(null);
  // const router = useRouter();


  // const handleTransition = (route: string) => {
  //   setIsTransitioning(true);
  //   setTimeout(() => {
  //     router.push(route);
  //   }, 1000);
  // };
  
  const infoButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMain = () => {
    setIsMainExpanded((prev) => !prev);
  };

  const handleExpand = (index: number) => {
    setExpandedProjectIndex(expandedProjectIndex === index ? null : index);
  };

  const handleGetInTouch = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    setTimeout(() => {
      infoButtonRef.current?.click(); // Auto-click the Information button after scrolling
    }, 500); // Delay the click to allow scrolling to finish
  };

  return (
    <div className="dark:text-white text-neutral-800 flex h-full w-full flex-col items-center min-h-screen px-8 font-[family-name:var(--font-geist-sans)]">
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-white dark:bg-neutral-900 z-50"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, delay: 0.8, ease: "circInOut" }}
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

        <div className="flex justify-evenly">
          <motion.button 
            ref={infoButtonRef}
            onClick={toggleMain}
            title="Checkout Information about me"
          >
            <WavyText text="Information" />
          </motion.button>
          <a 
            href="https://www.linkedin.com/in/hilmyrasyad/"
            target="_blank"
            title="Checkout My LinkedIn"
          >
            <WavyText text="LinkedIn" />
          </a>
        </div>

        <MainContent isMainExpanded={isMainExpanded} />
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="">
          <Hero /> 
        </div>
      </div>

      {/* Project */}
      <div className="w-full">
        <div className="p-4 border-b border-black/15 dark:border-white/[.145]">
          <h1 className="text-6xl font-[family-name:var(--font-micro5)]">PROJECT</h1>
        </div>
        <div className="grid grid-cols-1">
          {projectDetails.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              year={project.year}
              tools={project.tools}
              description={project.description}
              images={project.images}
              isExpanded={expandedProjectIndex === index}
              onExpand={() => handleExpand(index)}
            />
          ))}
        </div>
      </div>

      <footer className="w-full pb-4">
        <div className="flex flex-col justify-end items-end h-[300px] gap-4">
            {/* clickable and redirect to  main content, and autoclick the information*/}
            <div
              className="cursor-pointer flex w-full bg-neutral-800/25 dark:bg-white/25 dark:text-neutral-800 text-white py-2 overflow-hidden transition duration-300 hover:dark:bg-white hover:bg-neutral-800 ease-in-out"
              onClick={handleGetInTouch}
            >
              <motion.p
                className="text-6xl font-bold font-[family-name:var(--font-micro5)]"
                animate={{ x: ['300%', '-300%'] }}  // Moving from right to left
                transition={{
                    duration: 12,  // Duration of one full loop
                    ease: "linear", // Smooth linear movement
                    repeat: Infinity, // Infinite loop
                }}
              >
                Let's get in touch
              </motion.p>
            </div>
            <div className="flex w-full justify-between border-t text-black/15 dark:text-white/[.145] border-black/15 dark:border-white/[.145]">
              <div className="pt-2 flex w-full flex-col justify-center  ">
                <p>©</p>
                <p>2024</p>
              </div>
              <div className="flex flex-col justify-center text-right font-[family-name:var(--font-micro5)] text-3xl">
                <p className="-mb-4">Hilmy</p>
                <p className="-mb-4">Rasyad</p>
              </div>
            </div>
        </div>
      </footer>

      {/* <footer>
        <TransitionWrapper isTransitioning={isTransitioning}>
          <button
            className="rounded-md border border-solid border-black/15 dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={() => handleTransition('/codelab')}
          >
            Go To CodeLab
          </button>
        </TransitionWrapper>
      </footer> */}
    </div>
  );
}
