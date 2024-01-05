import Customer1 from '@/public/image/customer1.jpg';
import Customer2 from '@/public/image/customer2.jpg';
import Customer3 from '@/public/image/customer3.jpg';
import Customer4 from '@/public/image/customer4.jpg';
import Customer5 from '@/public/image/customer5.jpg';
import Customer6 from '@/public/image/customer6.jpg';
import { StaticImageData } from 'next/image';

interface CustomerItem {
  img: StaticImageData,
  title: String,
  dis: String,
  location: String
}

export const custData: CustomerItem[] = [

  {
    img: Customer1,
    title: "Rajesh Kanidarapu ",
    dis: "\"Vedic way... there is nothing called organic before... whatever it is all organically genuine \"",
    location: "Nagpur"
  },
  {
    img: Customer3,
    title: "Aarav Khatri ",
    dis: "\"I love the smell and it seems the process in which it is made is completely authentic. \"",
    location: "Bikaneri, Rajasthan"
  },

  {
    img: Customer4,
    title: "Praneeta Kalaskar",
    dis: "\"I would like to appreciate the effort vedic organic do for maintaing the quality and purity of there product.\"",
    location: "Nagpur"
  },

  {
    img: Customer2,
    title: "Susan Hannagan Carr ",
    dis: "\"Very very important 🙏💕❤️...\"",
    location: "Los Angeles, California"
  },

  {
    img: Customer5,
    title: "Monika Hatwar",
    dis: "\"Products are very good.quality is pure. Keep it up...\"",
    location: "Nagpur"
  },
  {
    img: Customer6,
    title: "Sachin Nandpure ",
    dis: "\"Good products.\"",
    location: "Nagpur"
  },

];

export default custData;
