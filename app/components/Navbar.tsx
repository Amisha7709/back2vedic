'use client'
import { useEffect, useState } from 'react';
import Logo from './../../public/back2vedic_logo.svg'
import Link from 'next/link';
import Image from 'next/image'

export default function NavBar() {
    const [navClick, setNavClick] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    const onMenuClick = () => {
        setNavClick(!navClick);
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`${isScrolled ? 'bg-white shadow-lg ' : 'bg-transparent '} transition-all shadow-slate-500/50 z-50 fixed w-screen`}>
            <div id="progress"></div>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center ">
                    <Image src={Logo} width={60} height={60} alt="Logo" />
                </Link>

                <button data-collapse-toggle="navbar-user" type="button"
                    onClick={(e) => { e.preventDefault(); onMenuClick() }}
                    className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden ${isScrolled ? 'brightness-50' : ''}`}
                    aria-controls="navbar-user" aria-expanded="false">
                    {!navClick &&
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    }
                    {navClick &&
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                </button>

                <div className={`items-center justify-between w-full md:flex md:w-auto ${navClick ? '' : 'hidden'}`} id="navbar-user">
                    <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 bg-white shadow-lg shadow-slate-500/50 rounded-lg md:flex-row md:space-x-8 md:bg-transparent md:shadow-none  md:mt-0 md:border-0 `}>
                        <li>
                            <Link href="/"
                                onClick={() => { onMenuClick() }}
                                className="block py-2 pl-3 pr-4 rounded hover:shadow-2xl hover:shadow-amber-800 hover:text-amber-800 underline-offset-4">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about"
                                onClick={() => { onMenuClick() }}
                                className="block py-2 pl-3 pr-4 rounded hover:shadow-2xl hover:shadow-amber-800 hover:text-amber-800 underline-offset-4">
                                About Us
                            </Link>
                        </li>
                        <li className='relative group'>
                            <Link href=""
                                className="block py-2 pl-3 pr-4 rounded hover:shadow-2xl hover:shadow-amber-800 hover:text-amber-800 underline-offset-4"
                            >
                                Product
                            </Link>

                            <ul className="absolute hidden bg-white ml-8 space-y-2 group-hover:block rounded-lg py-2">
                                <li>
                                    <Link href="/productMilk" onClick={onMenuClick} className="block px-6 py-2 rounded hover:bg-lime-400 hover:shadow-xl hover:shadow-amber-800 hover:text-amber-800 underline-offset-4">
                                        A2_Milk
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/productGhee" onClick={onMenuClick} className="block px-6 py-2 rounded hover:bg-lime-400 hover:shadow-xl hover:shadow-amber-800 hover:text-amber-800 underline-offset-4">
                                        A2_Ghee
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/shop"
                                onClick={() => { onMenuClick() }}
                                className="block py-2 pl-3 pr-4 rounded hover:shadow-2xl hover:shadow-amber-800 hover:text-amber-800 underline-offset-4"
                            >
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link href="/gallery"
                                onClick={() => { onMenuClick() }}
                                className="block py-2 pl-3 pr-4 rounded hover:shadow-2xl hover:shadow-amber-800 hover:text-amber-800 underline-offset-4"
                            >
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact"
                                onClick={() => { onMenuClick() }}
                                className="block py-2 pl-3 pr-4 rounded hover:shadow-2xl hover:shadow-amber-800 hover:text-amber-800 underline-offset-4">
                                Contact
                            </Link>
                        </li>

                        <li>
                            <Link href="tel:+919422550090"
                                className="block py-2 pl-3 animate-pulse pr-4 rounded hover:shadow-2xl hover:shadow-amber-800 hover:text-amber-800 bg-lime-500 underline-offset-4">
                                &#128222; 91+9422550090
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
