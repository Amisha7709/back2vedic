import Ghee from '@/public/image/bottle.png'
import Milk from '@/public/image/Milk-Bottle-1liter.jpg'
import Egg from '@/public/image/eggs.jpg'
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
];

export default imageShop;