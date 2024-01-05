import Gallery1 from '@/public/image/gallery1.jpg'
import Gallery2 from '@/public/image/gallery2.jpg'
import Gallery3 from '@/public/image/gallery3.jpg'
import Gallery4 from '@/public/image/gallery4.jpg'
import Gallery5 from '@/public/image/gallery5.jpg'
import Gallery6 from '@/public/image/gallery6.jpg'
import Gallery7 from '@/public/image/gallery7.jpg'
import Gallery8 from '@/public/image/gallery8.jpeg'
import Gallery9 from '@/public/image/gallery9.jpeg'
import Gallery10 from '@/public/image/gallery10.jpeg'
import Gallery11 from '@/public/image/gallery11.jpeg'
import Gallery12 from '@/public/image/difference_a2_milk.png'
import Gallery13 from '@/public/image/gallery12.jpeg'
import Gallery14 from '@/public/image/gallery13.jpeg'
import Gallery15 from '@/public/image/gallery14.jpg'
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