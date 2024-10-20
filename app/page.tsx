'use client'

import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
import { useState } from "react";
import { Hero, MainContent, ProjectCard, TransitionWrapper, WavyText } from "./components";
import { Header } from "./components";

interface Project {
  title: string;
  tools: string;
  description: string;
  images: string[];
}

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

  const toggleMain = () => {
    setIsMainExpanded((prev) => !prev);
  };

  const projectDetails: Project[] = [
    {
      title: 'Salemate',
      tools: 'nextJs, TailwindCss',
      description: 'This is a description for project 1.',
      images: ['/img1.jpg', '/img2.jpg', '/img3.jpg']
    },
    {
      title: 'We Rent',
      tools: 'nextJs',
      description: 'This is a description for project 2.',
      images: ['/img4.jpg', '/img5.jpg', '/img6.jpg']
    },
  ];

  const handleExpand = (index: number) => {
    setExpandedProjectIndex(expandedProjectIndex === index ? null : index);
  };

  return (
    <div className="dark:text-white text-neutral-800 flex h-full w-full flex-col items-center min-h-screen px-8 font-[family-name:var(--font-geist-sans)]">
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-neutral-900 z-50"
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
        <div className="">
          <h1>PROJECT</h1>
        </div>
        <div className="grid grid-cols-1">
          {projectDetails.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              tools={project.tools}
              description={project.description}
              images={project.images}
              isExpanded={expandedProjectIndex === index}
              onExpand={() => handleExpand(index)}
            />
          ))}
        </div>
      </div>

      {/* <footer>
        <TransitionWrapper isTransitioning={isTransitioning}>
          <button
            className="rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={() => handleTransition('/codelab')}
          >
            Go To CodeLab
          </button>
        </TransitionWrapper>
      </footer> */}
    </div>
  );
}
