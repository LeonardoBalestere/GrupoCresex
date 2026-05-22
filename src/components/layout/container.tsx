import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
    // max-w-7xl locks the ultrawide stretch (1280px max)
    // mx-auto centers it
    // px-4 sm:px-6 lg:px-8 provides mathematically consistent safe areas for mobile -> desktop
    return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${className}`}>
            {children}
        </div>
    );
}   