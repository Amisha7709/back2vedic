'use client'
import { useState } from 'react'
import Layout from './Layout '
import Image from 'next/image'
import OrderBtn from '@/app/components/OrderBtn'
import galleryData from '@/app/json/galleryData'
import OutsideClickHandler from 'react-outside-click-handler';
import { GiThreeLeaves } from 'react-icons/gi'

export default function Gallery() {

    const galleryImg = galleryData;
    const [selectedImage, setSelectedImage] = useState<| null>(null);

    const handleImageClick = (imageUrl: any) => {
        setSelectedImage(imageUrl);
    };

    return (
        <Layout>
            <div>
                <div className="ImageBanner GalleryImage h-60 md:h-[70vh] lg:h-[80vh] img_ratio bg-no-repeat flex items-center">
                    <div className='mt-5 max-w-screen-xl mx-auto px-4 text-center'>
                        <h1 className='text-2xl sm:text-4xl lg:text-6xl font-bold text-white font-culpa'>Our Gallery</h1>
                    </div>
                </div>
                <div className='hidden lg:block fixed z-50'>
                    <div className='relative'><OrderBtn /></div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4'>
                    <h1 className='text-3xl lg:text-4xl my-12 font-semibold text-center text-lime-500' data-aos='fade-up' data-aos-duration="800">Welcome to <span className='text-black'>our Farm Gallery</span>
                        <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-col-2 gap-4 mb-20 w-full">
                        {
                            galleryImg.map((value, index: number) => (
                                <div key={index} className="flex w-full flex-wrap gallery1">
                                    <div className="w-1/2 p-1 md:p-2" data-aos="fade-zoom-in" data-aos-duration="800">
                                        <Image alt="gallery" src={value.img1} className="block h-full w-full rounded-lg object-cover object-center"
                                            onClick={() => handleImageClick(value.img1)} />
                                    </div>
                                    <div className="w-1/2 p-1 md:p-2" data-aos="fade-zoom-in" data-aos-duration="800">
                                        <Image alt="gallery" src={value.img2} className="block h-full w-full rounded-lg object-cover object-center"
                                            onClick={() => handleImageClick(value.img2)} />
                                    </div>
                                    <div className="w-full p-1 md:p-2" data-aos="fade-zoom-in" data-aos-duration="800">
                                        <Image alt="gallery" src={value.img3} className="block h-full w-full rounded-lg object-cover object-center"
                                            onClick={() => handleImageClick(value.img3)} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


                {selectedImage && (
                    <div className="fixed top-0 left-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
                        <div className='md:w-2/5 md:mt-24 relative '>
                            <OutsideClickHandler
                                onOutsideClick={() => {
                                    setSelectedImage(null);
                                }}
                            >
                                <Image src={selectedImage} alt="Full Screen Image" />
                            </OutsideClickHandler >
                            <button className='text-white absolute top-0 -right-11'>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

                <div className='lg:hidden'><OrderBtn /></div>
            </div>
        </Layout>
    )
}
