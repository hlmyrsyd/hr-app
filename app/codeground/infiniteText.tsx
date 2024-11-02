import { motion } from "framer-motion";

interface InfiniteTextProp {
    InfiniteTextComponent: React.FC;
}

export default function InfiniteText({ InfiniteTextComponent }: InfiniteTextProp) {
    return (
        <div className="flex overflow-hidden text-[10rem] border-x-2">
            <motion.div
                style={{ display: 'flex', minWidth: '100%' }}
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: 'linear',
                }}
            >
                <InfiniteTextComponent />
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
                <InfiniteTextComponent />
            </motion.div>
        </div>
    )
};
