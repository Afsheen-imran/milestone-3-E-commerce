'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For this example, we'll just simulate a successful submission
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="hero bg-gradient-to-r from-purple-500 to-pink-500 py-20 text-center rounded-lg shadow-lg mb-12">
          <h1 className="text-4xl font-bold mb-8 animate__animated animate__fadeIn">Contact Us</h1>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate__animated animate__fadeIn animate__delay-1s">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">We are here to help! Fill out the form below, and we will get back to you as soon as possible.</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>123 Fashion Street, Style City, FC 12345</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>support@fashionfusion.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <p>Monday - Friday: 9am - 5pm EST</p>
              </div>
            </div>
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-2s">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                >
                  <option value="">Select a subject</option>
                  <option value="Order Inquiry">Order Inquiry</option>
                  <option value="Product Question">Product Question</option>
                  <option value="Return Request">Return Request</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-500 animate__animated animate__fadeIn animate__delay-3s">Thank you for your message. We will get back to you soon!</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-500 animate__animated animate__fadeIn animate__delay-3s">There was an error sending your message. Please try again.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
