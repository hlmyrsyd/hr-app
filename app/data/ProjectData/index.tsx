interface Project {
    title: string;
    tools: string;
    description: string;
    images: string[];
}

export const projectDetails: Project[] = [
    {
        title: 'Salemate',
        tools: 'NextJs, TailwindCSS, ',
        description: 'Contributed to the design and development of Salemate as FrontEnd Team. This project is focused on the needs of restaurants and cafes with a UI that is friendly and comfortable for daily use.',
        images: ['/img1.jpg', '/img2.jpg', '/img3.jpg']
    },
    {
        title: 'We Rent',
        tools: 'nextJs',
        description: 'This is a description for project 2.',
        images: ['/img4.jpg', '/img5.jpg', '/img6.jpg']
    },
];

export type { Project };
