"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

const LogoutPage = () => {
    const router = useRouter();
  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div>
      <button className='bg-blue-400 px-4 py-4 rounded-2xl' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutPage;
