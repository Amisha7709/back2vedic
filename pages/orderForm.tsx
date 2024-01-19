'use client'
import Layout from '@/pages/Layout '
import { useRouter } from 'next/router';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { GiThreeLeaves } from 'react-icons/gi';
import Payment from '@/public/image/PaymentImage.jpg'

export default function OrderForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [quantity, setQuantity] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [address, setAddress] = useState("");
    const [selectedPayment, setSelectedPayment] = useState("");
    const [result, setResult] = useState({ message: '' });


    const router = useRouter();
    const { query } = router;
    const [selectedProductPrice, setSelectedProductPrice] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedImage, setSelectedImage] = useState('');

    console.log("selectedImage", selectedImage)

    useEffect(() => {
        const { price, product, image } = query;
        setSelectedProductPrice(price as string);
        setSelectedProduct(product as string);
        setSelectedImage(image as string);
    }, [query]);

    useEffect(() => {
        const initialtotalPrice = Number(quantity) * Number(selectedProductPrice);
        // Update total price state
        setTotalPrice(initialtotalPrice);
    }, [quantity, selectedProductPrice]);

    const [errors, setErrors] = useState<{ [key: string]: string }>({
        firstName: "",
        lastName: "",
        email: "",
        mobileNo: "",
        quantity: "",
        totalPrice: "",
        address: "",
        selectedPayment: "",
    })

    const clearInput = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setMobileNo("");
        setQuantity("");
        setTotalPrice(0);
        setAddress("");
        setSelectedPayment("");
    }

    const validate = (name: string, value: any) => {
        switch (name) {
            case "firstName":
                if (!value || value.trim() === "") {
                    return "First name is Required";
                } else {
                    return "";
                }
            case "lastName":
                if (!value || value.trim() === "") {
                    return "Last name is Required";
                } else {
                    return "";
                }
            case "email":
                if (!value) {
                    return "Email is Required";
                } else if (!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
                    return "Enter a valid email address";
                } else {
                    return "";
                }
            case "mobileNo":
                if (!value || value.trim() === "") {
                    return "Mobile number is Required";
                } else if (!value.match(/^[6-9]\d{9}$/)) {
                    return "Enter a valid mobile number.";
                } else {
                    return "";
                }
            case "quantity":
                if (!value || value.trim() === "") {
                    return "Please select the Quantity";
                } else {
                    return "";
                }
            case "address":
                if (!value || value.trim() === "") {
                    return "Please enter your address";
                } else {
                    return "";
                }
            case "selectedPayment":
                if (!value || value.trim() === "") {
                    return "please select payment mode";
                } else {
                    return "";
                }
            default: {
                return "";
            }
        }
    };

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSelectedPayment(value);

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: validate(name, value),
        }));

        switch (name) {
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "mobileNo":
                setMobileNo(value);
                break;
            case "quantity":
                setQuantity(value);
                break;
            case "totalPrice":
                setTotalPrice(totalPrice);
                break;
            case "address":
                setAddress(value);
                break;
            case "selectedPayment":
                setSelectedPayment(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let validationErrors: { [key: string]: string } = {};

        const formData = {
            selectedProduct,
            firstName,
            lastName,
            email,
            mobileNo,
            quantity,
            totalPrice,
            address,
            selectedPayment,
        };

        Object.keys(formData).forEach((name) => {
            const error = validate(name, formData[name as keyof typeof formData]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }
        });

        setErrors(validationErrors);

        if (Object.values(formData).every((value) => value)) {
            try {
                const response = await axios.post('https://info.labhi.in/backtovedic-php/server.php', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = response.data;
                setResult(data);

                if (data.message === "Order confirmed successfully!") {
                    alert(data.message);
                    router.push("/orderConfirm");
                    clearInput();
                } else {
                    clearInput();
                }

                console.log("result", result);
            } catch (error) {
                console.error('Error:', error);
                alert(error)
            }
        }
    };
    return (
        <Layout>
            <div >
                <div className="max-w-screen-xl mx-auto px-4 pt-24 ">
                    <h1 className="text-4xl font-semibold my-6 text-center" data-aos='fade-up' data-aos-duration="800">Order Now
                        <div className='text-lime-600 flex items-center justify-center'><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
                    </h1>
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        <div className="relative flex-auto pr-5 pl-6">
                            <div className='flex'>
                                <p className='text-3xl text-amber-500 font-bold mb-5'>{selectedProduct}</p>
                                <Image src={selectedImage} alt='this is image' width={100} height={100} className='my-auto' />
                            </div>
                            <div className="flex md:flex-row flex-col justify-between gap-4 md:gap-8 mb-2">
                                <div className="mb-4 w-full md:w-1/2 flex-1 flex flex-col items-start justify-start gap-2">
                                    <label id='firstName' className="block text-lg font-semibold mb-2">First Name</label>
                                    <input type="text"
                                        className="w-full py-2 px-3 leading-tight border border-gray-400 outline-none text-sm rounded-lg "
                                        name="firstName"
                                        value={firstName}
                                        onChange={handleUserInput}
                                        placeholder="First Name"
                                    />
                                    {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                                </div>
                                <div className="mb-4 w-full md:w-1/2 flex-1 flex flex-col items-start justify-start gap-2">
                                    <label id='lastName' className="block text-lg font-semibold mb-2"> Last Name</label>
                                    <input type="text"
                                        className="w-full py-2 px-3 leading-tight border border-gray-400 outline-none text-sm rounded-lg "
                                        name="lastName"
                                        value={lastName}
                                        onChange={handleUserInput}
                                        placeholder="Last Name"
                                    />
                                    {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col justify-between gap-4 md:gap-8 mb-2">
                                <div className="mb-4 w-full md:w-1/2 flex-1 flex flex-col items-start justify-start gap-2">
                                    <label id='email' className="block text-lg font-semibold mb-2">Email</label>
                                    <input type="email"
                                        className="w-full py-2 px-3 leading-tight border border-gray-400 outline-none text-sm rounded-lg "
                                        name="email"
                                        value={email}
                                        onChange={handleUserInput}
                                        placeholder="Email"
                                    />
                                    {errors.email && <span className="text-red-500">{errors.email}</span>}
                                </div>
                                <div className="mb-4 w-full md:w-1/2 flex-1 flex flex-col items-start justify-start gap-2">
                                    <label id='mobileNo' className="block text-lg font-semibold mb-2">Mobile number</label>
                                    <input type="tel"
                                        className="w-full py-2 px-3 leading-tight border border-gray-400 outline-none text-sm rounded-lg "
                                        name="mobileNo"
                                        value={mobileNo}
                                        onChange={handleUserInput}
                                        placeholder="+91-1234567890"
                                    />
                                    {errors.mobileNo && <span className="text-red-500">{errors.mobileNo}</span>}
                                </div>
                            </div>
                            <div className="self-stretch flex md:flex-row flex-col justify-between gap-4 md:gap-8 mb-2">
                                <div className="mb-4 w-full md:w-1/2 flex-1 flex flex-col items-start justify-start gap-2">
                                    <label id='quantity' className="block text-lg font-semibold mb-2">Quantity</label>
                                    <input type="number"
                                        className="w-full py-2 px-3 leading-tight border border-gray-400 outline-none text-sm rounded-lg"
                                        name="quantity"
                                        value={quantity}
                                        onChange={handleUserInput}
                                        placeholder="Quantity"
                                    />
                                    {errors.quantity && <span className="text-red-500">{errors.quantity}</span>}
                                </div>

                                <div className="mb-4 w-full md:w-1/2 flex-1 flex flex-col items-start justify-start gap-2">
                                    <label id='price' className="block text-lg font-semibold mb-2">Price</label>
                                    <input type="number"
                                        className="w-full py-2 px-3 leading-tight border border-gray-400 outline-none text-sm rounded-lg"
                                        id="price"
                                        readOnly
                                        value={totalPrice}
                                        onChange={handleUserInput}
                                    />
                                </div>
                            </div>
                            <div>
                                <label id='address' className="block text-lg font-semibold mb-2">Full Address</label>
                                <textarea
                                    name="address" rows={5}
                                    className="py-2 px-3 leading-tight w-full border border-gray-400 outline-none text-sm rounded-lg resize-none"
                                    value={address}
                                    onChange={handleUserInput}
                                    placeholder="Address ......"
                                >
                                </textarea>
                                {errors.address && <span className="text-red-500">{errors.address}</span>}
                            </div>

                            <div className="mt-4 w-full flex md:flex-row flex-col items-start justify-start gap-2">
                                <label id='paymentMode' className="block text-lg font-semibold md:mr-10">Payment Mode</label>
                                <label>
                                    <input type="radio"
                                        value='cashOnDelivery'
                                        onChange={handleUserInput}
                                        checked={selectedPayment === 'cashOnDelivery'}
                                    /> Cash on Delivery
                                </label>
                                <label>
                                    <input type="radio"
                                        value='onlinePayment'
                                        onChange={handleUserInput}
                                        checked={selectedPayment === 'onlinePayment'}
                                    /> Online Payment
                                </label>
                                {errors.selectedPayment && <span className="text-red-500">{errors.selectedPayment}</span>}
                            </div>
                        </div>

                        {selectedPayment === 'onlinePayment' && (
                            <div className='max-w-screen-xl mx-auto px-4'>
                                <div>
                                    <h1 className='text-4xl font-bold my-5'>Scan the QR code</h1>
                                    <Image src={Payment} alt="this is payment image" className='w-full md:w-2/5 text-center' />
                                </div>
                            </div>
                        )}

                        <div className="flex items-center justify-center p-5 ">
                            <button className="btn-primary px-20" type="submit"> Place Order </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
