"use client";

import { useState } from 'react';

const Sidebar = () => {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <div className={`h-screen bg-white p-4 ${isExpanded ? 'w-auto' : 'w-1/6'}`}>
            <button
                onClick={() => setExpanded(!isExpanded)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <p className={`${isExpanded ? 'hidden' : 'block'}`}>Contacto</p>
            <p className={`${isExpanded ? 'hidden' : 'block'}`}>Inicio de sesion</p>
        </div>
    );
}

export default Sidebar;