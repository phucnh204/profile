import React from "react";
import arrow from '@/assets/public/arrow-white.png'
import Image from "next/image";
const Contact = () => {
  return (
    <div
      style={{ backgroundImage: `url("/assets/public/bg-contact.png")` }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-semibold text-gray-600">
        Connect with me
      </h4>
      <h2 className="text-center text-4xl sm:text-5xl font-bold text-gray-900">
        Get in touch
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600">
        I&apos;d love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <textarea
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full mt-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-center gap-2 
          bg-black text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit now <Image src={arrow} alt='' className="w-4"/>
        </button>
      </form>
    </div>
  );
};

export default Contact;
