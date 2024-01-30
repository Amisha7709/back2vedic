'use client'
import Image from 'next/image';
import Logo from './../../public/LabhanyaAgro_Logo.webp';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="FooterImage text-white pt-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <Link href="/">
              <Image src={Logo} alt="Company Logo" className="mb-4 mx-auto" />
            </Link>
            <p className='text-base text-center'>
              For Customer complain / feedback write to message at given Address or Email Id or Call.
            </p>
          </div>

          <div className="flex flex-col ml-5 md:ml-10 lg:px-5 items-center sm:items-start">
            <h4 className="text-2xl font-semibold sm:text-left mb-4 sm:mb-9">QUICK LINKS</h4>
            <ul className='text-center  sm:text-left text-base'>
              <li className='mb-3 sm:mb-5 hover:text-amber-500'><Link href="/">Home</Link></li>
              <li className='mb-3 sm:mb-5 hover:text-amber-500'><Link href="/about">About Us</Link></li>
              <li className='mb-3 sm:mb-5 hover:text-amber-500'><Link href="/shop">Shop</Link></li>
              <li className='mb-3 sm:mb-5 hover:text-amber-500'><Link href="/gallery">Gallery</Link></li>
              <li className='mb-3 sm:mb-5 hover:text-amber-500'><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col ml-5 md:ml-10 lg:px-5 items-center sm:items-start">
            <h4 className="text-2xl font-semibold sm:text-left mb-4 sm:mb-9">SERVICES</h4>
            <ul className='text-center sm:text-left text-base'>
              <li className='mb-3 sm:mb-5 hover:text-amber-500'><Link href="/shop">Order Now</Link></li>
              <li className='mb-3 sm:mb-5 hover:text-amber-500'><Link href="/gallery">Show Gallery</Link></li>
              <li className='mb-3 sm:mb-5 hover:text-amber-500'><Link href="/about">Know About Us</Link></li>
            </ul>
          </div>

          <div className="flex flex-col ml-5 md:ml-10 items-center sm:items-start">
            <h4 className="text-2xl font-semibold sm:text-left mb-4 sm:mb-9">CONTACT</h4>
            <p className='text-center sm:text-left text-base mb-3 sm:mb-5'>Email:<a href="mailto:info@back2vedic.com" className='hover:text-amber-500'> info@back2vedic.com</a></p>
            <p className='text-center sm:text-left text-base mb-3 sm:mb-5'>Phone:<a href="tel:+919422550090" className='hover:text-amber-500'> +919422550090</a></p>
            <p className='text-center sm:text-left text-base mb-3 sm:mb-5'>Phone:<a href="tel:+919420073786" className='hover:text-amber-500'> +919420073786</a></p>
            <p className='text-center sm:text-left text-base mb-3 sm:mb-5'>Address:<a href='https://maps.app.goo.gl/faYEqNSm15BtAMGFA' className='hover:text-amber-500' target='_blank'> Survey No-56, Majri, champa village, Umred road , Champa, Maharashtra 441204, India</a></p>
          </div>
        </div>

        <div className="mt-6 flex justify-center mb-3">
          <a href="https://www.facebook.com/back2vedic" target='_blank' className="text-white text-3xl px-5 hover:text-amber-500">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/back2vedic" target='_blank' className="text-white text-3xl px-5 hover:text-amber-500">
            <BsInstagram />
          </a>
        </div>
      </div>
      <hr />
      <div className="text-center p-8">
        <p>© Copyright 2023. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;