import Link from 'next/link'
import React from 'react'

export default function OrderBtn() {
    return (
        <div className='animate-bounce'>
            <Link href='/shop' className='p-5 bg-lime-500 rounded font-bold'>Order Now</Link>
        </div>
    )
}
