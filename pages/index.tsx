import React from 'react'
import Layout from './Layout '
import Image, { StaticImageData } from 'next/image'
import Circle1 from './../public/image/gallery1.jpg'
import Circle2 from './../public/image/bottle.png'
import Circle3 from './../public/image/circle1.jpg'
import Circle4 from '@/public/image/circle2.jpg'
import Premium from '@/public/image/a2-milk-difference.webp'
import FreqAnsHome from '@/app/components/FreqAnsHome'
import CustData from '@/app/json/custData.json'
import { GiCow, GiMilkCarton } from "react-icons/gi"
import { LuBadgePercent } from "react-icons/lu"
import { FcApproval } from "react-icons/fc"
import { IoMdContact } from "react-icons/io";
import GheeProcess from './../public/image/gheeProcess.jpg'
import Marquee from "react-fast-marquee";
import benefitData from '@/app/json/benefitData'
import AutoSlider from '@/app/components/AutoSlider'
import OrderBtn from '@/app/components/OrderBtn'

interface CustomerItem {
  title: String,
  dis: String
}

interface BenefitItem {
  img: StaticImageData,
  title: String
}

export default function index() {

  const customerData: CustomerItem[] = CustData.custData;
  const benefits: BenefitItem[] = benefitData;

  return (
    <Layout>
      <div className='w-screen'>
        <AutoSlider />

        <div>
          <h1 className='text-center font-bold text-3xl lg:text-5xl mt-9'>A2 Natural Product in Nagpur </h1>
          <div className='max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-8'>
            <div className='block sm:flex md:block'>
              <div className='my-9'>
                <GiCow className='mx-auto w-14 h-14 text-amber-800' />
                <h1 className='font-bold text-lg'>Always Fresh</h1>
                <p className='text-gray-700'>Milk delivers fresh daily by maintaining supply and cold chain management at 4°C. All process is Automated so hygienic. Its pure, natural & fresh milk.</p>
              </div>
              <div className='my-9'>
                <LuBadgePercent className='mx-auto w-14 h-14 text-green-500' />
                <h1 className='font-bold text-lg'>100% Natural</h1>
                <p className='text-gray-700'>Nothing is removed from milk and added to milk. Its natural in kind so pure that retain its nutritional value. It tastes sweet and Delicious.</p>
              </div>
            </div>
            <div className='my-9 flex justify-center'>
              <div className="gallery">
                <Image src={Circle1} alt="a hot air balloon" />
                <Image src={Circle2} alt="a sky photo of an old city" />
                <Image src={Circle3} alt="a small boat" />
                <Image src={Circle4} alt="a forest" />
              </div>
            </div>
            <div className='block sm:flex md:block'>
              <div className='my-9'>
                <FcApproval className='mx-auto w-14 h-14' />
                <h1 className='font-bold text-lg'>Best Quality</h1>
                <p className='text-gray-700'>We care our cows on high priority to keep them happy always. Automated milking and packaging makes our milk Premium quality and valuable Standards.</p>
              </div>
              <div className='my-9'>
                <GiMilkCarton className='mx-auto w-14 h-14 text-gray-600' />
                <h1 className='font-bold text-lg'>Complete Food For Family</h1>
                <p className='text-gray-700'>We have Genuine breed of Desi Gir Cows on our farm. It naturally contains pure A2 protein which is easy to digest and colostrum so its like Mothers milk.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto px-4'>
          <div className="sm:pt-8 md:pt-10 lg:pt-14">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
              <div className='box-image rounded-lg sm:mt-4 md:mt-0 lg:mt-0'>
                <Image src={Premium} alt='this is image' className='image-Border' />
              </div>
              <div>
                <div className="bg-lime-500 h-1 w-2/5 rounded-lg animation-move-right"></div>
                <h3 className='text-xl lg:text-3xl mb-5 ms-0 font-bold'>PREMIUM A2 GIR COW&apos;S Product</h3>
                <p className='md:text-lg mb-5 text-gray-600'>Instantly Homogenized, Pasteurized, chilled and packaged farm fresh product - Farms product :- <br /><br />
                  * Daily Fresh Home Delivery<br />
                  * balanced and nourishing diet, promoting a healthier lifestyle<br/>
                  * high-quality A2 beta-casein protein.<br />
                  * potential digestive benefits and contribute to overall well-being<br />
                  * Premium Pure A2 Milk Supplier in Pune<br />
                  * Providing a high-quality, hygienic and nutritious product
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto px-4 mt-20'>
          <h1 className="text-3xl lg:text-5xl font-semibold mt-16 mb-5">A2 Benefits</h1>
          <p className='text-amber-500 mb-16 text-lg'>A2 milk and its derivatives, such as A2 Ghee, are often promoted for potential health benefits. While individual responses may vary, here are some commonly discussed benefits associated with A2 products</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
              benefits.map((value, index: number) => (
                <div key={index} className='text-center mb-8 mx-auto'>
                  <Image src={value.img} alt='this is image' className='h-[181px]'></Image>
                  <p className='font-semibold py-5'>{value.title}</p>
                </div>
              ))
            }
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 mt-12">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-4">Frequently Asked Questions</h1>
          <FreqAnsHome />
        </div>

        <div className="max-w-screen-xl mx-auto px-4 mt-12" >
          <h1 className="text-3xl lg:text-5xl font-semibold mb-4">A2 Ghee Process </h1>
          <p className='md:text-lg mb-5 text-gray-600'>We at Back to Vedic believe that every of our VEDIC A2 DESI GIR COW GHEE should reach customer with promise. A promise of purity and good health.</p>
          <Image src={GheeProcess} alt='this is image' className='w-full rounded-lg relative z-[1]' />
        </div>

        <div className='max-w-screen-xl mx-auto px-4 mt-12'>
          <h1 className='text-center font-bold text-3xl lg:text-5xl mb-8'>Happy Customer</h1>
          <Marquee>
            <div className='flex'>
              {
                customerData.map((value, index: number) => (
                  <div key={index} className='mx-5 mt-4 sm:mb-10 p-3 w-56 mb-5 shadow-2xl rounded-lg'>
                    <IoMdContact className="mx-auto w-14 h-14" />
                    <div className='text-center text-2xl mb-5 font-bold'>{value.title}</div>
                    <div className='text-center md:text-lg text-gray-600'>{value.dis}</div>
                  </div>
                ))}
            </div>
          </Marquee>
        </div>
        <div className='lg:hidden'><OrderBtn/></div>
      </div>

    </Layout>
  )
}
