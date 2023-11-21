
import { useState, useEffect } from 'react';
import Home1 from '@/public/image/home1.jpg';
import Home2 from '@/public/image/home2.jpg';
import Home3 from '@/public/image/gallery1.jpg';
import Home4 from '@/public/image/AboutPage.jpg';
import Image from 'next/image';
import OrderBtn from './OrderBtn';

const images = [Home1, Home2, Home3, Home4,];

export default function AutoSlider() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the duration (in milliseconds) as per your requirement

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative h-72 md:h-[70vh] lg:h-[80vh] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
      <div className='max-w-screen-xl mx-auto my-auto px-4 heading-service text-center z-20'>
        <h1 className='text-2xl sm:text-4xl lg:text-6xl font-semibold text-white'>HOME GIR COW PRODUCTS</h1>
        <p className='text-l sm:text-2xl lg:text-4xl text-amber-500'>FROM FARM FRESH A2 Product</p>
        <p className='text-lg sm:text-2xl lg:text-3xl text-white'>Crafting a Legacy of Wellness: Discover Our Journey, Embrace Your Health, and Experience the Heart Behind Our A2 Products.</p>
      </div>

      <div className='hidden lg:fixed z-50 mt-[400px] ml-2'>
        <div className='relative'><OrderBtn /></div>
      </div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 ease-in-out`}
        >
          <Image src={image} alt={`Slide ${index + 1}`} className="w-full h-full  object-cover" />
        </div>
      ))}
    </div>
  );
}