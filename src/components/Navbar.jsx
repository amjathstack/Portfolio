"use client";

import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <header className="relative z-50">
            <div className="flex items-center justify-between px-6 py-3 md:py-4 border border-gray-200 max-w-5xl rounded-full mx-auto w-full bg-white">
                
                <a href="/" aria-label="Home">
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
                        <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
                        <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
                        <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
                    </svg>
                </a>

                <nav className="hidden md:flex items-center gap-8 text-gray-900 text-sm">
                    <a className="hover:text-indigo-600" href="#home">Home</a>
                    <a className="hover:text-indigo-600" href="#about">About</a>
                    <a className="hover:text-indigo-600" href="#about">Skills</a>
                    <a className="hover:text-indigo-600" href="#projects">Projects</a>
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="#contact"
                        className="hidden md:flex bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
                    >
                        Contact
                    </a>

                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-gray-700"
                        aria-label="Open menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                            <path
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className={`fixed inset-0 bg-white/80 backdrop-blur transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <nav className="flex flex-col items-center justify-center h-full gap-8 text-lg font-medium text-gray-900">
                    <a onClick={closeMenu} href="#home">Home</a>
                    <a onClick={closeMenu} href="#about">About</a>
                    <a onClick={closeMenu} href="#skills">Skills</a>
                    <a onClick={closeMenu} href="#projects">Projects</a>
                    <a
                        onClick={closeMenu}
                        href="#contact"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-full"
                    >
                        Contact
                    </a>

                    <button
                        onClick={closeMenu}
                        className="absolute top-6 right-6 text-gray-600"
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                            <path
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    );
}
