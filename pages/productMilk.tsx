import React from 'react'
import Layout from './Layout '
import Image from 'next/image'
import A2Milk from '@/public/image/Milk-Sip.webp'
import Coffee from '@/public/image/coldCoffee.webp'
import MilkData from '@/app/json/milkData.json'
import OrderBtn from '@/app/components/OrderBtn'

interface a2Item {
    name: String,
    qtn: String
}
export default function productMilk() {

    const a2MilkData: a2Item[] = MilkData.milkData

    return (
        <Layout>
            <div className='w-screen'>
                <div className="ImageBanner MilkImage h-72 md:h-[70vh] lg:h-[80vh] bg-no-repeat bg-cover flex items-center bg-center">
                    <div className='mt-5 max-w-screen-xl mx-auto px-4 heading-service text-center'>
                        <p className=' text-2xl sm:text-4xl lg:text-6xl font-semibold'>GIR COW PRODUCT</p>
                        <p className=' text-3xl sm:text-5xl lg:text-7xl font-bold text-amber-500'>MILK</p>
                        <p className='text-xl sm:text-2xl lg:text-4xl'>Sip the Harmony, Taste the Difference: A2 Milk, where Wholesome Goodness Meets Digestive Ease!</p>
                    </div>

                    <div className='hidden lg:fixed'>
                        <div className='relative'><OrderBtn /></div>
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-20'>
                    <h1 className='text-3xl lg:text-5xl mb-12 font-bold text-center'>Discover the Benefits of A2 Milk</h1>
                    <p className='md:text-lg mb-5 text-gray-600'>
                        Indulge in the goodness of A2 milk, a superior and naturally wholesome choice for dairy lovers.
                        Uncover the secrets behind A2 milk, known for its unique protein composition that sets it apart from
                        traditional milk. Learn about the potential digestive advantages and why many individuals find A2 milk gentler
                        on the stomach compared to A1 milk. Whether you&apos;re lactose intolerant or simply seeking a nutritious alternative,
                        explore the world of A2 milk and embrace a dairy option that prioritizes your well-being.
                        Dive into our comprehensive guide to discover the nutritional benefits, taste the difference,
                        and make A2 milk your preferred choice for a healthier lifestyle.
                    </p>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 mb-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <Image src={Coffee} alt='this is image'></Image>
                        <div className='p-3 '>
                            <div className='text-center text-2xl mb-5 font-bold'>The A2 Advantage: <span className='text-amber-500'>Unveiling the Nutritional Wonders of A2 Milk</span></div>
                            <div className='md:text-lg text-gray-600'>Explore the nutritional powerhouse that is A2 milk! Delve into the unique protein profile,
                                discover its potential digestive benefits, and learn why health-conscious individuals are making the switch to this exceptional dairy option.</div>
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
                    <h1 className='text-3xl lg:text-5xl mb-12 font-bold text-center'>Gentle on the Stomach: A2 Milk and Digestive Harmony</h1>
                    <p className='md:text-lg mb-5 text-gray-600'>
                        Discover a new era of dairy delight with A2 milk—a soothing elixir that harmonizes with your digestive system. In this enlightening exploration,
                        we delve deep into the science behind A2 milk and its unique protein composition. Unlike A1 milk, A2 milk is renowned for being easy on the stomach,
                        making it an optimal choice for those seeking digestive comfort.Learn how the absence of A1 beta-casein, a protein commonly found in traditional milk,
                        contributes to a gentler digestive experience.The specialized protein profile of A2 milk has been associated with reduced discomfort for individuals who may
                        experience bloating or digestive issues after consuming regular milk.
                    </p>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 mb-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <Image src={A2Milk} alt='this is image'></Image>
                        <div className='p-3 '>
                            <div className='text-center text-2xl mb-5 font-bold'>Nurturing Wellness: <span className='text-amber-500'>A2 Milk for Expectant Mothers and Digestive Ease</span></div>
                            <div className='md:text-lg text-gray-600'>Expectant mothers, rejoice! Dive into the world of A2 milk, a gentle and nourishing choice crafted with your well-being in mind.
                                Uncover the unique benefits of A2 milk during pregnancy, exploring its digestive harmony and rich nutritional profile. Join the movement towards a healthier, more comfortable pregnancy journey with A2 milk—sip,
                                nourish, and embrace the gentle goodness for you and your growing baby.</div>
                        </div>
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-20'>
                    <h1 className='text-3xl lg:text-5xl mb-12 font-bold text-center'>A2 Gold: Nourishing Your Life, One Sip at a Time</h1>
                    <p className='md:text-lg mb-5 text-gray-600'>Immerse yourself in the transformative power of A2 milk, a liquid embrace that nurtures your life with each enchanting sip.
                        Crafted with care, this dairy elixir goes beyond mere sustenance—it becomes a ritual of self-care and indulgence.
                        Experience the richness of A2 milk as it unfolds a symphony of essential nutrients, including calcium, protein, and vitamins, nurturing your body and mind.
                        With each sip, you&apos;re not just consuming a beverage; you&apos;re inviting a wave of nourishment that supports your overall well-being.
                    </p>
                </div>
            </div>
        </Layout>
    )
}
