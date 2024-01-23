'use client'
import { useEffect, useState } from 'react';
import Logo from './../../public/LabhanyaAgro_Logo.png';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import ghee from '@/public/image/bottle.webp';
import milk from '@/public/image/milk-Bottlle-removebg.png';
import egg from '@/public/image/eggs-removebg.webp';
import Worm from '@/public/image/vermicomposting.png';
import { usePathname } from 'next/navigation';

interface Product {
    productImages: StaticImageData;
    productName: string;
    productUrl: string;
}

export default function NavBar() {

    const pathName = usePathname();
    const [ navClick, onNavClick ] = useState(Boolean);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredProduct, setHoveredProduct] = useState<| null>(null);

    const productItem: Product[] = [
        {
            productImages: milk,
            productName: 'A2 Desi Milk',
            productUrl: '/productMilk'
        },
        {
            productImages: ghee,
            productName: 'A2 Desi Ghee',
            productUrl: '/productGhee'
        },
        {
            productImages: egg,
            productName: 'Country Eggs',
            productUrl: '/productEgg'
        },
        {
            productImages: Worm,
            productName: 'VermiCompost & Earth Worms',
            productUrl: '/productCompost'
        },
    ];

    const onMenuClick = () => onNavClick((preNavClick:any) => !preNavClick);
    const onMouseOver = (productImages: any) => setHoveredProduct(productImages);
    const onMouseOut = () => setHoveredProduct(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'} transition-all shadow-slate-500/50 z-50 fixed w-full`}>
            <div id="progress"></div>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href='/' className="flex items-center">
                    <Image src={Logo} width={70} height={70} alt="Logo"/>
                </Link>

                <button data-collapse-toggle="navbar-user" type="button"
                    onClick={() => onMenuClick() }
                    className={"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white bg-amber-900 rounded-lg lg:hidden"}
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

                <div className={`items-center justify-between w-full lg:flex lg:w-auto ${navClick ? '' : 'hidden'}`} id="navbar-user">
                    <ul className={`flex flex-col font-medium p-4 lg:p-0 mt-4 bg-white shadow-lg shadow-slate-500/50 rounded-lg lg:flex-row lg:space-x-8 lg:bg-transparent lg:shadow-none  lg:mt-0 lg:border-0 `}>
                        <li className='rounded hover:bg-amber-900 hover:text-white'>
                            <Link href="/" className={`block py-2 pl-3 pr-4 underline-offset-4
                                ${pathName === '/' ? ' text-blue-700 underline' : ''} `}>
                                Home
                            </Link>
                        </li>
                        <li className='rounded hover:bg-amber-900 hover:text-white'>
                            <Link href="/about" className={`block py-2 pl-3 pr-4 underline-offset-4
                                ${pathName === '/about' ? 'text-blue-700 underline' : ''} `}>
                            About Us
                            </Link>
                        </li>
                        <li className='relative group '>
                            <Link href='' className={`block py-2 pl-3 pr-4 underline-offset-4 rounded hover:bg-amber-900 hover:text-white
                                ${pathName === '/productEgg' || pathName === '/productMilk' || pathName === '/productGhee' || pathName === '/productCompost' ? 'text-blue-700 underline' : ''} `}>
                                Product
                            </Link>

                            <ul className="relative lg:absolute lg:text-center hidden w-full lg:w-[250px] bg-white lg:-ml-8 shadow-lg group-hover:block pt-3">
                                {productItem.map((value, index) => (
                                    <li className='relative ' key={index}>
                                        <div>
                                            {hoveredProduct === value.productImages && (
                                                <Image src={value.productImages} alt='Image' className='absolute rotate-6 drop-shadow-[4px_5px_gray] w-16 h-12 ml-[-45px] z-10' />
                                            )}
                                        </div>
                                        <Link onMouseOver={() => onMouseOver(value.productImages)}
                                            onMouseOut={onMouseOut} href={`${value.productUrl}`}
                                            className={`block relative px-6 py-2 border-b-2 hover:text-lime-500
                                            ${pathName === `${value.productUrl}` ? ' text-blue-700 underline' : ''}`} >
                                            {value.productName}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className='rounded hover:bg-amber-900 hover:text-white'>
                            <Link
                                href="/shop" className={`block py-2 pl-3 pr-4 underline-offset-4 
                                ${pathName === '/shop' ? 'text-blue-700 underline' : ''} `} >
                                Shop
                            </Link>
                        </li>
                        <li className='rounded hover:bg-amber-900 hover:text-white'>
                            <Link href="/gallery" className={`block py-2 pl-3 pr-4 underline-offset-4 
                                ${pathName === '/gallery' ? 'text-blue-700 underline' : ''} `} >
                                Gallery
                            </Link>
                        </li>
                        <li className='rounded hover:bg-amber-900 hover:text-white'>
                            <Link href="/contact" className={`block py-2 pl-3 pr-4 underline-offset-4 
                                ${pathName === '/contact' ? 'text-blue-700 underline' : ''} `}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href='tel:+919422550090'
                                className="block py-2 px-2 animate-pulse rounded hover:text-white bg-lime-500 underline-offset-4">
                                &#128222; +91 9422550090
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
