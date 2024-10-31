// components/Sidebar.tsx
import React from 'react';

interface SidebarProps {
    children: React.ReactNode; // Accepting children as a prop
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <aside className="flex flex-col w-64 h-screenp-4 py-36">
            <nav>{children}</nav>
        </aside>
    );
};
