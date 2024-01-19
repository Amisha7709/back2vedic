import Layout from './Layout '
import Image from 'next/image'
import A2Milk from '@/public/image/drink-milk.webp'
import Coffee from '@/public/image/milk-bottle.webp'
import OrderBtn from '@/app/components/OrderBtn'
import { GiThreeLeaves } from 'react-icons/gi'

export default function productMilk() {

    return (
        <Layout>
            <div>
                <div className='ProductMilk ImageBanner h-56 md:h-[59vh] lg:h-[79vh] img_ratio bg-no-repeat' />
                <div className='hidden lg:block fixed z-50'>
                    <div className='relative'><OrderBtn /></div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-9 md:my-20' data-aos='fade-up' data-aos-duration="800">
                    <h1 className='text-3xl lg:text-4xl mb-12 font-semibold text-center text-lime-500'>The Benefits <span className='text-black'>of Gir Cow A2 Milk</span>
                        <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                    </h1>
                    <p className='md:text-lg mb-5 text-gray-600'>
                        Indulge in the goodness of A2 milk, a superior and naturally wholesome choice for dairy lovers.
                        Uncover the secrets behind A2 milk, known for its unique protein composition that sets it apart from
                        traditional milk. Learn about the potential digestive advantages and why many individuals find A2 milk gentler
                        on the stomach compared to A1 milk.<br /> Whether you&apos;re lactose intolerant or simply seeking a nutritious alternative,
                        explore the world of A2 milk and embrace a dairy option that prioritizes your well-being.
                        Dive into our comprehensive guide to discover the nutritional benefits, taste the difference,
                        and make A2 milk your preferred choice for a healthier lifestyle.
                    </p>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 mb-8 md:mb-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <Image src={Coffee} alt='this is image' className='my-auto mx-auto w-full rounded-3xl h-[360px]' data-aos='fade-up' data-aos-duration="800"></Image>
                        <div className='p-3 ' data-aos='fade-up' data-aos-duration="800">
                            <h1 className='text-2xl lg:text-3xl text-center mb-5 font-semibold text-lime-500'>Free Ranging <span className='text-gray-900'>Gir cow A2 milk</span>
                                <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                            </h1>
                            <ul className='md:text-lg mb-5 text-gray-600'>
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Free-ranging Gir cows thrive in diverse climates.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Their distinctive hump and natural lifestyle stand out.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Grazing on various plants and foraging for food.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Engage in natural behaviors, promoting overall well-being.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Milk believed to be rich in A2 beta-casein protein.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Omega-3 fatty acids and vitamin D are potential nutrients.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Freedom to move and graze reduces stress.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Enhanced well-being may lead to a robust immune system.<br />
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-9 md:my-20' data-aos='fade-up' data-aos-duration="800">
                    <h1 className='text-3xl lg:text-4xl mb-12 font-semibold text-center text-lime-500'>A2 Milk Best <span className='text-black'>for the Stomach, Digestive Harmony</span>
                        <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                    </h1>
                    <p className='md:text-lg mb-5 text-gray-600'>
                        Discover a new era of dairy delight with A2 milk a soothing elixir that harmonizes with your digestive system. In this enlightening exploration,
                        we delve deep into the science behind A2 milk and its unique protein composition. Unlike A1 milk, A2 milk is renowned for being easy on the stomach,
                        making it an optimal choice for those seeking digestive comfort.<br />Learn how the absence of A1 beta-casein, a protein commonly found in traditional milk,
                        contributes to a gentler digestive experience.The specialized protein profile of A2 milk has been associated with reduced discomfort for individuals who may
                        experience bloating or digestive issues after consuming regular milk.
                    </p>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 mb-8 md:mb-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <Image src={A2Milk} alt='this is image' className='my-auto mx-auto w-full rounded-3xl h-[360px]' data-aos='fade-up' data-aos-duration="800"></Image>
                        <div className='p-3 ' data-aos='fade-up' data-aos-duration="800">
                            <h1 className='text-center text-2xl lg:text-3xl mb-5 font-semibold text-lime-500'>Nurturing Wellness <span className='text-gray-900 '>A2 Milk for Expectant Mothers and Digestive Ease</span>
                                <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                            </h1>
                            <ul className='md:text-lg mb-5 text-gray-600'>
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> A2 milk: Ideal for expectant mothers.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Crafted for well-being and digestive harmony.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Unique benefits enhance a comfortable pregnancy.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Rich nutritional profile supports you and your baby.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Join the movement for a healthier pregnancy journey.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Sip, nourish, and embrace gentle goodness.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Dive into the world of A2 milk.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Experience a gentle and nourishing choice.<br />
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-9 md:my-20' data-aos='fade-up' data-aos-duration="800">
                    <h1 className='text-3xl lg:text-4xl mb-12 font-semibold text-center text-lime-500'>A2 Milk is <span className='text-black'>Gold Nourishing Your Life</span>
                        <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                    </h1>
                    <p className='md:text-lg mb-5 text-gray-600'>Immerse yourself in the transformative power of A2 milk, a liquid embrace that nurtures your life with each enchanting sip.
                        Crafted with care, this dairy elixir goes beyond mere sustenance—it becomes a ritual of self-care and indulgence.<br />
                        Experience the richness of A2 milk as it unfolds a symphony of essential nutrients, including calcium, protein, and vitamins, nurturing your body and mind.
                        With each sip, you&apos;re not just consuming a beverage; you&apos;re inviting a wave of nourishment that supports your overall well-being.
                    </p>
                </div>
                <div className='lg:hidden'><OrderBtn /></div>
            </div>
        </Layout>
    )
}