import Ghee from '@/public/image/gheebottle.webp'
import Milk from '@/public/image/Milk-Bottle-1liter.webp'
import Egg from '@/public/image/eggs.webp'
import Compost from '@/public/image/vermicomposting.png'
import EarthWorm from '@/public/image/earthWorm.jpg'
import { StaticImageData } from 'next/image'

interface ImageItem {
    image: StaticImageData,
    product: string,
    price: number,
    qtn: string
}

export const imageShop: ImageItem[] = [
    {
        product: "Desi Ghee",
        image: Ghee,
        price: 2499,
        qtn: "1000 ml"
    },

    {
        product: "Desi Ghee",
        image: Ghee,
        price: 1399,
        qtn: "500 ml"
    },

    {
        product: "Desi milk",
        image: Milk,
        price: 80,
        qtn: "1 lt"
    },

    {
        product: "Desi milk",
        image: Milk,
        price: 45,
        qtn: "1/2 lt"
    },

    {
        product: "Desi Eggs",
        image: Egg,
        price: 150,
        qtn: "6 Piece"
    },

    {
        product: "VermiCompost",
        image: Compost,
        price: 30,
        qtn: "1 kg"
    },

    {
        product: "Earth Worms",
        image: EarthWorm,
        price: 500,
        qtn: "1 kg"
    },
];

export default imageShop;