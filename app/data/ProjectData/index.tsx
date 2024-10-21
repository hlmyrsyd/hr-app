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
        description: 'Contributed to the design and development of Salemate as FrontEnd Team. This project is focused on the needs of restaurants and cafes POS system with a UI that is friendly and comfortable for daily use.',
        images: ['/image/salemate1.png', '/image/salemate2.png', '/image/salemate3.png']
    },
    {
        title: 'We Rent',
        year: '2024',
        tools: [ 'Development', 'NextJs', 'TailwindCSS'],
        description: 'Develop design plans from existing design products named We Rent from RevoU by being part of the FrontEnd Team. Focus on implementing features and developing with smooth and visually appealing animations.',
        images: ['/image/werent1.png', '/image/werent2.png', '/image/werent3.png']
    },
    {
        title: 'Mun Interior',
        year: '2024',
        tools: [ 'Web Design', 'Figma', 'NextJs', 'TailwindCSS'],
        description: 'Create a web design and develop the website for Interior Design and Build consultant named Mun Interior. Focus on implementing the characteristics of Mun Interior on the website and showcasing its best work.',
        images: ['/image/muninterior1.png', '/image/muninterior2.png', '/image/muninterior3.png']
    },
    {
        title: 'Bertungku',
        year: '2023',
        tools: [ 'Web Design', 'Figma', 'NextJs', 'TailwindCSS'],
        description: 'Contributing to the design and implementation of a website called Bertungku. This site is a collection of Interior studio works located in Bandung, Indonesia.',
        images: ['/image/bertungku1.png', '/image/bertungku2.png', '/image/bertungku3.png']
    },
    {
        title: 'Gymshark',
        year: '2023',
        tools: [ 'Web Design', 'Figma'],
        description: 'Create a Gymshark App authentication design for training. with a focus on highlighting application products that are very easy to recognize and remember by many users.',
        images: ['/image/gymshark1.png', '/image/gymshark2.png', '/image/gymshark3.png']
    },
    {
        title: 'TheFams',
        year: '2022',
        tools: [ 'Web Design', 'Figma'],
        description: 'Contributed to TheFams website, focusing on implementing landing page design and UI. This project is dedicated to offering consulting solutions to everyday problems in one place.',
        images: ['/image/thefams1.png', '/image/thefams2.png', '/image/thefams3.png']
    },
];

export type { Project };
