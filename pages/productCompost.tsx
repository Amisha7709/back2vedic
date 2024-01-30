import OrderBtn from '@/app/components/OrderBtn'
import Image from 'next/image'
import React from 'react'
import Layout from './Layout '
import VermiCompost from '@/public/image/vermicomposting.jpg'
import EarthWorm from '@/public/image/earthWorm.jpg'
import { GiThreeLeaves } from 'react-icons/gi'

export default function productCompost() {
    return (
        <Layout>
            <div>
                <div className='ProductVermi ImageBanner h-56 md:h-[59vh] lg:h-[79vh] img_ratio bg-no-repeat' />
                <div className='hidden lg:block fixed z-50'>
                    <div className='relative'><OrderBtn /></div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-8 md:my-20' data-aos='fade-up' data-aos-duration="800">
                    <h1 className='text-3xl lg:text-4xl mb-12 font-semibold text-center text-lime-500'>Best <span className='text-black'>VermiCompost And Earth Worms</span>
                        <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                    </h1>
                    <p className='md:text-lg mb-5 text-gray-600'>
                        Compost worms, also known as red wigglers (Eisenia fetida), are a specific type of earthworm commonly used in vermicomposting, a sustainable and efficient method of recycling organic waste. These worms are highly adapted to the decomposition of organic matter and thrive in rich,
                        decomposing environments. Here&apos;s some key information about compost worms. Compost worms are an integral part of sustainable waste management and contribute to the creation of nutrient-rich soil amendments. Their ability to efficiently convert organic waste into valuable compost
                        makes them a valuable asset in both home and commercial composting systems. Various species of earthworms, with the common garden worm being Lumbricus terrestris. Feed on soil, extracting nutrients from decomposing organic matter and mineral particles.
                        Hermaphroditic, with most species requiring a mate for reproduction.
                    </p>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 mb-9 md:mb-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <Image src={VermiCompost} alt='this is image' className='my-auto mx-auto w-full rounded-3xl h-[347px]' data-aos='fade-up' data-aos-duration="800"></Image>
                        <div className='p-3 ' data-aos='fade-up' data-aos-duration="800">
                            <h1 className='text-center text-2xl lg:text-3xl mb-5 font-semibold text-lime-500'>The Benefits of <span className='text-black'>VermiCompost</span>
                                <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                            </h1>
                            <ul className='md:text-lg mb-5 text-gray-600'>
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Compost worms, such as the Red Wiggler (Eisenia fetida), thrive in controlled environments like compost bins.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Earthworms, like the common garden worm (Lumbricus terrestris), inhabit diverse soil ecosystems.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Compost worms specialize in breaking down kitchen scraps and organic waste, producing nutrient-rich vermicompost.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Earthworms feed on soil, aiding in the breakdown of organic debris and contributing to nutrient cycling.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Both compost and earthworms are hermaphroditic and require mates for reproduction.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Compost worms lay small, lemon-shaped cocoons as part of their reproductive process.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Earthworms deposit eggs in the soil for reproduction.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Compost worms play a crucial role in waste reduction and sustainable agriculture.<br />
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-8 md:my-20' data-aos='fade-up' data-aos-duration="800">
                    <h1 className='text-3xl lg:text-4xl mb-12 font-semibold text-center text-lime-500'>The Information of <span className='text-black'>VermiCompost</span>
                        <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                    </h1>
                    <p className='md:text-lg mb-5 text-gray-600'>Compost worms, exemplified by species like the Red Wiggler (Eisenia fetida), thrive in controlled environments such as compost bins.
                        These specialized worms are efficient decomposers, breaking down kitchen scraps and organic waste to produce nutrient-rich vermicompost. Their hermaphroditic nature and ability to lay small,
                        lemon-shaped cocoons make them prolific reproducers, contributing to sustainable waste reduction and providing valuable material for enhancing soil fertility in agriculture and gardening.
                    </p>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 mb-9 md:mb-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <Image src={EarthWorm} alt='this is image' className='my-auto mx-auto w-full rounded-3xl h-[347px]' data-aos='fade-up' data-aos-duration="800"></Image>
                        <div className='p-3 ' data-aos='fade-up' data-aos-duration="800">
                            <h1 className='text-center text-2xl lg:text-3xl mb-5 font-bold text-lime-500'>The Benefits of <span className='text-black'> Earth Worms </span>
                                <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                            </h1>
                            <ul className='md:text-lg mb-5 text-gray-600'>
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Earthworms, exemplified by species like the common garden worm (Lumbricus terrestris), inhabit diverse soil ecosystems.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Compost worms, on the other hand, thrive in controlled environments like compost bins.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Earthworms feed on soil, aiding in the breakdown of organic debris and contributing to nutrient cycling.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Compost worms specialize in breaking down kitchen scraps and organic waste, producing nutrient-rich vermicompost.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Both compost and earthworms are hermaphroditic and require mates for reproduction.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Earthworms deposit eggs in the soil for reproduction.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Compost worms, such as the Red Wiggler (Eisenia fetida), lay small, lemon-shaped cocoons as part of their reproductive process.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Earthworms play a crucial role in enhancing soil fertility, structure improvement, and overall ecosystem health.<br />
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-9 md:my-20' data-aos='fade-up' data-aos-duration="800">
                    <h1 className='text-3xl lg:text-4xl mb-12 font-semibold text-center text-lime-500'>The Information of <span className='text-black'>Earth Worms</span>
                        <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                    </h1>
                    <p className='md:text-lg mb-5 text-gray-600'>Earthworms, represented by common species like the garden worm (Lumbricus terrestris), inhabit diverse soil ecosystems.
                        Feeding on soil and organic debris, earthworms play a crucial role in nutrient cycling and soil structure improvement. Hermaphroditic as well, they deposit eggs in the soil for reproduction.
                        Earthworms contribute significantly to ecosystem health by aerating the soil, increasing water infiltration, and promoting root growth. Their overall impact on soil fertility makes them essential
                        organisms for sustainable agriculture and environmental health.
                    </p>
                </div>
                <div className='lg:hidden'><OrderBtn /></div>
            </div>
        </Layout>
    )
}
