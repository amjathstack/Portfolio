import { MailIcon, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {

  return (
    <section id="contact" className="py-40 bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">

        <div className="text-center">

          <h1 className="text-3xl font-semibold text-center mx-auto">
            Contact me<span className="text-[40px] text-indigo-600">.</span>
          </h1>
          <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
            Get in touch Our friendly team is always here to chat.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-12 mt-20 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-blue-500 rounded-full bg-indigo-100/80 dark:bg-gray-800">
              <MailIcon className="w-6 h-6 text-indigo-600"/>
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Open for collaborations.</p>
            <p className="mt-2 text-indigo-600 dark:text-blue-400">mohammedamjath772@gmail.com</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-blue-500 rounded-full bg-indigo-100/80 dark:bg-gray-800">
              <MapPin className="w-6 h-6 text-indigo-600" />
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Location</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Let’s start a conversation.</p>
            <p className="mt-2 text-indigo-600 dark:text-blue-400">Colombo - 14, Sri lanka.</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-blue-500 rounded-full bg-indigo-100/80 dark:bg-gray-800">
              <Phone className="w-6 h-6 text-indigo-600" />
            </span>


            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Phone</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Say hello, I’d love to hear from you.</p>
            <p className="mt-2 text-indigo-600 dark:text-blue-400">(+94) 772 724 177</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
