'use client'
import CodeBox from "../components/codeBox/codeBox";
import { CreateProject, InstallFramer, SetUpCode } from "./lib/codeBoxLib";

export default function InfiniteText() {           
    const setUpCode = 
`<div> //Wrap Container
    <div> // 

    </div>
</div>`
    ;
    
    return (
        <div className="flex flex-col">
            <div className="border-b border-solid border-black/[.08] dark:border-white/[.145]">
                <h1 className="text-[5rem] font-bold">
                    Infinite Text
                </h1>
            </div>

            <section className="py-4 gap-4">
                <h1 className="text-xl">
                    Build an Infinite Text Animation with Next.js and Framer Motion
                </h1>
                <p>
                    A website tutorial to make a infinite text animation. 
                </p>
            </section>

            <section className="flex flex-col py-4 gap-4">
                <video 
                    src="/videos/InfiniteText.mp4" 
                    autoPlay
                    loop 
                    muted
                    className="w-full h-auto rounded-lg"
                />
            </section>

            <section className="flex flex-col gap-10">
                <div>
                    <h1 className="text-2xl">Create the Project</h1>
                    <div className="flex flex-col gap-2 w-full">
                        <p>
                            Start the project by creating a Next.js application by running in a terminal
                        </p>
                        <CodeBox files={CreateProject} />
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl">Install Framer Motion</h1>
                    <div className="flex flex-col gap-2 w-full">
                        <p>
                            Install framer motion to manage the animation easier.
                        </p>
                        <CodeBox files={InstallFramer}/>
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl">Setting Up the Project</h1>
                    <div className="flex flex-col gap-2 w-full">
                        <p>
                            Create new file for the InfiniteText inside the page.tsx so it can be used everytime
                        </p>
                        <CodeBox files={SetUpCode} />
                    </div>
                </div>
            </section>
        </div> 
    );
};
