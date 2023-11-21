import React from 'react'
import Image from 'next/image'
import Logo from './../../public/back2vedic_logo.svg'
import Link from 'next/link';
import {FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 w-screen">
      <div className="max-w-screen-xl mx-auto text-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

          {/* Logo and About Us */}
          <div className="flex flex-col">
            <Image src={Logo} alt="Company Logo" className="h-[240px] mb-4" />
            <p className='text-center text-base'>
              For Customer complain / feedback write to manager at above address or below email id or call.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:ml-10 px-5 items-center sm:items-start">
            <h4 className="text-2xl font-semibold sm:text-left mb-4 sm:mb-9">QUICK LINKS</h4>
            <ul className='text-center  sm:text-left text-base'>
              <li className='mb-3 sm:mb-5 hover:text-yellow-300'><Link href="/">Home</Link></li>
              <li className='mb-3 sm:mb-5 hover:text-yellow-300'><Link href="/about">About Us</Link></li>
              <li className='mb-3 sm:mb-5 hover:text-yellow-300'><Link href="/product">Product</Link></li>
              <li className='mb-3 sm:mb-5 hover:text-yellow-300'><Link href="/shop">Shop</Link></li>
              <li className='mb-3 sm:mb-5 hover:text-yellow-300'><Link href="/gallery">Gallery</Link></li>
              <li className='mb-3 sm:mb-5 hover:text-yellow-300'><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col sm:ml-10 px-5 items-center sm:items-start">
            <h4 className="text-2xl font-semibold sm:text-left mb-4 sm:mb-9">SERVICES</h4>
            <ul className='text-center sm:text-left text-base'>
              <li className='mb-3 sm:mb-5 hover:text-yellow-300'><Link href="/shop">Order Now</Link></li>
              <li className='mb-3 sm:mb-5 hover:text-yellow-300'><Link href="/gallery">Show Gallery</Link></li>
              <li className='mb-3 sm:mb-5 hover:text-yellow-300'><Link href="/about">Know About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:ml-10 items-center sm:items-start">
            <h4 className="text-2xl font-semibold sm:text-left mb-4 sm:mb-9">CONTACT</h4>
            <p className='text-center sm:text-left text-base mb-3 sm:mb-5'>Email:<a href="mailto:info@back2vedic.com" className='hover:text-yellow-300'> info@back2vedic.com</a></p>
            <p className='text-center sm:text-left text-base mb-3 sm:mb-5'>Phone:<a href="tel:+919422550090" className='hover:text-yellow-300'> +919420073786</a></p>
            <p className='text-center sm:text-left text-base mb-3 sm:mb-5'>Phone:<a href="tel:+919422550090" className='hover:text-yellow-300'> +919422550090</a></p>
            <p className='text-center sm:text-left text-base mb-3 sm:mb-5'>Address: Survey No.134, At Post Adam, Tehsil Kushi, District Nagpur-441202 State Maharashtra </p>
          </div>
        </div>

        {/* Media Links */}
        <div className="mt-6 flex justify-center">
          <a href="facebook.com/back2vedic" className="text-white text-3xl px-5 hover:text-yellow-300">
            <FaFacebookF />
          </a>
          <a href="instagram.com/back2vedic" className="text-white text-3xl px-5 hover:text-yellow-300">
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

