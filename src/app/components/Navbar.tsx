"use client";
import React, { use } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
];


const Navbar = () => {
    const pathname = usePathname();
    console.log("Current Pathname:", pathname);
    return (
        <div>
            <header className='flex justify-between items-center max-w-7xl mx-auto p-4 border-b'>
                <div>
                    <a href=""></a>
                    <Link href="/">Ride with us!</Link>
                </div>
                <ul className='flex space-x-4 items-center'>
                    {navItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={index}>
                                <Link className={`px-3 py-1 text-gray-400 ${isActive ? "text-white font-bold" : ""}`} href={item.href}>{item.name}</Link>
                            </li>
                        )
                    }

                    )
                    }
                </ul>
            </header>
        </div>
    )
}

export default Navbar
