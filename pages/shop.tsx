'use client'
import Layout from './Layout '
import Image from 'next/image'
import imageShop from '@/app/json/imageShop'
import { BiSolidStarHalf } from 'react-icons/bi'
import { BiSolidStar } from 'react-icons/bi'
import Link from 'next/link'
import { GiThreeLeaves } from 'react-icons/gi'

export default function Shop() {

    const imgShop = imageShop;
    const renderProducts = () => {
        return imgShop.map((value, index: number) => (
            <div key={index} className="border-2 p-3" data-aos="fade-up" data-aos-duration="800">
                <Image src={value.image} alt="this is image" className="h-60 mx-auto"></Image>
                <h4 className="text-sm mt-5 text-center"> <p className="font-bold text-xl">{value.product}</p>
                    Made in <span className="font-bold">NAGPUR PRODUCT</span> Pack of One <br /> ({value.qtn}) - Pure Organic Desi Product
                    <p className="text-lime-600 font-bold">Free Delivery</p>
                </h4>
                <div className="flex justify-center items-center">
                    <p>4.7</p>
                    <BiSolidStar className="text-orange-500" />
                    <BiSolidStar className="text-orange-500" />
                    <BiSolidStar className="text-orange-500" />
                    <BiSolidStar className="text-orange-500" />
                    <BiSolidStarHalf className="text-orange-500" />
                </div>
                <div className="text-center mb-3">
                    <p> <span className="font-bold text-lg">&#8377; {value.price}</span></p>
                </div>
                <div className="text-center">
                    <Link href={{
                        pathname: "/orderForm",
                        query: { price: value.price, product: value.product, image: value.image.src },
                    }}
                        className="btn-primary"
                    >
                        Order Now
                    </Link>
                </div>
            </div>
        ));
    };

    return (
        <Layout>
            <div>
                <div className='ShopImage ImageBanner h-56 md:h-[59vh] lg:h-[79vh] img_ratio bg-no-repeat' />
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="my-12" data-aos="fade-up" data-aos-duration="800">
                        <h1 className="text-3xl lg:text-4xl mb-5 font-semibold text-center">
                            A2 Product Retails in Nagpur
                            <div className="text-lime-600 flex items-center justify-center" data-aos="flip-right">
                                <span className="text-gray-300 font-thin">---------</span><GiThreeLeaves /><span className="text-gray-300 font-thin">---------</span>
                            </div>
                        </h1>
                        <h1 className="text-gray-600">Shop now our best Desi product. Check each product for buying options.</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10" data-aos="fade-up" data-aos-duration="800">
                        {renderProducts()}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

