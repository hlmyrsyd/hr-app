'use client';

import { motion, MotionValue, useAnimationFrame, useMotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

export const Hero = () => {
    const ref = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scrollX: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, 1000]);

    const continuousX:MotionValue<number> = useMotionValue(0);

    useAnimationFrame( () => {
        const moveSpeed = 1.2; // Control speed here
        continuousX.set(continuousX.get() - moveSpeed); // Move continuously left
        if (continuousX.get() <= -1800) {
            continuousX.set(1800); // Reset position when off-screen to create a loop
        }
    });

    const combinedX = useTransform([continuousX, scrollX], ([contX, scrX]) => contX + scrX);
    
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1,
            easing: (t) => 1 - Math.pow(1 - t, 3),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div 
            className="flex flex-col items-start w-full text-[10rem] overflow-hidden"
        >
            <div className="text-center">
                <motion.p
                    className="-mt-10 -mb-20"
                    animate="animate"
                    style={{ x: combinedX,  fontFamily: 'var(--font-micro5)' }}
                >
                    CREATIVE
                </motion.p>
                <motion.p
                    className="-mb-20"
                    animate="animate"
                    style={{ x: combinedX, fontFamily: 'var(--font-micro5)'  }}
                    
                >
                    INDEPENDENT
                </motion.p>
                <motion.p
                    className="-mb-10"
                    animate="animate"
                    style={{ x: combinedX, fontFamily: 'var(--font-micro5)'  }}
                >
                    DEVELOPER
                </motion.p>
            </div>
        </div>
    );
};