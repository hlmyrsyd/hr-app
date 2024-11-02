export const CreateProject = [
    {
        name: 'bash',
        language: 'bash',
        code: `npx create next app@latest`,
    }
];

export const InstallFramer = [
    {
        name: 'bash',
        language: 'bash',
        code: `npx install framer-motion`,
    }
];

export const SetUpCode = [
    {
        name: 'page.tsx',
        language: 'typescript',
        code: 
`'use client'

import InfiniteText from "./components/InfiniteText";
const Text1 = () => (
    <p>
        Infinite Text
    </p>
);

export default function Home() {
    return (
        <main>
            <InfiniteText InfiniteTextComponent={Text} />
        </main>
    );
}`
    },
    {
        name: 'InfiniteText.tsx',
        language: 'typescript',
        code:
`import { motion } from "framer-motion";

interface InfiniteTextProp {
    InfiniteTextComponent: React.FC;
}

export 
`
    }
]
