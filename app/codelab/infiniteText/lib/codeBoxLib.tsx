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

import { motion } from "framer-motion";

export default function Home() {
    return (
        <main>
            <InfiniteText />
        </main>
    );
}`
    }
]
