import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

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
    setSubmitted(true);
    setError('');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='py-6 px-4 md:px-8 lg:px-12'>
      <h2 className="text-blue-600 dark:text-white text-3xl font-bold mb-4">Contact Us</h2>
      {submitted ? (
        <div className="bg-green-100 dark:bg-green-700 p-4 rounded shadow-md">
          <p className="text-green-700 dark:text-green-200">Thank you for your message! We will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <div className="mb-4">
            <label className="block text-lg dark:text-gray-300">Name:</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-2 border-blue-400 rounded-lg w-full px-4 py-2 focus:outline-none focus:border-blue-600"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg dark:text-gray-300">Email:</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 border-blue-400 rounded-lg w-full px-4 py-2 focus:outline-none focus:border-blue-600"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg dark:text-gray-300">Message:</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-2 border-blue-400 rounded-lg w-full px-4 py-2 focus:outline-none focus:border-blue-600"
              rows="4"
              required 
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </form>
      )}
      <p className="text-gray-700 dark:text-gray-300 mt-4">
        We value your feedback and are always here to assist you with any queries you may have.
      </p>
    </div>
  );
}

export default Contact;
