"use client"
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t text-black/80 py-8">

        <div className="text-center container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

          <div className="mb-4 md:mb-0 text-lg font-semibold text-indigo-600">
            Mohammed Amjath
          </div>


          <div className="text-[13px] md:text-sm flex flex-wrap gap-6 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MohammedAmjath. All rights reserved.
          </div>


          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>

    </footer>
  );
};

export default Footer;
