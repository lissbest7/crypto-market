import React, { useState } from 'react';

function Support() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const faqs = [
    {
      question: "How can I reset my password?",
      answer: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions in the email you receive to reset your password."
    },
    {
      question: "How do I contact support?",
      answer: "You can contact support by filling out the contact form below or by sending an email to support@example.com."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, PayPal, and bank transfers. Check our payment section for more details."
    },
    {
      question: "How can I verify my account?",
      answer: "To verify your account, please provide the necessary documents as specified in your account settings. Our team will review them and notify you via email."
    },
    {
      question: "Where can I find the terms of service?",
      answer: "Our terms of service can be found in the footer of our website or by navigating to the 'Terms' page in the help section."
    }
  ];

  const toggleContent = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }
    // Form submission logic here (e.g., API call)
    setSubmitted(true);
    setError('');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='py-6 px-4 md:px-8 lg:px-12'>
      <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">Support Center</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Welcome to our Support Center! Here are some frequently asked questions to assist you.
      </p>

      <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions</h3>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2">
          <button 
            onClick={() => toggleContent(index)} 
            className="bg-blue-500 text-white px-4 py-2 rounded w-full text-left">
            {faq.question}
          </button>
          {openIndex === index && (
            <div className="mt-2 bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}

      <h3 className="text-lg font-semibold mt-4 mb-2">Contact Support</h3>
      {submitted ? (
        <div className="bg-green-100 dark:bg-green-700 p-4 rounded">
          <p className="text-green-700 dark:text-green-200">Thank you for your message! We will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded shadow-md">
          {error && <p className="text-red-500">{error}</p>}
          <div className="mb-4">
            <label className="block text-sm dark:text-gray-300">Name:</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded w-full px-2 py-1"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm dark:text-gray-300">Email:</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded w-full px-2 py-1"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm dark:text-gray-300">Message:</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border rounded w-full px-2 py-1"
              rows="4"
              required 
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      )}
      <p className="text-gray-700 dark:text-gray-300 mt-4">
        We appreciate your feedback and are always here to assist you with any inquiries you may have.
      </p>
    </div>
  );
}

export default Support;
