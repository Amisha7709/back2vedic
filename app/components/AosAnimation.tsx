'use client'
import { useEffect } from "react";

const AosAnimation = () => {
    useEffect(() => {
        const aos = require('aos');
        require('aos/dist/aos.css');

        aos.init({
            once: false,
            delay: 40,
            easing: 'ease-in-sine'
        });
    }, []);
}

export default AosAnimation;