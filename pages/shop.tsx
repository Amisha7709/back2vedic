'use client'
import React from 'react'
import Layout from './Layout '
import Image, { StaticImageData } from 'next/image'
import imageShop from '@/app/json/imageShop'
import { BiSolidStarHalf } from 'react-icons/bi'
import { BiSolidStar } from 'react-icons/bi'
import Link from 'next/link'

interface ImageItem {
    image: StaticImageData
    product:string
    price: number
    qtn: string
}

export default function Shop() {

    const imgShop: ImageItem[] = imageShop

    return (
        <Layout>
            <div className='w-screen'>
                <div className="ImageBanner ShopImage h-72 md:h-[70vh] lg:h-[80vh] bg-no-repeat bg-cover flex justify-center items-center bg-center">
                    <div className='mt-5 max-w-screen-xl mx-auto px-4 heading-service text-center'>
                        <p className=' text-2xl sm:text-4xl lg:text-6xl font-semibold'>GIR COW PRODUCTS</p>
                        <p className=' text-3xl sm:text-5xl lg:text-7xl font-bold text-amber-500'>Shop Now</p>
                        <p className=' text-xl sm:text-2xl lg:text-3xl'>Indulge in Purity, Embrace A2 - Your One-Stop Shop for Dairy Delight!</p>
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4'>
                    <div className='my-12'>
                        <h1 className='text-4xl lg:text-5xl mb-5 font-bold text-center'>Shop here <br /><span className='text-xl text-amber-500'>Gir Cow’s Milk Products</span></h1>
                        <p className='text-gray-600'>Check each product for buying options.</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:mx-6 gap-4 mb-10'>
                        {
                            imgShop.map((value, index: number) => (
                                <div key={index} className='border-2 p-3'>
                                    <Image src={value.image} alt='this is image' className='h-60'></Image>
                                    <h4 className='text-sm m-5 text-center'>
                                        <p className='font-bold text-xl'>{value.product}</p>
                                        Made from <span className='font-bold'>GIR COW&apos;S PRODUCT</span> Pack of One <br/> ({value.qtn}) - Pure Organic Desi Product
                                    </h4>
                                    <div className='flex justify-center items-center'>
                                        <p>4.6</p>
                                        <BiSolidStar className='text-orange-500' />
                                        <BiSolidStar className='text-orange-500' />
                                        <BiSolidStar className='text-orange-500' />
                                        <BiSolidStar className='text-orange-500' />
                                        <BiSolidStarHalf className='text-orange-500' />
                                    </div>
                                    <div className='text-center mb-3'>
                                        <p><span className='font-bold text-lg'>&#8377; {value.price}</span></p>
                                    </div>
                                    <div className='text-center'>
                                        <Link href={{
                                            pathname: '/orderForm',
                                            query: { price: value.price },
                                          }}
                                        className='btn-primary' >Order Now</Link>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

