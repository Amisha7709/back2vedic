import React from 'react'
import Layout from './Layout '
import Image, { StaticImageData } from 'next/image'
import OrderBtn from '@/app/components/OrderBtn'
import galleryData from '@/app/json/galleryData'

interface GalleryItem{
    img1: StaticImageData,
    img2: StaticImageData,
    img3: StaticImageData
}

export default function gallery() {

    const galleryImg: GalleryItem[] = galleryData;

    return (
        <Layout>
            <div className='w-screen'>
                <div className="ImageBanner GalleryImage h-72 md:h-[70vh] lg:h-[80vh] bg-no-repeat bg-cover flex items-center bg-center">
                    <div className='mt-5 max-w-screen-xl mx-auto px-4 heading-service text-center'>
                        <h1 className=' text-2xl sm:text-4xl lg:text-6xl font-semibold'>GIR COW PRODUCTS</h1>
                        <p className=' text-3xl sm:text-5xl lg:text-7xl font-bold text-amber-500'>Farm Gallery</p>
                        <p className=' text-xl sm:text-2xl lg:text-3xl'>Elevate Your Taste, Nourish Your Well-Being: A2 - The Gallery of Culinary Excellence.</p>
                    </div>

                    <div className='hidden lg:fixed'>
                        <div className='relative'><OrderBtn /></div>
                    </div>
                </div>
                <div className='max-w-screen-xl mx-auto px-4'>
                    <h1 className='text-3xl lg:text-5xl my-12 font-bold text-center'>Welcome to our Farm Gallery</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-col-2 gap-4 mb-20 w-full">
                        {
                            galleryImg.map((value, index: number) => (
                            <div key={index} className="flex w-full flex-wrap">
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image alt="gallery" src={value.img1}
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                    />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image alt="gallery" src={value.img2}
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                    />
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <Image alt="gallery" src={value.img3}
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                    />
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
                <div className='lg:hidden'><OrderBtn/></div>
            </div>
        </Layout>
    )
}
