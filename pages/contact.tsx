'use client'
import { useState } from 'react';
import Layout from './Layout '
import { useRouter } from 'next/router';
import axios from 'axios';
import OrderBtn from '@/app/components/OrderBtn';
import { GiThreeLeaves } from 'react-icons/gi';

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
  });

  const clearInput = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNo("");
    setMessage("");
    setIsChecked(false);
  };

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

    switch (name) {
      case "firstName":
        setFirstName(value as string);
        break;
      case "lastName":
        setLastName(value as string);
        break;
      case "email":
        setEmail(value as string);
        break;
      case "mobileNo":
        setMobileNo(value as string);
        break;
      case "message":
        setMessage(value as string);
        break;
      case "checkbox":
        setIsChecked(value as boolean);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const contactData = {
      firstName,
      lastName,
      email,
      mobileNo,
      message,
      checkbox: isChecked
    };

    const validationErrors: { [key: string]: string } = {};

    Object.keys(contactData).forEach((name: string) => {
      const error = validate(name, contactData[name as keyof typeof contactData]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });

    setErrors(validationErrors);

    if (Object.values(contactData).every((value) => value)) {
      try {
        const response = await axios.post('https://labhanyafarms.com/server.php', contactData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = response.data;
        setResult(data);

        if (data.message === "Form submitted successfully!") {
          alert(data.message);
          router.push("/thankYou");
          clearInput();
        } else {
          clearInput();
        }

        console.log("result", result);
      } catch (error) {
        alert(error);
      }
    }
  };


  return (
    <Layout>
      <div>
        <div className='ContactImage ImageBanner h-56 md:h-[59vh] lg:h-[79vh] img_ratio bg-no-repeat' />

        <div className='hidden lg:block fixed z-50'>
          <div className='relative'><OrderBtn /></div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 mb-12" data-aos='fade-up' data-aos-duration="800">
          <h1 className="text-3xl lg:text-4xl font-semibold mt-12 text-center">Get in Contact
            <div className='text-lime-600 flex items-center justify-center' data-aos="flip-right"><span className='text-gray-300 font-thin'>---------</span><GiThreeLeaves /><span className='text-gray-300 font-thin'>---------</span></div>
          </h1>
          <p className="pt-4 text-gray-700 text-lg">Reach Out to Us for Natural & Organic Products in Nagpur. Please fill out the form below. You can also contact us via email/phone, and our team will gladly handle your request!</p>
        </div>
        <div className="max-w-screen-xl mx-auto mb-6 px-4" >
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>

            <div className="max-w-xl rounded-lg p-4 md:p-8 border-2 box-border shadow-xl" data-aos='fade-up' data-aos-duration="800">
              <form onSubmit={(e) => { handleSubmit(e) }}>
                <div className="self-stretch flex md:flex-row flex-col justify-between gap-4 md:gap-8 mb-2">
                  <div className="flex-1 flex flex-col gap-2">
                    <label id='firstName' className="self-stretch leading-6 font-medium">First name</label>
                    <input type="text"
                      className={`w-full py-2 px-3 leading-tight border border-gray-400 outline-none text-sm rounded-lg ${errors.firstName ? 'border-red-500' : ''}`}
                      name="firstName"
                      value={firstName}
                      onChange={onChangeInput}
                      placeholder="First name"
                    />
                    {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <label id='lastName' className="self-stretch leading-6 font-medium">Last name</label>
                    <input type="text"
                      className={`w-full py-2 px-3 leading-tight border border-gray-400 outline-none text-sm rounded-lg ${errors.lastName ? 'border-red-500' : ''}`}
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
                    <label id='email' className="self-stretch leading-6 font-medium">Email</label>
                    <input type="email"
                      className={`w-full py-2 px-3 leading-tight border border-gray-400 outline-none text-sm rounded-lg ${errors.email ? 'border-red-500' : ''}`}
                      name="email"
                      value={email}
                      onChange={onChangeInput}
                      placeholder="example@mail.com"
                    />
                    {errors.email && <span className="text-red-500">{errors.email}</span>}
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-2">
                    <label id='mobileNo' className="self-stretch leading-6 font-medium">Phone number</label>
                    <input type="number"
                      className={`w-full py-2 px-3 leading-tight border border-gray-400 outline-none text-sm rounded-lg ${errors.mobileNo ? 'border-red-500' : ''}`}
                      name="mobileNo"
                      value={mobileNo}
                      onChange={onChangeInput}
                      placeholder="+91-1125532553"
                    />
                    {errors.mobileNo && <span className="text-red-500">{errors.mobileNo}</span>}
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-2 mb-2">
                  <label id='message' className="self-stretch leading-6 font-medium">Your message</label>
                  <textarea typeof=''
                    className={`w-full py-2 px-3 leading-tight border border-gray-400 outline-none text-sm rounded-lg resize-none ${errors.message ? 'border-red-500' : ''}`}
                    name="message"
                    value={message}
                    onChange={onChangeInput}
                    rows={7}
                    placeholder='message...'
                  ></textarea>
                  {errors.message && <span className="text-red-500">{errors.message}</span>}
                </div>
                <div className="rounded flex flex-wrap items-center justify-start gap-2 text-sm mb-2">
                  <input type="checkbox"
                    name="checkbox"
                    checked={isChecked}
                    onChange={onChangeInput}
                  />
                  {errors.checkbox && <span className="text-red-500">{errors.checkbox}</span>}
                  <div className=" leading-6 text-center">
                    {`By submitting this form, you confirm that you have read and agree to `}
                    <a href="" className="underline font-medium text-blue-700">Labhanya Agro Farm&apos;s Terms of Service</a>
                    <span> and </span>
                    <a href="" className="underline font-medium text-blue-700">Privacy Statement</a>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center my-2 mb-2">
                  <button type="submit" className="btn-primary">Send message</button>
                </div>
              </form>
            </div>

            <div className="max-w-xl rounded-lg flex flex-wrap items-center justify-start" data-aos='fade-up' data-aos-duration="800">
              <iframe className="w-[90vw] lg:w-[37vw] xl:w-[34rem] h-96 md:h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7624.78420679944!2d79.199956!3d20.989213!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU5JzIxLjIiTiA3OcKwMTEnNTkuOCJF!5e1!3m2!1sen!2sin!4v1703251069735!5m2!1sen!2sin"
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div className='lg:hidden'><OrderBtn /></div>
      </div>
    </Layout>
  )
}
