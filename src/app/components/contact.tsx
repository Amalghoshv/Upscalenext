"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Send, AlertCircle, CheckCircle } from 'lucide-react';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        setIsSubmitting(true);

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

        if (!serviceId || !templateId || !publicKey) {
            setSuccessMessage("Failed to send your message. Please try again.");
            setIsSubmitting(false);
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
                        setIsSubmitting(false);
                    },
                    (error: EmailJSResponseStatus) => {
                        console.error(error.text);
                        setSuccessMessage("Failed to send your message. Please try again.");
                        setIsSubmitting(false);
                    }
                );
        } else {
            setSuccessMessage("Failed to send your message. Please try again.");
            setIsSubmitting(false);
        }
    };

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="contact" 
            className="py-16 bg-gray-50 relative"
        >
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800"
                >
                    Contact Us
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-2"
                    >
                        <h3 className="text-2xl font-semibold text-gray-600">Get in Touch</h3>
                        <p className="text-gray-600">
                        Have questions about our ERPNext solutions? We'd love to hear from you. Send us a message, and we will respond as soon as possible.
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
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="-mt-[20%] h-2/3 bg-no-repeat bg-center bg-contain"
                            src="./images/contact.gif"
                            alt="contact-img"
                        />
                    </motion.div>
                    <motion.form 
                        ref={form} 
                        onSubmit={sendEmail} 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
                    >
                        {["user_name", "user_email", "user_phone", "message"].map((field, index) => (
                            <motion.div 
                                key={field}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    delay: index * 0.1, 
                                    duration: 0.3 
                                }}
                                className="space-y-2"
                            >
                                <label 
                                    htmlFor={field} 
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    {field === "user_name" ? "Your Name" : 
                                     field === "user_email" ? "Your Email" : 
                                     field === "user_phone" ? "Your Phone" : 
                                     "Your Message"}
                                </label>
                                {field !== "message" ? (
                                    <input
                                        id={field}
                                        type={field === "user_email" ? "email" : 
                                              field === "user_phone" ? "tel" : "text"}
                                        name={field === "user_name" ? "from_name" : field}
                                        placeholder={
                                            field === "user_name" ? "Name" : 
                                            field === "user_email" ? "user@example.com" : 
                                            "+91 1234567890"
                                        }
                                        className="w-full text-gray-600 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:text-gray-800 transition-all"
                                        required
                                    />
                                ) : (
                                    <textarea
                                        id={field}
                                        name={field}
                                        placeholder="Your message here"
                                        rows={4}
                                        className="w-full p-3 border border-gray-300 text-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:text-gray-800 transition-all"
                                        required
                                    />
                                )}
                            </motion.div>
                        ))}
                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                <span className="animate-pulse">Sending...</span>
                            ) : (
                                <>
                                    <Send className="mr-2" />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                        {successMessage && (
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-4 rounded-lg flex items-center space-x-2 ${
                                    successMessage.includes("Failed") 
                                        ? "bg-red-100 text-red-700" 
                                        : "bg-green-100 text-green-700"
                                }`}
                            >
                                {successMessage.includes("Failed") ? (
                                    <AlertCircle className="w-5 h-5" />
                                ) : (
                                    <CheckCircle className="w-5 h-5" />
                                )}
                                <span>{successMessage}</span>
                            </motion.div>
                        )}
                    </motion.form>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;