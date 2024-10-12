// components/Sidebar.tsx
import React from 'react';

interface SidebarProps {
    children: React.ReactNode; // Accepting children as a prop
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <aside className="flex flex-col w-64 h-full bg-neutral-900 text-white p-4">
            <h1 className="text-lg mb-4">Sidebar</h1>
            <nav>{children}</nav>
        </aside>
    );
};
