import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';

function Form() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_abrxw7s', 'template_ynstffo', form.current, {
        publicKey: 'jbNXxyWOGrbwEZ3mx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true); // Set state to show thank you message
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='flex flex-col justify-center items-center py-10 px-5 bg-black'>
      <h2 className='text-4xl sm:text-5xl text-[#ffd630] font-bold font-[font11] mb-8'>
        Get in Touch
      </h2>

      {isSubmitted ? (
        // Display thank you message after form submission
        <div className="text-center text-[#ffd630] font-bold text-2xl">
          Thank you for reaching out! We’ll get back to you soon.
        </div>
      ) : (
        // Display the form if not yet submitted
        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex flex-col justify-center items-center space-y-6 w-full max-w-md'
        >
          <div className='relative w-full'>
            <FaUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ffd630]' />
            <input
              className='w-full py-3 pl-10 pr-4 rounded-lg border-[0.5px] border-white bg-black text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400'
              type="text"
              name="from_name"
              placeholder='Enter Your Name'
              required
            />
          </div>

          <div className='relative w-full'>
            <FaPhone className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ffd630]' />
            <input
              className='w-full py-3 pl-10 pr-4 rounded-lg border-[0.5px] border-white bg-black text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400'
              type="email"
              name="from_email"
              placeholder='Enter your Email'
              required
            />
          </div>

          <div className='relative w-full'>
            <FaEnvelope className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ffd630]' />
            <input
              className='w-full py-3 pl-10 pr-4 rounded-lg border-[0.5px] border-white bg-black text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400'
              type="text"
              name="message"
              placeholder='Enter Your Message'
              required
            />
          </div>

          <input
            className='w-full bg-[#ffd630] text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-200 cursor-pointer'
            type="submit"
            value="Send Message"
          />
        </form>
      )}
    </div>
  );
}

export default Form;
