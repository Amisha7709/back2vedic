import Layout from './Layout '
import Image from 'next/image'
import Ghee from '@/public/image/Ghee2.webp'
import bottle from '@/public/image/ghee-with-food.webp'
import OrderBtn from '@/app/components/OrderBtn'
import { GiThreeLeaves } from 'react-icons/gi'

export default function productGhee() {
    return (
        <Layout>
            <div>
                <div className='ProductGhee ImageBanner h-56 md:h-[59vh] lg:h-[79vh] img_ratio bg-no-repeat' />

                <div className='hidden lg:block fixed z-50'>
                    <div className='relative'><OrderBtn /></div>
                </div>
                <div className='max-w-screen-xl mx-auto px-4 my-9 md:my-20' data-aos='fade-up' data-aos-duration="800">
                    <h1 className='text-3xl lg:text-4xl mb-12 font-semibold text-center text-lime-500'>The Benefits <span className='text-black'>of Natural A2 Ghee</span>
                        <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                    </h1>
                    <p className='md:text-lg mb-5 text-gray-600'>
                        Indulge in the velvety richness of A2 Ghee, a golden elixir crafted from the purest A2 milk. Experience the exquisite flavors that
                        elevate your dishes while enjoying the added health benefits of this lactose-friendly alternative.<br /> Uncover the secret to culinary excellence with A2 Ghee.
                        The magic begins with A2 Ghee&apos;s unique composition, featuring A2 beta-casein protein, making it an ideal choice for those seeking a lactose-friendly alternative. Delight in the rich, nutty aroma that enhances the
                        taste of your favorite dishes, elevating them to a new level of gastronomic pleasure.
                    </p>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 mb-8 md:mb-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <Image src={Ghee} alt='this is image' className='my-auto mx-auto w-full rounded-3xl h-[347px]' data-aos='fade-up' data-aos-duration="800"></Image>
                        <div className='p-3' data-aos='fade-up' data-aos-duration="800">
                            <h1 className='text-center text-2xl lg:text-3xl mb-5 font-semibold text-lime-500'>The Flavors<span className='text-gray-900'> and Health Benefits of A2 Ghee </span>
                                <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                            </h1>
                            <ul className='md:text-lg mb-5 text-gray-600'>
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Culinary luxury awaits with top-quality A2 Ghee.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Immerse in rich, nutty aromas and buttery goodness.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Lactose-free delight for a wholesome cooking experience.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Elevate dishes with flavor and nourishment of A2 Ghee.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Individual responses may vary benefits based on anecdotes.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Limited research consult healthcare professionals for advice.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Consider personal health concerns with dietary changes.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Experience the goodness but consult for personalized guidance.<br />
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-9 md:my-20' data-aos='fade-up' data-aos-duration="800">
                    <h1 className='text-3xl lg:text-4xl mb-12 font-semibold text-center text-lime-500'>How to make <span className='text-black'>Ghee from A2 Milk ?</span>
                        <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                    </h1>
                    <p className='md:text-lg mb-5 text-gray-600'>The production of A2 ghee from natural A2 milk involves a meticulous and traditional process. Starting with high-quality A2 milk,
                        the first step is to allow the milk to naturally separate into cream and skim milk. The cream is then collected and churned to produce butter, which is subsequently heated to facilitate the separation of water content and milk solids.<br />
                        The remaining golden liquid is the clarified butter, or ghee, which undergoes a slow cooking process to eliminate any remaining moisture. This natural method preserves the distinct nutritional properties of A2 milk while intensifying the rich,
                        nutty flavor characteristic of premium ghee. The result is a wholesome and pure A2 ghee, produced with care and dedication to maintaining the integrity of the natural milk source.
                    </p>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 mb-8 md:mb-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <Image src={bottle} alt='this is image' className='my-auto mx-auto w-full rounded-3xl h-[347px]' data-aos='fade-up' data-aos-duration="800"></Image>
                        <div className='p-3 ' data-aos='fade-up' data-aos-duration="800">
                            <h1 className='text-center text-2xl lg:text-3xl mb-5 font-semibold text-lime-500'>The Magic<span className='text-gray-900'> of A2 Ghee in Your Kitchen</span>
                                <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                            </h1>
                            <ul className='md:text-lg mb-5 text-gray-600'>
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Beyond traditional butter is A2 Ghee.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Unique nutty aroma and rich, smooth texture.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Culinary revelation for cooking enthusiasts.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> A2 Ghee elevates your culinary experience.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Explore extraordinary taste and health benefits.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Imbued with unique qualities for everyday meals.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Unleash the culinary artist within you.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> A2 Ghee is a new dimension in cooking.<br />
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-9 md:my-20' data-aos='fade-up' data-aos-duration="800">
                    <h1 className='text-3xl lg:text-4xl mb-12 font-semibold text-center text-lime-500'>Enjoy A2 Ghee <span className='text-black'>perfect for lactose-friendly!</span>
                        <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                    </h1>
                    <p className='md:text-lg mb-5 text-gray-600'>Enjoy delicious food without worrying about lactose with A2 Ghee. A2 Ghee is a luxurious option that can make your cooking experience even better.
                        It&apos;s a type of clarified butter that&apos;s easy on those who are sensitive to lactose. So, you can elevate your culinary adventures without compromising on taste or worrying about any lactose-related issues.<br />
                        Upgrade your meals with the richness and flavor of A2 Ghee for a delightful and worry-free cooking experience. A2 Ghee, derived from the milk of cows that exclusively produce A2 beta-casein protein,
                        stands as a lactose-friendly alternative, making it a perfect choice for those with lactose intolerance. The result is a rich, nutty flavor that
                        enhances the taste of your favorite dishes while also offering potential digestive benefits.
                    </p>
                </div>
                <div className='lg:hidden'><OrderBtn /></div>
            </div>
        </Layout>
    )
}
