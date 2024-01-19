import Marquee1 from '@/public/image/marquee1.webp'
import Marquee2 from '@/public/image/marquee2.jpeg'
import Marquee3 from '@/public/image/marquee3.webp'
import Marquee4 from '@/public/image/marquee4.webp'
import Marquee5 from '@/public/image/marquee5.webp'
import Marquee6 from '@/public/image/marquee6.webp'
import Marquee7 from '@/public/image/marquee7.webp'
import Marquee8 from '@/public/image/marquee8.webp'
import Marquee9 from '@/public/image/marquee9.webp'
import Marquee10 from '@/public/image/marquee10.webp'
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