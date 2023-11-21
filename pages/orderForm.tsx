'use client'
import Layout from '@/pages/Layout '
import { useRouter } from 'next/router';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

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

    useEffect(() => {
        const { price } = query;
        setSelectedProductPrice(price as string);
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
        const name = e.target.name;
        const value = e.target.value;
        setSelectedPayment(e.target.value);

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validate(name, value),
        }));

        if (name === "firstName") {
            setFirstName(value);
        } else if (name === "lastName") {
            setLastName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "mobileNo") {
            setMobileNo(value);
        } else if (name === "quantity") {
            setQuantity(value);
        } else if (name === "totalPrice") {
            setTotalPrice(totalPrice);
        } else if (name === "address") {
            setAddress(value);
        } else if (name === "selectedPayment") {
            setSelectedPayment(value);
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let validationErrors:{[key: string]: string} = {};

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNo: mobileNo,
            quantity: quantity,
            totalPrice: totalPrice,
            address: address,
            selectedPayment: selectedPayment,
        };

        Object.keys(formData).forEach((name) => {
            const error = validate(name, formData[name as keyof typeof formData]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }
        });

        setErrors(validationErrors);

        if (formData.firstName && formData.lastName && formData.email && formData.mobileNo && formData.quantity && formData.totalPrice && formData.address && formData.selectedPayment) {
            try {
                const response = await axios.post('/ProcessContact.php', formData, {
                    method:'POST',
                });
                const data = response.data;
                setResult(data);

                if (data.message === "Form submit successfully!") {
                    router.push('/orderConfirm');
                    clearInput();
                } else {
                    clearInput();
                    alert(data.message);
                }

                console.log("result", result);
            } catch (error) {
                // Handle error here
                console.error('Error:', error);
                alert(error)
            }
        }

    };
    return (
        <Layout>
            <div className="w-screen ">
                <div className="ImageBanner HomeImage h-72 md:h-[70vh] lg:h-[80vh] bg-no-repeat bg-cover flex justify-center items-center bg-center">
                    <div className='mt-5 max-w-screen-xl mx-auto px-4 heading-service text-center'>
                        <p className="text-xl sm:text-3xl lg:text-4xl "> Original</p>
                        <p className=' text-2xl sm:text-4xl lg:text-6xl font-semibold'>GIR COW PRODUCT</p>
                        <p className=' text-3xl sm:text-5xl lg:text-7xl font-bold text-amber-500'>Order Now</p>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto px-4">
                    <h3 className="text-5xl font-bold my-6">Order Now</h3>
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        <div className="relative flex-auto pr-5 pl-6">
                            <div className="flex md:flex-row flex-col justify-between gap-4 md:gap-8 mb-2">
                                <div className="mb-4 w-full md:w-1/2 flex-1 flex flex-col items-start justify-start gap-2">
                                    <label className="block text-sm font-bold mb-2">First Name</label>
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
                                    <label className="block text-sm font-bold mb-2"> Last Name</label>
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
                                    <label className="block text-sm font-bold mb-2">Email</label>
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
                                    <label className="block text-sm font-bold mb-2">Mobile number</label>
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
                                    <label className="block text-sm font-bold mb-2">Quantity</label>
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
                                    <label className="block text-sm font-bold mb-2">Price</label>
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
                                <label className="block text-sm font-bold mb-2">Full Address</label>
                                <textarea typeof=''
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
                                <label className="block text-sm font-bold md:mr-10">Payment Mode</label>
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
                                <h1 className='font-bold mt-5'>Select your Online payment mode:</h1>
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
