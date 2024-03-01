"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const serviceId = 'service_b0j7cf4';
const templateId = 'template_ktp4prm';
const publicKey = 'Oziwhln8IDBS1un0z';

const makeTemporary = (setFn: (val) => void) => {
  return (val: any) => {
    setFn(val);
    setTimeout(() => setFn(null), 2500);
  }
}

const NewsLatterBox = () => {
  const [isEmailSent, setEmailSent] = useState(false);
  const [alertText, setAlertText] = useState(null);

  const setTempAlert = makeTemporary(setAlertText);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log('SENDING EMAIL');

    const { name, email, phone } = event.target as any;
  
    if (!name.value) {
      console.log('INVALID NAME', form);
      setTempAlert('Please enter your name')
      return;
    }
    if (!email.value) {
      console.log('INVALID EMAIL', form);
      setTempAlert('Please enter your email')
      return;
    }
    if (!phone.value) {
      console.log('INVALID PHONE', form);
      setTempAlert('Please enter a phone number')
      return;
    }

    // emailjs
    //   .sendForm(serviceId, templateId, form.current, {
    //     publicKey,
    //   })
    //   .then(
    //     () => {
    //       console.log('SUCCESS!');
          setEmailSent(true);
          setAlertText('Message Sent!');
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //     },
    //   );
  };

  return (
    <div
      className="mt-20 max-w-screen-md wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Partnership Form
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Please fill out the form below to connect with a Wood-Works Medical Partnership Manager about starting an ancillary income initiative at your practice or physician group.
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          className="border-stroke text-white shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Contact email"
          className="border-stroke text-white shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="text"
          name="phone"
          placeholder="Best number"
          className="border-stroke text-white shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
        />
        <input
          type="submit"
          value={alertText || 'Send'}
          className="disabled:hover:bg-black/20 disabled:hover:text-white inline-block rounded-sm cursor-pointer w-full py-4 duration-300 ease-in-out bg-black/20 text-white hover:bg-white hover:text-black"
          disabled={isEmailSent}
        />
      </form>
    </div>
  );
};

export default NewsLatterBox;
