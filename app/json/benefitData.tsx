import Cancer from '@/public/image/ReduceCancer.jpg';
import HeartHealth from '@/public/image/HeartHealth.webp';
import Brain from '@/public/image/brain.jpg';
import Women from '@/public/image/women.jpg';
import Immunity from '@/public/image/immunity.jpg';
import Hair from '@/public/image/hair.webp';
import Digestion from '@/public/image/digestion.jpg';
import HeartAttack from '@/public/image/heartAttack.jpg';
import { StaticImageData } from 'next/image';

interface BenefitItem {
    img: StaticImageData,
    title: String
}

export const benefitData: BenefitItem[] = [
    {
        img: Cancer,
        title: "Reduce Cancer Risk",
    },

    {
        img: Immunity,
        title: "Improve Immunity",
    },

    {
        img: Brain,
        title: "Support Brain Function",
    },

    {
        img: Women,
        title: "Enhances Fertility In Women",
    },

    {
        img: HeartHealth,
        title: "Promotes Heart Health",
    },

    {
        img: Hair,
        title: "Nourish Skin & Hair",
    },

    {
        img: Digestion,
        title: "Helps With Digestion",
    },

    {
        img: HeartAttack,
        title: "Helps Prevent Heart Attack",
    },
];

export default benefitData;