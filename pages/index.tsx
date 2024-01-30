'use client'
import Layout from './Layout '
import Image from 'next/image'
import Circle1 from './../public/image/gallery1.webp'
import Circle2 from './../public/image/heartAttack.webp'
import Circle3 from './../public/image/immunity.jpg'
import Circle4 from '@/public/image/circle2.webp'
import FreqAnsHome from '@/app/components/FreqAnsHome'
import CustData from '@/app/json/custData'
import { GiCow, GiMilkCarton, GiThreeLeaves } from "react-icons/gi"
import { LuBadgePercent } from "react-icons/lu"
import { FcApproval } from "react-icons/fc"
import MilkProcess from './../public/image/GirCow.webp'
import Marquee from "react-fast-marquee";
import benefitData from '@/app/json/benefitData'
import AutoSlider from '@/app/components/AutoSlider'
import OrderBtn from '@/app/components/OrderBtn'
import Link from 'next/link'

export default function index() {
  const customerData = CustData;
  const benefits = benefitData;

  return (
    <Layout>
      <div>
        <AutoSlider />
        <div className='hidden lg:block fixed z-50'>
          <div className='relative'><OrderBtn /></div>
        </div>
        <div data-aos='fade-up' data-aos-duration="800">
          <h1 className='text-center font-semibold text-3xl lg:text-4xl my-9 text-lime-500'>
            Natural & Organic <span className='text-black'>Products From Nagpur</span>
            <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
          </h1>
          <div className='max-w-screen-xl mx-auto px-4'>
            <p className=' mb-5 md:text-lg text-gray-600'>
              Labhanya Agro Farm is dedicated to providing the finest desi cow milk and desi chicken eggs in Nagpur. Our A2 milk and country eggs are not only pure and delicious,
              but they also boast exceptional nutritional value. We take pride in processing all of our milk at our own farms, using only the highest quality ingredients.
              This ensures that our ghee and other products are made with 100% natural ingredients, resulting in the best desi cow milk products available in Nagpur.<br />
              Our commitment to sustainability is evident in our free-range egg poultry farming technique, which allows our chickens to freely roam outdoors for a portion of the day.
              Additionally, we prioritize hygiene by utilizing sustainable and minimalistic packaging. By choosing our natural A2 milk products and eggs, customers in Nagpur can experience
              the numerous nutritional benefits of our farm and poultry products on a daily basis. Know <Link href='/about' className='text-blue-700 font-semibold hover:underline'>about Us</Link> what is Labhanya Agro Farm mission and vision.</p>
          </div>
        </div>

        <h1 className='text-center font-semibold text-3xl lg:text-4xl mt-11 text-lime-500' data-aos='fade-up' data-aos-duration="800">Why To Choose<span className='text-black'> Labhanya Agro Farm</span>
          <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
        </h1>
        <div className='max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-8'>
          <div className='block sm:flex md:block'>
            <div className='my-9' data-aos="fade-up" data-aos-duration="800">
              <GiCow className='mx-auto w-14 h-14 text-amber-800' />
              <h1 className='font-bold text-lg'>Pure & Fresh</h1>
              <p className='text-gray-700'>Delivering fresh product, we uphold the highest standards through handed processes and rigorous cold chain management at a constant temperature.</p>
            </div>
            <div className='my-9 ' data-aos="fade-up" data-aos-duration="800">
              <LuBadgePercent className='mx-auto w-14 h-14 text-green-500' />
              <h1 className='font-bold text-lg'>100% Natural</h1>
              <p className='text-gray-700'>Our product undergoes no removal or addition processes it maintains its natural purity and nutritional integrity. Its inherent sweetness and delicious taste.</p>
            </div>
          </div>
          <div className='my-auto mx-auto' data-aos='fade-up' data-aos-duration="800">
            <div className="gallery-circle">
              <Image src={Circle1} alt="a hot air balloon" />
              <Image src={Circle2} alt="a sky photo of an old city" />
              <Image src={Circle3} alt="a small boat" />
              <Image src={Circle4} alt="a forest" />
            </div>
          </div>
          <div className='block sm:flex md:block'>
            <div className='my-9 ' data-aos="fade-up" data-aos-duration="800">
              <FcApproval className='mx-auto w-14 h-14' />
              <h1 className='font-bold text-lg'>Best Quality</h1>
              <p className='text-gray-700'>We prioritize the well-being of our cows to ensure their constant happiness. Utilizing handed packaging processes, the premium standards quality.</p>
            </div>
            <div className='my-9' data-aos="fade-up" data-aos-duration="800">
              <GiMilkCarton className='mx-auto w-14 h-14 text-gray-600' />
              <h1 className='font-bold text-lg'>Complete Food For Family</h1>
              <p className='text-gray-700'>Our farm proudly hosts a herd of authentic Desi Gir Cows and Desi Chickens, naturally endowed with best protein that facilitates easy digestion.</p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 my-14" data-aos='fade-up' data-aos-duration="800">
          <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-9 text-lime-500">
            Daily routine <span className='text-black'>of Labhanya Agro Farm</span>
            <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
          </h1>
          <Image src={MilkProcess} alt='this is image' className='w-full rounded-lg relative z-[1]' data-aos='fade-up' />
        </div>

        <div className='max-w-screen-xl mx-auto px-4 mt-20'>
          <h1 className="text-3xl lg:text-4xl font-semibold mt-16 mb-9 text-center text-lime-500" data-aos='fade-up' data-aos-duration="800">
            The Health Benefits <span className='text-black'>of Our Desi Product</span>
            <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' data-aos='fade-up'>
            {
              benefits.map((value, index: number) => (
                <div key={index} className='text-center mb-8 mx-auto border-2' data-aos='fade-up' data-aos-duration="800">
                  <Image src={value.img} alt='this is image' className='h-[181px] w-[290px]'></Image>
                  <p className='font-bold py-5'>{value.title}</p>
                </div>
              ))
            }
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 mt-12" data-aos='fade-up' data-aos-duration="800">
          <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-11 text-lime-500">
            Frequently Asked <span className='text-black'>Questions</span>
            <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
          </h1>
          <FreqAnsHome />
        </div>

        <div className='max-w-screen-xl mx-auto px-4 mt-16' data-aos='fade-up' data-aos-duration="800">
          <h1 className='text-center text-3xl lg:text-4xl font-semibold mb-8 text-lime-500'>
            Our Happy <span className='text-black'>Customer</span>
            <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
          </h1>
          <Marquee pauseOnHover>
            <div className='flex'>
              {
                customerData.map((value, index: number) => (
                  <div key={index} className='mx-5 relative mt-4 sm:mb-10 p-3 w-64 h-64 mb-5 hover:shadow-none shadow-2xl rounded-lg'>
                    {/* <IoMdContact className="w-11 h-11 text-gray-500" /> */}
                    <Image src={value.img} alt='this' className='w-12 h-12 rounded-full'></Image>
                    <div className='md:text-lg mt-2 text-gray-700'>{value.dis}</div>
                    <div className='absolute bottom-0 left-0 w-full bg-opacity-80 p-4'>
                      <p className='text-xl font-bold'>{value.title},</p>
                      <p className='text-base  text-blue-600'>{value.location}.</p>
                    </div>
                  </div>
                ))}
            </div>
          </Marquee>
        </div>
        <div className='lg:hidden'><OrderBtn /></div>
      </div>
    </Layout>
  );
}
