import React from 'react'
import Link from 'next/link';
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];
const Navbar = () => {
  return (
    <div>
      <header className='flex justify-between items-center max-w-7xl mx-auto p-4 border-b'>
        <div>
            <a href=""></a>
            <Link href="/">Ride with us!</Link>
        </div>
         <ul className='flex space-x-4 items-center'>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
         </ul>
      </header>
    </div>
  )
}

export default Navbar
