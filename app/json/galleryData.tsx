import Gallery1 from '@/public/image/gallery1.webp'
import Gallery2 from '@/public/image/gallery2.jpg'
import Gallery3 from '@/public/image/gallery3.webp'
import Gallery4 from '@/public/image/gallery4.webp'
import Gallery5 from '@/public/image/gallery5.webp'
import Gallery6 from '@/public/image/gallery6.webp'
import Gallery7 from '@/public/image/gallery7.webp'
import Gallery8 from '@/public/image/gallery8.webp'
import Gallery9 from '@/public/image/gallery9.webp'
import Gallery10 from '@/public/image/gallery10.jpeg'
import Gallery11 from '@/public/image/gallery11.webp'
import Gallery12 from '@/public/image/difference_a2_milk.webp'
import Gallery13 from '@/public/image/gallery12.jpeg'
import Gallery14 from '@/public/image/gallery13.jpeg'
import Gallery15 from '@/public/image/gallery14.webp'
import { StaticImageData } from 'next/image'

interface GalleryItem {
    img1: StaticImageData,
    img2: StaticImageData,
    img3: StaticImageData
}


export const galleryData: GalleryItem[] = [
    {
        img1: Gallery1,
        img2: Gallery7,
        img3: Gallery12
    },

    {
        img1: Gallery11,
        img2: Gallery2,
        img3: Gallery8
    },

    {
        img1: Gallery13,
        img2: Gallery14,
        img3: Gallery9
    },

    {
        img1: Gallery3,
        img2: Gallery4,
        img3: Gallery10
    },

    {
        img1: Gallery5,
        img2: Gallery1,
        img3: Gallery6
    },
    {
        img1: Gallery15,
        img2: Gallery2,
        img3: Gallery14
    },
];

export default galleryData;