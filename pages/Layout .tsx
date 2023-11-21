// components/Layout.js
'use client'
import React from "react";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/Navbar";
import '@/app/globals.css'
import '@/app/scss/index.scss'
// import OrderBtn from "@/app/components/OrderBtn";

const Layout = ({ children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <NavBar/>
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
