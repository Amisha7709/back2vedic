import React from 'react'
import Layout from './Layout '
import Image from 'next/image'
import Ghee from '@/public/image/Ghee1.webp'
import bottle from '@/public/image/bottle.png'
import MilkData from '@/app/json/milkData.json'
import OrderBtn from '@/app/components/OrderBtn'

interface a2Item {
    name: String,
    qtn: String
}
export default function productGhee() {

    const a2MilkData: a2Item[] = MilkData.milkData

    return (
        <Layout>
            <div className='w-screen'>
                <div className="ImageBanner GheeImage h-72 md:h-[70vh] lg:h-[80vh] bg-no-repeat bg-cover flex items-center bg-center">
                    <div className='mt-5 max-w-screen-xl mx-auto px-4 heading-service text-center'>
                        <p className=' text-2xl sm:text-4xl lg:text-6xl font-semibold'>GIR COW PRODUCT</p>
                        <p className=' text-3xl sm:text-5xl lg:text-7xl font-bold text-amber-500'>GHEE</p>
                        <p className='text-xl sm:text-2xl lg:text-4xl'>Savor Purity, Embrace Goodness: A2 Ghee, Nature&apos;s Essence Unleashed!</p>
                    </div>

                    <div className='hidden lg:fixed'>
                        <div className='relative'><OrderBtn /></div>
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-20'>
                    <h1 className='text-3xl lg:text-5xl mb-12 font-bold text-center'>Unveiling the Delightful World of A2 Ghee</h1>
                    <p className='md:text-lg mb-5 text-gray-600'>
                        Indulge in the velvety richness of A2 Ghee, a golden elixir crafted from the purest A2 milk. Experience the exquisite flavors that
                        elevate your dishes while enjoying the added health benefits of this lactose-friendly alternative. Uncover the secret to culinary excellence with A2 Ghee.
                        The magic begins with A2 Ghee&apos;s unique composition, featuring A2 beta-casein protein, making it an ideal choice for those seeking a lactose-friendly alternative. Delight in the rich, nutty aroma that enhances the
                        taste of your favorite dishes, elevating them to a new level of gastronomic pleasure.
                    </p>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 mb-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <Image src={Ghee} alt='this is image'></Image>
                        <div className='p-3 '>
                            <div className='text-center text-2xl mb-5 font-bold'>Golden Elixir: <span className='text-amber-500'>The Rich Flavors and Health Benefits of A2 Ghee</span></div>
                            <div className='md:text-lg text-gray-600'>Step into a world of culinary luxury with A2 Ghee. Immerse yourself in the rich, nutty aromas and the buttery goodness of this lactose-free delight. Elevate your cooking experience,
                                knowing you&apos;re not just adding flavor but also nourishing your body with the wholesome goodness of A2 Ghee.</div>
                        </div>
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 mb-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <div className='p-3 '>
                            <div className='text-center text-2xl mb-5 font-bold'>Nutrition Facts: <span className='text-amber-500'>Nutritional information</span></div>
                            <div className='md:text-lg text-gray-600'>
                                Dive into a culinary indulgence with a rich composition per 100 grams, boasting an energy content of 897.62 Kcal that promises to invigorate your senses. The sumptuous profile unfolds with 99.7 grams of total fat,
                                a harmonious interplay of saturated, polysaturated, and monosaturated fats, offering a velvety and satisfying experience. Remarkably, with no cholesterol and a discerning 12 grams of trans fat, this composition introduces a nuanced balance,
                                while the modest 0.08 grams of protein positions this culinary gem as a luxurious treat to be savored with mindful pleasure.
                            </div>
                        </div>
                        <div>
                            <h1 className='text-center text-3xl font-bold'>Nutrition Facts</h1>
                            <p className='text-center mb-5 text-amber-500 text-xl'>Nutritional information per 100 g (Approx values)</p>
                            {
                                a2MilkData.map((value, index: number) => (
                                    <div key={index}>
                                        <div className='flex justify-between'>
                                            <div className='text-xl'>{value.name}</div>
                                            <div className='text-xl'>{value.qtn}</div>
                                        </div>
                                        <hr />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-20'>
                    <h1 className='text-3xl lg:text-5xl mb-12 font-bold text-center'>Nourish from Within: A2 Ghee - A Culinary Treasure for Well-Being</h1>
                    <p className='md:text-lg mb-5 text-gray-600'>
                        A2 Ghee isn&apos;t just a cooking ingredient; it&apos;s a nutritional powerhouse. Discover the secret to a healthier lifestyle by incorporating this lactose-friendly gem into your daily routine. From enhancing the flavors
                        of your favorite dishes to promoting well-being, A2 Ghee is the perfect addition to your kitchen.Embark on a journey of holistic well-being with Nourish from Within: A2 Ghee - A Culinary Treasure for Well-Being. A2 Ghee, derived from the purest A2 milk,
                        transcends the boundaries of culinary delight to become a cherished component of a nourishing lifestyle.
                    </p>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 mb-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <Image src={bottle} alt='this is image'></Image>
                        <div className='p-3 '>
                            <div className='text-center text-2xl mb-5 font-bold'>Beyond Butter: <span className='text-amber-500'>The Magic of A2 Ghee in Your Kitchen</span></div>
                            <div className='md:text-lg text-gray-600'>Beyond the traditional butter lies a culinary revelation – A2 Ghee. Imbued with a unique nutty aroma and a rich, smooth texture, A2 Ghee brings a
                                new dimension to your cooking. Unleash the culinary artist in you and explore
                                the extraordinary taste and health benefits that come with incorporating A2 Ghee into your everyday meals.</div>
                        </div>
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-20'>
                    <h1 className='text-3xl lg:text-5xl mb-12 font-bold text-center'>Lactose-Friendly Luxury: Elevate Your Culinary Experience with A2 Ghee</h1>
                    <p className='md:text-lg mb-5 text-gray-600'>A2 Ghee isn&apos;t just a cooking ingredient; it&apos;s a nutritional powerhouse. Discover the secret to a healthier lifestyle by incorporating this lactose-friendly gem into your daily routine.
                        From enhancing the flavors of your favorite dishes to promoting well-being, A2 Ghee is the perfect addition to your kitchen.A2 Ghee, derived from the milk of cows that exclusively produce A2 beta-casein protein,
                        stands as a lactose-friendly alternative, making it a perfect choice for those with lactose intolerance. The result is a rich, nutty flavor that
                        enhances the taste of your favorite dishes while also offering potential digestive benefits.
                    </p>
                </div>
                <div className='lg:hidden'><OrderBtn/></div>
            </div>
        </Layout>
    )
}
