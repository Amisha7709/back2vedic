
import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import HomePageSlide from '../json/homePageSlide';

interface AutoSlide {
  image: StaticImageData;
}

export default function AutoSlider() {

  const SlideData: AutoSlide[] = HomePageSlide;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SlideData.length);
    }, 3000);

    return () => clearInterval(interval);
  },);

  return (
    <div className="relative overflow-x-hidden h-52 md:h-[70vh] lg:h-[80vh] grid grid-cols-1">
      {SlideData.map((value, index) => (
        <div
          key={index}
          className={`absolute w-full h-full ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 ease-in-out`}
        >
          <Image src={value.image} alt={`Slide ${index + 1}`} className="w-full h-full relative object-fill" />
        </div>
      ))}
    </div>
  );
}