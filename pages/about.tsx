'use client'
import { useState } from 'react'
import Layout from './Layout '
import Image from 'next/image'
import Ghee1 from './../public/image/ghee1.jpg'
import { GiCow, GiThreeLeaves } from "react-icons/gi"
import { GiMilkCarton } from "react-icons/gi"
import { LuBadgePercent } from "react-icons/lu"
import { FcApproval } from "react-icons/fc"
import { IoCheckbox, IoCheckboxOutline } from "react-icons/io5"
import imageData from '@/app/json/imageData'
import tabs from '@/app/json/tabs'
import OrderBtn from '@/app/components/OrderBtn'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

export default function About() {

  const imgData = imageData;
  const [selectedTab, setSelectedTab] = useState('Dairy Farms');
  const handleTabClick = (tabLabel: string) => setSelectedTab(tabLabel);

  return (
    <Layout>
      <div>
        <div className='AboutImage ImageBanner h-56 md:h-[59vh] lg:h-[79vh] img_ratio bg-no-repeat' />

        <div className='hidden lg:block fixed z-50'>
          <div className='relative'><OrderBtn /></div>
        </div>

        <div className='max-w-screen-xl mx-auto px-4'>
          <div className="pt-8 md:pt-10 lg:pt-14">
            <div data-aos='fade-up' data-aos-duration="800">
              <h1 className='text-3xl lg:text-4xl mb-2 text-center font-semibold text-lime-500'>Our Mission <span className='text-black'>Promise Of Purity</span>
                <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
              </h1>
              <p className='mb-5 md:text-lg text-gray-600'>Labhanya Agro Farm objective is to promote agroecological principles and support rural entrepreneurship through prioritizing the development of skills and knowledge.
                We are committed to achieving sustainable growth by consistently providing excellent customer service, encouraging innovation, maintaining high-quality standards, and demonstrating unwavering dedication.<br />
                These values not only enhance agricultural practices rooted in sustainability but also create economic opportunities for rural communities to prosper. By combining profitability with principles, we aim to establish
                a balanced and sustainable model that benefits both our customers and the communities we serve.Our primary focus is on achieving profitable growth through the consistent delivery of exceptional customer service, promoting innovation,
                upholding uncompromising quality standards, and maintaining an unwavering commitment. These values not only strengthen sustainable agricultural practices but also provide rural communities with opportunities for economic prosperity.
              </p>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto px-4 mt-9'>
          <div className="sm:pt-8 md:pt-10 lg:pt-14">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
              <div data-aos='fade-up' data-aos-duration="800">
                <h1 className='text-2xl lg:text-3xl font-semibold mb-5 text-lime-500'>Benefits of <span className='text-gray-900'>Our Pure & Organic Products</span>
                  <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                </h1>
                <ul className='md:text-lg mb-5 text-gray-600'>
                  <span className='text-lime-600 font-extrabold'>&#x2713;</span> Assists in the process of digestion<br />
                  <span className='text-lime-600 font-extrabold'>&#x2713;</span> Alleviates mental stress<br />
                  <span className='text-lime-600 font-extrabold'>&#x2713;</span> Regulates cholesterol levels<br />
                  <span className='text-lime-600 font-extrabold'>&#x2713;</span> Enhances the immune system<br />
                  <span className='text-lime-600 font-extrabold'>&#x2713;</span> Improves memory and eyesight<br />
                  <span className='text-lime-600 font-extrabold'>&#x2713;</span> Slows down the aging process<br />
                  <span className='text-lime-600 font-extrabold'>&#x2713;</span> All the aforementioned aspects provide numerous benefits.<br />
                </ul>
              </div>
              <div className='box-image rounded-lg sm:mt-16 md:mt-0 lg:mt-0' data-aos='fade-up' data-aos-duration="800">
                <Image src={Ghee1} alt='this is image' className='my-auto mx-auto h-[345px] rounded-3xl' />
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto px-4 mt-20' data-aos='fade-up' data-aos-duration="800">
          <h1 className='text-3xl lg:text-4xl mb-5 ms-0 font-semibold text-center text-lime-500'>Gir cows and chickens <span className='text-black'>raised in a free-range environment</span>
            <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
          </h1>
          <p className='md:text-lg mb-5 text-gray-600'>
            Gir cows and chickens reared in a free-range setting offer numerous advantages. Gir cows, renowned for their <Link href='/productMilk' className='text-blue-700 font-semibold hover:underline'>A2 milk</Link>,
            produce milk and <Link href='/productGhee' className='text-blue-700 font-semibold hover:underline'>A2 Ghee</Link> that may contain higher levels of nutrients like omega-3 fatty acids and vitamin D. Our Free-ranging Gir cows offer a range of benefits stemming from their natural
            This is attributed to their access to diverse pastures and natural grazing. The free-ranging environment enables them to engage in natural behaviors,
            thereby promoting their overall well-being.<br /> Similarly, free-ranging chickens have the opportunity to search for insects and plants, resulting in <Link href='/productEgg' className='text-blue-700 font-semibold hover:underline'>Country Eggs</Link> with elevated levels of
            omega-3 fatty acids, antioxidants, and vitamin D. Both practices contribute to animal welfare as they allow the animals to express their natural behaviors and live in conditions that align more closely with their instincts. Moreover, these practices often yield higher-quality
            dairy and Country Eggs, providing consumers with products that may possess superior nutritional profiles compared to those derived from conventionally raised animals.
          </p>
        </div>

        <div className='max-w-screen-xl mx-auto px-4'>
          <Marquee className='overflow-hidden'>
            <div className='flex mt-10 sm:mt-20' data-aos='fade-up' data-aos-duration="800">
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
          <h1 className='text-3xl lg:text-4xl mb-11 ms-0 font-semibold text-center text-lime-500' data-aos='fade-up' data-aos-duration="800">Feature of <span className='text-black'>our Best Product</span>
            <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' data-aos='fade-up' data-aos-duration="800">
            <div className='text-center shadow-2xl hover:shadow-none p-3'>
              <GiCow className='mx-auto w-14 h-14 text-amber-800' />
              <h1 className='font-bold text-lg '>Continuously Revitalized</h1>
              <p className='text-gray-600'>The supply and cold chain management of product ensures its freshness as it is delivered daily while maintaining a temperature. The entire process is handled with utmost hygiene, resulting in pure, natural, and fresh .</p>
            </div>
            <div className='text-center shadow-2xl hover:shadow-none p-3'>
              <LuBadgePercent className='mx-auto w-14 h-14 text-green-500' />
              <h1 className='font-bold text-lg'>Completely natural.</h1>
              <p className='text-gray-600'>No alterations are made to product, neither removing nor adding anything. It maintains its natural state, ensuring its nutritional value is preserved. The taste is both sweet and delectable.</p>
            </div>
            <div className='text-center shadow-2xl hover:shadow-none p-3'>
              <FcApproval className='mx-auto w-14 h-14' />
              <h1 className='font-bold text-lg'>Best Quality</h1>
              <p className='text-gray-600'>Our cows and chicken are given the utmost care and attention to ensure their happiness at all times. By employing meticulous milking and packaging techniques, we are able to produce milk of premium quality that adheres to the highest standards.</p>
            </div>
            <div className='text-center shadow-2xl hover:shadow-none p-3'>
              <GiMilkCarton className='mx-auto w-14 h-14 text-gray-600' />
              <h1 className='font-bold text-lg'>Nourishment for the Entire Family</h1>
              <p className='text-gray-600'>We possess a collection of authentic Desi Gir Cows and Desi Chickens at our farm. Those are naturally produce milk and egg that consists of protein, making it highly digestible. Additionally, it contains colostrum, resembling the nourishing qualities of mother&apos;s milk.</p>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto px-4 mb-20' data-aos='fade-up' data-aos-duration="800">
          <video controls autoPlay muted loop className='h-full w-full'><source src='/videos/A2GirCow.mp4' type="video/mp4" /></video>
        </div>

        <div className='max-w-screen-xl mx-auto px-4 mb-20' data-aos='fade-up' data-aos-duration="800">
          <h1 className='text-3xl lg:text-4xl mb-11 ms-0 font-semibold text-center text-lime-500'>Farm to <span className='text-black'>Customer</span>
            <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
            <ul>
              {tabs.map((tab) => (
                <li
                  key={tab.label}
                  className={`cursor-pointer ml-4 my-5 flex items-center md:items-start mt-0 ${selectedTab === tab.label ? ' text-blue-700 font-bold' : 'text-gray-600'}`}
                  onClick={() => handleTabClick(tab.label)}
                >
                  {
                    selectedTab === tab.label ? <span className='text-lime-600 font-extrabold mr-3 mt-1'><IoCheckbox /></span> : <span className='text-lime-600 font-extrabold mr-3 mt-1'><IoCheckboxOutline /></span>
                  }{tab.label}
                </li>
              ))}
            </ul>
            <div className='col-span-3'>
              {tabs.map((tab) => (
                selectedTab === tab.label &&
                <div key={tab.label}>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <p className=' mb-5 text-gray-600'>{tab.content}</p>
                    <Image src={tab.img} alt='this is image' className='w-96 h-72 mx-auto' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='lg:hidden'><OrderBtn /></div>
      </div>
    </Layout>
  )
}
