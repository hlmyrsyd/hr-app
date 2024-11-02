'use client'
import InfiniteText from "./infiniteText";

const Text = () => (
    <div 
        className="flex w-full justify-around"
    >
        <p>This</p>
        <p>text</p>
        <p>keeps</p>
        <p>moving</p>
    </div>
);

export default function page() {
    return (
        <div className="flex w-full h-screen p-10 border-2 border-white/20 flex-col">
            <code className="w-full items-center justify-center text-center">
                <h1>This is CodeGround to test <a href="/codelab">CodeLab</a> Documentation</h1>
            </code>
            <div className="h-full flex items-center justify-center">
                <InfiniteText InfiniteTextComponent={Text} />
            </div>
        </div>
    )
};
