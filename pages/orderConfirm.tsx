'use client'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import Layout from './Layout '
import Link from 'next/link'

export default function OrderConfirm() {
    return (
        <Layout>
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className=" p-4">
                    <h1 className="text-5xl text-center font-bold text-white drop-shadow-[0_1px_10px_gray] ">Order Confirm !</h1>
                    <div className="flex justify-center items-center mt-4">
                        <BsFillCheckCircleFill className="text-green-600 text-9xl" />
                    </div>
                    <p className="text-white mb-3 text-center text-2xl font-bold">Your Order has been Confirmed Successfully.</p>
                    <p className="text-white mb-3 text-center text-xl"> We will call you as soon as possible.
                    </p>
                    <div className="flex justify-center items-center">
                        <Link href="/shop" className="text-2xl text-white">&#8592;Continue Shopping....</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
