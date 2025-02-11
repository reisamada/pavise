"use client";

import React from "react";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-6 md:flex md:items-center md:justify-between">
                {/* Bagian Kiri */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold">.PAVISE</h2>
                    <p className="text-sm text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                {/* Bagian Tengah: Navigasi */}
                <nav className="flex justify-center gap-4 mt-4 md:mt-0">
                    <a href="/" className="text-sm text-gray-500 hover:text-gray-900 transition">Buy Contract</a>
                </nav>

                {/* Bagian Kanan: Sosial Media */}
                <div className="flex justify-center gap-4 mt-4 md:mt-0">
                    <a href="https://x.com/ScanWithPavise" className="text-gray-500 hover:text-gray-900 transition">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/reisamada/pavise" className="text-gray-500 hover:text-gray-900 transition">
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
