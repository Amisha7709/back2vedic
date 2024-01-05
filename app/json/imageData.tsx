import Marquee1 from '@/public/image/marquee1.jpeg'
import Marquee2 from '@/public/image/marquee2.jpeg'
import Marquee3 from '@/public/image/marquee3.jpeg'
import Marquee4 from '@/public/image/marquee4.jpeg'
import Marquee5 from '@/public/image/marquee5.jpeg'
import Marquee6 from '@/public/image/marquee6.jpg'
import Marquee7 from '@/public/image/marquee7.jpg'
import Marquee8 from '@/public/image/marquee8.jpg'
import Marquee9 from '@/public/image/marquee9.jpg'
import Marquee10 from '@/public/image/marquee10.jpeg'
import { StaticImageData } from 'next/image'

interface ImageItem {
    image: StaticImageData
}

export const imageData: ImageItem[] = [
    {
        image: Marquee1
    },

    {
        image: Marquee2
    },

    {
        image: Marquee3
    },

    {
        image: Marquee4
    },

    {
        image: Marquee5
    },

    {
        image: Marquee6
    },

    {
        image: Marquee7
    },

    {
        image: Marquee8
    },

    {
        image: Marquee9
    },

    {
        image: Marquee10
    },
];

export default imageData;