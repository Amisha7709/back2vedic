'use client'
import React, { useState } from 'react';
import Layout from './Layout '
import { useRouter } from 'next/router';
import axios from 'axios';
import OrderBtn from '@/app/components/OrderBtn';

export default function Contact() {

  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [result, setResult] = useState({ message: '' });

  const [errors, setErrors] = useState<{ [key: string]: string }>({

    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    message: "",
    checkbox: "",
  })

  const clearInput = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNo("");
    setMessage("");
    setIsChecked(false);
  }

  const validate = (name: string, value: any): string => {
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
      case "message":
        if (!value || value.trim() === "") {
          return "Please fill the field Required";
        } else {
          return "";
        }
      case "checkbox":
        if (!value) {
          return "You must agree to the terms and conditions.";
        } else {
          return "";
        }
      default: {
        return "";
      }
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : (e.target as HTMLInputElement).value;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate(name, value),
    }));

    if (name === "firstName") {
      setFirstName(value as string);
    } else if (name === "lastName") {
      setLastName(value as string);
    } else if (name === "email") {
      setEmail(value as string);
    } else if (name === "mobileNo") {
      setMobileNo(value as string);
    } else if (name === "message") {
      setMessage(value as string);
    } else if (name === "checkbox") {
      setIsChecked(value as boolean);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let validationErrors: { [key: string]: string } = {};

    const contactData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobileNo: mobileNo,
      message: message,
    };

    Object.keys(contactData).forEach((name: string) => {
      const error = validate(name, contactData[name as keyof typeof contactData]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });

    setErrors(validationErrors);

    if (contactData.firstName && contactData.lastName && contactData.email && contactData.mobileNo && contactData.message) {
      try {
        const response = await axios.post('/ProcessContact.php', contactData, {
          method: 'POST',
        });
        const data = response.data;
        setResult(data);

        if (data.message === "Form submit successfully!") {
          const encryptParameter = (parameter: string) => {
            const secretKey = 20;
            let encryptedParameter = '';
            for (let i = 0; i < parameter.length; i++) {
              encryptedParameter += String.fromCharCode(parameter.charCodeAt(i) ^ secretKey);
            }
            return encodeURIComponent(encryptedParameter);
          };

          const pathParameter = data.data.name;
          const encryptedParameter = encryptParameter(pathParameter);
          router.push(`/thankYou/${encryptedParameter}`);
          clearInput();
        } else {
          clearInput();
          alert(data.message);
        }

        console.log("result", result);
      } catch (error) {
        // Handle error here
        alert(error);
      }
    }
  };


  return (
    <Layout>
      <div className="w-screen">
        <div className="ImageBanner ContactImage h-72 md:h-[70vh] lg:h-[80vh] flex items-center">
          <div className="max-w-screen-xl mx-auto px-4 heading-service text-center">
            <h1 className=' text-2xl sm:text-4xl lg:text-6xl font-semibold'>How Can We Help You ?</h1>
            <p className=' text-l sm:text-2xl lg:text-4xl text-amber-500'>FROM FARM FRESH A2 Product</p>
            <p className="text-l sm:text-2xl lg:text-4xl text-white">Whether you’re searching for a new engineering partner or starting a new career, we would love to hear from you.</p>
          </div>

          <div className='hidden lg:fixed'>
            <div className='relative'><OrderBtn /></div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 pt-9 pb-4">
          <h2 className="text-4xl">Get in touch</h2>
          <p className="pt-4">Please fill out the form below.  You can also contact us via email/phone, and our team will gladly handle your request!</p>
        </div>
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-8 xl:gap-32 w-screen p-4 lg:pb-32" >

          <div className="max-w-xl rounded-lg bg-gray-800 flex flex-col items-center justify-center p-4 md:p-8 box-border shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.05)]">
            <form onSubmit={(e) => { handleSubmit(e) }}>
              <div className="self-stretch flex md:flex-row flex-col justify-between gap-4 md:gap-8 mb-2">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="self-stretch text-slate-200 leading-6 font-medium">First name</label>
                  <input type="text"
                    className={`input-box ${errors.firstName ? 'border-red-500' : ''}`}
                    name="firstName"
                    value={firstName}
                    onChange={onChangeInput}
                    placeholder="First name"
                  />
                  {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="self-stretch text-slate-200 leading-6 font-medium">Last name</label>
                  <input type="text"
                    className={`input-box ${errors.lastName ? 'border-red-500' : ''}`}
                    name="lastName"
                    value={lastName}
                    onChange={onChangeInput}
                    placeholder="Last name"
                  />
                  {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                </div>
              </div>
              <div className="self-stretch flex md:flex-row flex-col justify-between gap-4 md:gap-8 mb-2">
                <div className="flex-1 flex flex-col items-start justify-start gap-2">
                  <label className="self-stretch text-slate-200 leading-6 font-medium">Email</label>
                  <input type="email"
                    className={`input-box ${errors.email ? 'border-red-500' : ''}`}
                    name="email"
                    value={email}
                    onChange={onChangeInput}
                    placeholder="example@mail.com"
                  />
                  {errors.email && <span className="text-red-500">{errors.email}</span>}
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-2">
                  <label className="self-stretch text-slate-200 leading-6 font-medium">Phone number</label>
                  <input type="number"
                    className={`input-box ${errors.mobileNo ? 'border-red-500' : ''}`}
                    name="mobileNo"
                    value={mobileNo}
                    onChange={onChangeInput}
                    placeholder="+91-1125532553"
                  />
                  {errors.mobileNo && <span className="text-red-500">{errors.mobileNo}</span>}
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-2 mb-2">
                <label className="self-stretch text-slate-200 leading-6 font-medium">Your message</label>
                <textarea typeof=''
                  className={`input-box resize-none ${errors.message ? 'border-red-500' : ''}`}
                  name="message"
                  value={message}
                  onChange={onChangeInput}
                  rows={7}
                ></textarea>
                {errors.message && <span className="text-red-500">{errors.message}</span>}
              </div>
              <div className="rounded flex flex-wrap items-center justify-start gap-2 text-sm text-gray-400 mb-2">
                <input type="checkbox"
                  name="checkbox"
                  checked={isChecked}
                  onChange={onChangeInput}
                />
                {errors.checkbox && <span className="text-red-500">{errors.checkbox}</span>}
                <div className=" leading-6">
                  {`By submitting this form, you confirm that you have read and agree to `}
                  <a href="" className="underline font-medium text-white">Back2Vedic’s Terms of Service</a>
                  <span> and </span>
                  <a href="" className="underline font-medium text-white">Privacy Statement</a>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center my-2 mb-2">
                <button type="submit" className="btn-primary">Send message</button>
              </div>
            </form>
          </div>

          <div className="max-w-xl rounded-lg flex flex-wrap items-center justify-start ">
            <iframe className="w-[90vw] lg:w-[37vw] xl:w-[34rem] h-80 lg:h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d337.491351681783!2d79.1549877833649!3d21.15609888122743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1694679094588!5m2!1sen!2sin"
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className='lg:hidden'><OrderBtn/></div>
      </div>
    </Layout>
  )
}
