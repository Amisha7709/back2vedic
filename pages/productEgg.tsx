import Layout from './Layout '
import OrderBtn from '@/app/components/OrderBtn'
import Image from 'next/image'
import Egg from '@/public/image/freeRangeChicken.jpg'
import Eggs from '@/public/image/Boiled-Eggs.jpeg'
import { GiThreeLeaves } from 'react-icons/gi'

export default function productEgg() {

    return (
        <Layout>
            <div>
                <div className='ProductEgg ImageBanner h-56 md:h-[59vh] lg:h-[79vh] img_ratio bg-no-repeat' />
                <div className='hidden lg:block fixed z-50'>
                    <div className='relative'><OrderBtn /></div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-8 md:my-20' data-aos='fade-up' data-aos-duration="800">
                    <h1 className='text-3xl lg:text-4xl mb-12 font-semibold text-center text-lime-500'>Best Free <span className='text-black'>Range Egg poultry farming</span>
                        <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                    </h1>
                    <p className='md:text-lg mb-5 text-gray-600'>
                        Free-range egg poultry farming is a husbandry technique that involves raising poultry, such as chickens, in a manner that allows them to freely roam outdoors for a portion of the day.
                        Unlike traditional poultry farming methods that confine birds to limited spaces, free-range systems provide ample space and outdoor access, enabling the birds to partake in natural activities
                        like foraging, dust bathing, and scratching.<br /> This method emphasizes the importance of allowing birds to have access to the outdoors, enabling them to engage in instinctual behaviors. In contrast to conventional confinement systems,
                        free-range operations prioritize the freedom for birds to explore outdoor areas and express their natural behaviors.
                    </p>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 mb-9 md:mb-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <Image src={Egg} alt='this is image' className='my-auto mx-auto w-full rounded-3xl h-[347px]' data-aos='fade-up' data-aos-duration="800"></Image>
                        <div className='p-3 ' data-aos='fade-up' data-aos-duration="800">
                            <h1 className='text-center text-2xl lg:text-3xl mb-5 font-semibold text-lime-500'>The Benefits of <span className='text-black'>free range Chicken</span>
                                <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                            </h1>
                            <ul className='md:text-lg mb-5 text-gray-600'>
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Birds in free-range systems access outdoor areas.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Varying outdoor time promotes natural behaviors.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Emphasis on ethical and sustainable farming practices.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Consumers seek products labeled as free-range.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Interest in additional information about outdoor access conditions.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Grass fields and pasture mimic natural environments.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Opportunities for exploration enhance bird well-being.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Labeling reflects commitment to animal welfare.<br />
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-8 md:my-20' data-aos='fade-up' data-aos-duration="800">
                    <h1 className='text-3xl lg:text-4xl mb-12 font-semibold text-center text-lime-500'>Importance of <span className='text-black'>Free range poultry farm</span>
                        <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                    </h1>
                    <p className='md:text-lg mb-5 text-gray-600'>It is crucial to acknowledge that the term &ldquo;free range&ldquo; can be interpreted differently and regulated in various ways across different regions.
                        Certain certification standards outline specific requirements such as the minimum outdoor space per bird, the duration of outdoor access, and other criteria that
                        must be met in order to be considered free-range.<br /> Consumers who are passionate about promoting ethical and sustainable farming practices often opt for products labeled as
                        free-range or seek out certifications that guarantee the fulfillment of certain welfare standards.
                    </p>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 mb-9 md:mb-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <Image src={Eggs} alt='this is image' className='my-auto mx-auto w-full rounded-3xl h-[347px]' data-aos='fade-up' data-aos-duration="800"></Image>
                        <div className='p-3 ' data-aos='fade-up' data-aos-duration="800">
                            <h1 className='text-center text-2xl lg:text-3xl mb-5 font-bold text-lime-500'>Proponents of <span className='text-black'> free range farming </span>
                                <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                            </h1>
                            <ul className='md:text-lg mb-5 text-gray-600'>
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Advocates emphasize free-range farming for bird health.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Outdoor access reduces stress and improves immune function.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Overall well-being of birds is enhanced.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Roaming outdoors allows natural activities like foraging and scratching.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Dust bathing contributes to a decrease in stress levels.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Free-range system mimics natural settings.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Health advantages include improved bird well-being.<br />
                                <span className='text-lime-600 font-extrabold'>&#x2713;</span> Stress reduction through natural behaviors is crucial.<br />
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='max-w-screen-xl mx-auto px-4 my-9 md:my-20' data-aos='fade-up' data-aos-duration="800">
                    <h1 className='text-3xl lg:text-4xl mb-12 font-semibold text-center text-lime-500'>Enhanced Nutrition <span className='text-black'>more varied and natural diet</span>
                        <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                    </h1>
                    <p className='md:text-lg mb-5 text-gray-600'>The term &ldquo;enhanced nutrition&ldquo; generally pertains to food items that have been fortified or
                        enriched with extra nutrients in order to boost their nutritional content. This practice is carried out for a variety of purposes, which may include
                        addressing specific nutritional deficiencies, promoting overall well-being, or catering to the dietary requirements of particular groups of people.<br /> Certain
                        products are specifically designed to meet the nutritional needs of specific populations, such as children, pregnant women, or older adults. These specially formulated
                        products may contain adjusted levels of certain nutrients to support the health and growth of these particular groups.
                    </p>
                </div>
                <div className='lg:hidden'><OrderBtn /></div>
            </div>
        </Layout>
    )
}