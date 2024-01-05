import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import Layout from "./Layout ";

export default function ThankYou() {

    return (
        <Layout>
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className=" p-4">
                    <p className="text-5xl text-center font-bold text-white drop-shadow-[0_1px_10px_gray]">Thank You !</p>
                    <p className="text-white mb-3 text-center text-xl">Your form has been submitted successfully.</p>
                    <div className="flex justify-center items-center">
                        <FaCheck className="text-green-600 text-9xl" />
                    </div>
                    <p className="text-white mb-3 text-center text-xl"> Thank You for visiting BackToVedic website.
                        <br />We will get back to you as soon as possible.
                    </p>
                    <div className="flex justify-center items-center">
                        <Link href="/" className="text-4xl text-white"><BsFillArrowLeftCircleFill /></Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
