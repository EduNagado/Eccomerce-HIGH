"use client"; 

import Image from 'next/image';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { LuUser } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="flex items-center justify-between p-4">
            <nav className="flex items-center space-x-4">
                <ul className="flex items-center space-x-4">
                    <li><Link href={"/shop"}>SHOP</Link></li>
                    <li><Link href={"/lookbook"}>LOOKBOOKS</Link></li>
                    <li><Link href={"/sobre"}>SOBRE</Link></li>
                    <li><Link href={"/videos"}>VIDEOS</Link></li>
                </ul>
            </nav>
            <Link href={"/home"}>
                <Image
                    
                    className='flex items-center justify-center mx-auto'
                    src="/imgLogo/Logo.png"
                    alt="Logo"
                    width={100}
                    height={110}
                />
            </Link>
            

           
            <div className="flex items-center space-x-8 ml-4"> 
                {/* Lupa com interação de hover */}
                <div className="relative">
                    <button 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="flex items-center justify-center p-2"
                    >
                        <HiMiniMagnifyingGlass className="text-2xl" />
                    </button>
                    {isHovered && (
                        <div className="absolute flex flex-col items-center">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Procurar por..."
                                className="border-b-2 border-gray-300 p-1 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    )}
                </div>

                {/* Ícone do usuário */}
                <LuUser className="text-2xl cursor-pointer" />

                {/* Ícone do carrinho */}
                <IoCartOutline className="text-2xl cursor-pointer" />
            </div>
        </div>
    );
}
