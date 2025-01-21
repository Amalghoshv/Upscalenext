"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [successMessage, setSuccessMessage] = useState("");

    interface EmailJSResponseStatus {
        text: string;
    }

    interface FormElements extends HTMLFormControlsCollection {
        user_name: HTMLInputElement;
        user_email: HTMLInputElement;
        message: HTMLTextAreaElement;
    }

    interface ContactFormElement extends HTMLFormElement {
        readonly elements: FormElements;
    }

    const sendEmail = (e: React.FormEvent<ContactFormElement>) => {
        e.preventDefault();


        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

        
        if (!serviceId || !templateId || !publicKey) {
            setSuccessMessage("Failed to send your message. Please try again.");
            return;
        }

        if (form.current) {
            emailjs
                .sendForm(
                    serviceId,
                    templateId,
                    form.current,
                    publicKey
                )
                .then(
                    (result: EmailJSResponseStatus) => {
                        console.log(result.text);
                        setSuccessMessage("Your message has been sent successfully!");
                        form.current?.reset();
                    },
                    (error: EmailJSResponseStatus) => {
                        console.error(error.text);
                        setSuccessMessage("Failed to send your message. Please try again.");
                    }
                );
        } else {
            setSuccessMessage("Failed to send your message. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-16 bg-gray-50 relative">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
                    Contact Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-gray-600">Get in Touch</h3>
                        <p className="text-gray-600">
                        Have questions about our ERPNext solutions? We&apos;d love to hear from you. Send us a message, and we will respond as soon as possible.
                        </p>
                        <div className="space-y-4">
                            <p className="flex items-center text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
                                    />
                                </svg>
                                  upscalenext@gmail.com
                            </p>
                            <p className="flex items-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="m17.707 13.707l2.648 2.648a.91.91 0 0 1 0 1.29a5.47 5.47 0 0 1-7.151.508l-1.575-1.182a23 23 0 0 1-4.6-4.6l-1.182-1.575a5.47 5.47 0 0 1 .508-7.151a.91.91 0 0 1 1.29 0l2.648 2.648a1 1 0 0 1 0 1.414L9.272 8.728a.53.53 0 0 0-.1.616a12.26 12.26 0 0 0 5.484 5.484a.53.53 0 0 0 .616-.1l1.02-1.02a1 1 0 0 1 1.415 0Z"/></svg>
                                +91-7025732665
                            </p>
                        </div>
                        <img
                            className="-mt-[20%] h-2/3 bg-no-repeat bg-center bg-contain"
                            src="./images/contact.svg"
                            alt="contact-img"
                        />
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                        <div className="space-y-2">
                            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input
                                id="user_name"
                                type="text"
                                name="from_name"
                                placeholder="Name"
                                className="w-full text-gray-600 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:text-gray-800 transition-all"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">Your Email</label>
                            <input
                                id="user_email"
                                type="email"
                                name="user_email"
                                placeholder="user@example.com"
                                className="w-full p-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:text-gray-800 transition-all"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700">Your Phone</label>
                            <input
                                id="user_phone"
                                type="phone"
                                name="user_phone"
                                placeholder="+91 1234567890"
                                className="w-full p-3 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:text-gray-800 transition-all"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your message here"
                                rows={4}
                                className="w-full p-3 border border-gray-300  text-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:text-gray-800 transition-all"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-[1.02] transition-transform duration-200"
                        >
                            Send Message
                        </button>
                        {successMessage && (
                            <div className={`p-4 rounded-lg ${successMessage.includes("Failed") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                                {successMessage}
                            </div>
                        )}
                    </form>
                    
                </div>
            </div>
        </section>
    );
};

export default Contact;
