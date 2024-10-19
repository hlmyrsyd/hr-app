'use client'

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Hero, ProjectCard, TransitionWrapper, WavyText } from "./components";
import { Header } from "./components";

interface Project {
  title: string;
  description: string;
  images: string[];
  toolsImage: string;
}

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMainExpanded, setIsMainExpanded] = useState(false);
  const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(null);
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

  const projectDetails: Project[] = [
    {
      title: 'Project 1',
      description: 'This is a description for project 1.',
      images: ['/img1.jpg', '/img2.jpg', '/img3.jpg'],
      toolsImage: '/tools1.jpg',
    },
    {
      title: 'Project 2',
      description: 'This is a description for project 2.',
      images: ['/img4.jpg', '/img5.jpg', '/img6.jpg'],
      toolsImage: '/tools2.jpg',
    },
  ];

  const handleExpand = (index: number) => {
    setExpandedProjectIndex(expandedProjectIndex === index ? null : index);
  };

  return (
    <div className="flex h-full w-full flex-col items-center min-h-screen px-8 font-[family-name:var(--font-geist-sans)]">
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
        <motion.main
          className="overflow-hidden border-b border-black/[.08] dark:border-white/[.145]"
          initial={{ height: 0 }}
          animate={{ height: isMainExpanded ? "auto" : 0 }}
          transition={{ duration: 0.5, ease:"circInOut" }}
        >
          <div className="flex flex-col lg:flex-row w-full gap-10 py-10">
            <div className="flex-1 flex flex-col w-full lg:w-1/4">
              <h1 className="font-semibold">Location</h1>
              <div 
                className="font-light cursor-default"
                title="Its One of the Beautiful City in Indonesia"
              >
                <WavyText text="Bandung,Indonesia"/>
              </div>
            </div>
            <div 
              className="flex-1 flex flex-col w-full lg:w-1/4"
            >
              <h1 className="font-semibold">Contact</h1>
              <a 
                target="_blank" 
                href="mailto:hilmyrasyad198@gmail.com" 
                className="font-light"
                title="Click to mail me"
              >
                <WavyText text="hilmyrasyad1998@gmail.com"/>
              </a>
            </div>
            <div className="flex-2 flex flex-col w-full lg:w-2/4 lg:mt-0">
              <h1 className="text-2xl lg:text-4xl font-medium">
                Self-taught Front End Developer with Creative Thinking.
              </h1>
              <p className="text-xl lg:text-2xl font-extralight">
                Passionate and creative individual with a strong interest in Front End Development. Started as a designer for social media, Furniture, and Web Design.
                Now has been creating some projects as a Web Designer and Front End Developer.
              </p>
            </div>
          </div>
        </motion.main>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="">
          <Hero /> 
        </div>
      </div>

      {/* Project */}
      <div className="w-full">
        <div className="grid grid-cols-1">
          {projectDetails.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              images={project.images}
              toolsImage={project.toolsImage}
              isExpanded={expandedProjectIndex === index}
              onExpand={() => handleExpand(index)}
            />
          ))}
        </div>
      </div>

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
