interface Project {
    title: string;
    year: string;
    tools: string[];
    description: string;
    images: string[];
}

export const projectDetails: Project[] = [
    {
        title: 'Salemate',
        year: '2024',
        tools: [ 'Development', 'Web Design', 'Figma', 'NextJs', 'TailwindCSS'],
        description: 'Contributed to the design and development of Salemate as FrontEnd Team. This project is focused on the needs of restaurants and cafes with a UI that is friendly and comfortable for daily use.',
        images: ['/image/salemate1.png', '/image/salemate2.png', '/image/salemate3.png']
    },
    {
        title: 'We Rent',
        year: '2024',
        tools: [ 'Development', 'NextJs', 'TailwindCSS'],
        description: 'Develop design plans from existing design products named Werent from RevoU by being part of the FrontEnd Team. Focus on implementing features and developing with smooth and visually appealing animations.',
        images: ['/image/werent1.png', '/image/werent2.png', '/image/werent3.png']
    },
];

export type { Project };