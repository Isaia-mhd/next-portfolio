"use client";
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import React, { useState } from 'react';
import axios from 'axios';

const ContactItem = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await axios.post('http://localhost:8000/api/send-email', {
        email,
        subject,
        message,
      });

      if (response.data.message) {
        setStatus('Email was sent successfully!');
      }
    } catch (error) {
      setStatus("Error while sending the email");
      console.error(error);
    }
  };

  return (
    <BackgroundBeamsWithCollision className="">
      <div id="contact" className="w-full mt-2 mb-12 rounded-md max-w-[400px] md:max-w-[80%] mx-auto">
        <form onSubmit={handleSubmit} className="w-full max-w-[400px] mx-auto md:max-w-[50%] lg:max-w-[40%] md:mx-0 py-2 rounded-lg">
          <div className="mb-4 text-white font-semibold">
            <h1 className="text-4xl font-bold text-purple-700">Contact me</h1>
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="email" className="text-white text-sm font-semibold">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-slate-950 rounded-lg px-3 text-slate-700 text-sm font-semibold focus:outline-none border-2 focus:border-blue-700 py-2"
              placeholder="E-mail"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="subject" className="text-white text-sm font-semibold">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="bg-slate-950 rounded-lg px-3 text-slate-700 text-sm font-semibold focus:outline-none border-2 focus:border-blue-700 py-2"
              placeholder="Subject"
            />
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="message" className="text-white text-sm font-semibold">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Text here!"
              className="bg-slate-950 h-[100px] rounded-lg px-3 text-slate-700 text-sm font-semibold focus:outline-none border-2 focus:border-blue-700 py-2"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <button type="submit" className="bg-blue-600 py-2 px-5 text-sm text-white rounded font-light w-[100px] hover:bg-blue-700 transition duration-150 ease-in-out active:bg-blue-800">
              Send
            </button>
          </div>
        </form>
        <p 
        className={
            status === "Sending..." ? "text-white" : 
            status === "Email was sent successfully!" ? "text-green-500" : 
            "text-red-500" 
        }>{status}</p>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default ContactItem;