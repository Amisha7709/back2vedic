'use client'
import Footer from "@/app/components/Footer"
import NavBar from "@/app/components/Navbar"
import '@/app/globals.css'
import '@/app/scss/index.scss'
import { FaWhatsappSquare } from "react-icons/fa";
import AosAnimation from "@/app/components/AosAnimation";
import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {

    AosAnimation();
    return (
        <div>
            <NavBar />

            <div>{children}</div>
            <a
                href="https://wa.me/+919422550090" target="_blank"
                className="fixed animate-bounce bottom-[110px] z-50 right-0 text-5xl text-lime-600"
            >
                <FaWhatsappSquare />
            </a>
            <Footer />
        </div>
    );
}
