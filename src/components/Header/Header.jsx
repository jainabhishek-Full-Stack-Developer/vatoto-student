"use client";
import { useEffect, useState, useRef } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        };

        if (isSidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen]);

    return (
        <>
            <header className="flex justify-between items-center px-5 py-4 shadow-md bg-[#ff5c00]">
                <Logo />
                <nav className="hidden md:flex items-center gap-6">
                    <ul className="flex gap-6">
                        <li><Link href="/" className="text-[#ffffff]">Home</Link></li>
                        <li><Link href="/course" className="text-[#ffffff]">Courses</Link></li>
                        <li><Link href="/about-us" className="text-[#ffffff]">About</Link></li>
                        <li><Link href="/blog" className="text-[#ffffff]">Blog</Link></li>
                        <li><Link href="/contact-us" className="text-[#ffffff]">Contact</Link></li>
                    </ul>
                    <Link href="/auth/login" className="px-8 py-2 text-[#ff5c00] bg-[#ffffff] rounded-md hover:bg-[#ffffff] cursor-pointer">
                        Login
                    </Link>
                </nav>
                <div className="md:hidden">
                    <Button type="button" onClick={() => setIsSidebarOpen(true)} className="bg-[#ff5c00] hover:bg-[#ff5c00] cursor-pointer p-2 rounded-md">
                        <Menu size={23} className="text-white" />
                    </Button>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <aside ref={sidebarRef} className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg transform transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} z-50`}>
                <div className="p-5 flex justify-between items-center border-b">
                  {/* <Logo/> */}
                    <div className="flex items-center">
                        <Link href="/" aria-label="CourseHive Home">
                            <span className="text-[#ff5c00] text-2xl font-bold">Vatoto</span>
                        </Link>
                    </div>
                    <Button type="button" onClick={() => setIsSidebarOpen(false)} className="text-white bg-[#ff5c00] cursor-pointer hover:bg-[#ff5c00]">
                        ✕
                    </Button>
                </div>
                <nav className="p-5 flex flex-col gap-4">
                    <ul className="flex flex-col gap-4">
                        <li><Link href="/" className="text-gray-700 hover:text-[#ff5c00]" onClick={() => setIsSidebarOpen(false)}>Home</Link></li>
                        <li><Link href="/course" className="text-gray-700 hover:text-[#ff5c00]" onClick={() => setIsSidebarOpen(false)}>Courses</Link></li>
                        <li><Link href="/about-us" className="text-gray-700 hover:text-[#ff5c00]" onClick={() => setIsSidebarOpen(false)}>About</Link></li>
                        <li><Link href="/blog" className="text-gray-700 hover:text-[#ff5c00]" onClick={() => setIsSidebarOpen(false)}>Blog</Link></li>
                        <li><Link href="/contact-us" className="text-gray-700 hover:text-[#ff5c00]" onClick={() => setIsSidebarOpen(false)}>Contact</Link></li>
                    </ul>
                    <Link href="/auth/login" className="block text-center px-4 py-2 bg-[#ff5c00] text-white rounded-md hover:bg-[#ff5c00]" onClick={() => setIsSidebarOpen(false)}>
                        Login
                    </Link>
                </nav>
            </aside>

            {/* Overlay */}
            {isSidebarOpen && <div className="fixed inset-0 bg-black/50  z-40" onClick={() => setIsSidebarOpen(false)} />}
        </>
    );
};

export default Header;
