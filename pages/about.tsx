'use client'
import React, { useState } from 'react'
import Layout from './Layout '
import Image, { StaticImageData } from 'next/image'
import Milk from './../public/image/pure-milk.jpg'
import Ghee1 from './../public/image/ghee1.jpg'
import { GiCow } from "react-icons/gi"
import { GiMilkCarton } from "react-icons/gi"
import { LuBadgePercent } from "react-icons/lu"
import { FcApproval } from "react-icons/fc"
import Marquee from "react-fast-marquee";
import imageData from '@/app/json/imageData'
import tabs from '@/app/json/tabs'
import OrderBtn from '@/app/components/OrderBtn'

interface ImageItem {
  image: StaticImageData
}

export default function About() {

  const imgData: ImageItem[] = imageData

  const [selectedTab, setSelectedTab] = useState('Dairy Farms');

  const handleTabClick = (tabLabel: string) => {
    setSelectedTab(tabLabel);
  };

  return (
    <Layout>
      <div className='w-screen'>
        <div className="ImageBanner AboutImage h-72 md:h-[70vh] lg:h-[80vh] bg-no-repeat bg-cover flex items-center bg-center">
          <div className='mt-5 max-w-screen-xl mx-auto px-4 heading-service text-center'>
            <p className=' text-2xl sm:text-4xl lg:text-6xl font-semibold'>ABOUT GIR COW PRODUCTS</p>
            <p className=' text-l sm:text-2xl lg:text-4xl text-amber-500'>FROM FARM FRESH A2 Product</p>
            <p className=' text-xl sm:text-2xl lg:text-3xl'>Pure Delight, Holistic Health: Experience the Essence of A2 Goodness on Our website!</p>
          </div>

          <div className='hidden lg:fixed'>
            <div className='relative'><OrderBtn /></div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto px-4'>
          <div className="pt-8 md:pt-10 lg:pt-14">
            <h1 className='text-3xl lg:text-5xl mb-12 font-bold text-center'>Welcome to our farm</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
              <div className='box-image rounded-lg sm:mt-16 md:mt-0 lg:mt-0'>
                <Image src={Milk} alt='this is image' className='' />
              </div>
              <div>
                <div className="bg-lime-500 h-1 w-2/5 rounded-lg animation-move-right"></div>
                <h3 className='text-2xl lg:text-3xl mb-5 ms-0 font-bold'>A PROMISE OF PURITY</h3>
                <p className='md:text-lg mb-5 text-gray-600'>We at Back to Vedic believe that every of our VEDIC A2 DESI GIR COW PRODUCT should reach customer with promise.
                  A promise of purity and good health. All our effects are made towards delivering this promise. Back to Vedic&apos;s A2 GIR COW GHEE is made from desi GIR cows
                  milk which are not exposed to chemicals toxins or radiations of any form and allowed to graze in open grassland.
                  This product is prepared from traditional ayurvedic curd churning process called Bilona(Using earthen pot).
                  This process preserved the great taste and medical values along with goodness of nutrition and health benefits.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto px-4 mt-9'>
          <div className="sm:pt-8 md:pt-10 lg:pt-14">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
              <div className='lg:ml-9'>
                <div className="bg-lime-500 h-1 w-2/5 rounded-lg animation-move-right"></div>
                <h3 className='text-2xl lg:text-3xl mb-5 font-bold'>A PROMISE OF HEALTH</h3>
                <h1 className='text-xl font-semibold mb-5 text-amber-500'>HEALTH BENEFITS :</h1>
                <ul className='md:text-lg mb-5 text-gray-600'>
                  * Helps in digestion<br />
                  * Reduces the mental stress<br />
                  * Controls Cholesterol Level<br />
                  * Boosts Immune System<br />
                  * Enhance memory and eyesight<br />
                  * Slow Down ageing process<br />
                  * All of the above points are beneficiary<br />
                </ul>
              </div>
              <div className='box-image rounded-lg sm:mt-16 md:mt-0 lg:mt-0'>
                <Image src={Ghee1} alt='this is image' className='' />
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto px-4 mt-20'>
          <h1 className='text-3xl lg:text-5xl mb-5 ms-0 font-bold text-center'>PREMIUM, PURE, FRESH & NATURAL</h1>
          <p className='md:text-lg mb-5 text-gray-600'>Established with a vision to deliver fresh cow’s A2 milk directly from our farm to your home.
            We use milk from a herd of Desi breed Gir cows and deliver it at your doorstep in tamper proof bottles. We promise to always provide you with fresh,
            natural and nutritious milk from our dairy farm to your home. We take great care of cows. We do so because we believe that happy cows produce better, healthier & wholesome milk.
            Using only best-in- class technology and a Desi breed of animals suited to Indian conditions, our dream is to produce natural fresh, pure A2 milk fulfilling international standards and guaranteeing the highest level of quality and purity.
            Our dream is to revolutionize the milk industry in India by providing a high-quality,
            hygienic and nutritious product as well as professional service to as many homes as we possibly can.</p>
        </div>

        <div className='max-w-screen-xl mx-auto px-4'>
          <Marquee>
            <div className='flex mt-10 sm:mt-20'>
              {
                imgData.map((value, index: number) => (
                  <div key={index}>
                    <Image src={value.image} alt='this is image' className='h-64 w-64 mx-5'></Image>
                  </div>
                ))}
            </div>
          </Marquee>
        </div>

        <div className='max-w-screen-xl mx-auto px-4 my-20'>
          <h1 className='text-3xl lg:text-5xl mb-11 ms-0 font-bold text-center'>ABOUT GIR COW</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <div className='text-center shadow-2xl hover:shadow-none p-3'>
              <GiCow className='mx-auto w-14 h-14 text-amber-800' />
              <h1 className='font-bold text-lg '>Always Fresh</h1>
              <p className='text-gray-600'>Milk delivers fresh daily by maintaining supply and cold chain management at 4°C. All process is Automated so hygienic. Its pure, natural & fresh milk.</p>
            </div>
            <div className='text-center shadow-2xl hover:shadow-none p-3'>
              <LuBadgePercent className='mx-auto w-14 h-14 text-green-500' />
              <h1 className='font-bold text-lg'>100% Natural</h1>
              <p className='text-gray-600'>Nothing is removed from milk and added to milk. Its natural in kind so pure that retain its nutritional value. It tastes sweet and Delicious.</p>
            </div>
            <div className='text-center shadow-2xl hover:shadow-none p-3'>
              <FcApproval className='mx-auto w-14 h-14' />
              <h1 className='font-bold text-lg'>Best Quality</h1>
              <p className='text-gray-600'>We care our cows on high priority to keep them happy always. Automated milking and packaging makes our milk Premium quality and valuable Standards.</p>
            </div>
            <div className='text-center shadow-2xl hover:shadow-none p-3'>
              <GiMilkCarton className='mx-auto w-14 h-14 text-gray-600' />
              <h1 className='font-bold text-lg'>Complete Food For Family</h1>
              <p className='text-gray-600'>We have Genuine breed of Desi Gir Cows on our farm. It naturally contains pure A2 protein which is easy to digest and colostrum so its like Mothers milk.</p>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto px-4 mb-20'>
          <h1 className='text-3xl lg:text-5xl mb-11 ms-0 font-bold text-center'>Farm to Customer</h1>
          <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
            <ul>
              {tabs.map((tab) => (
                <li
                  key={tab.label}
                  className={`cursor-pointer list-disc ml-4 my-5 ${selectedTab === tab.label ? ' text-blue-700 font-bold' : 'text-gray-600'}`}
                  onClick={() => handleTabClick(tab.label)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
            <div className='col-span-3'>
              {tabs.map((tab) => (
                selectedTab === tab.label &&
                <div key={tab.label}>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <p className=' mb-5 text-gray-600'>{tab.content}</p>
                    <Image src={tab.img} alt='this is image' className='w-96 h-72' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='lg:hidden'><OrderBtn/></div>
      </div>
    </Layout>
  )
}
