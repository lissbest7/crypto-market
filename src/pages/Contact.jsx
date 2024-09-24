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
    // Form submission logic here (e.g., API call)
    setSubmitted(true);
    setError('');
    // Reset form data
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='py-6 px-4 md:px-8 lg:px-12'>
      <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">Contact Us</h2>
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
        We value your feedback and are always here to assist you with any queries you may have.
      </p>
    </div>
  );
}

export default Contact;
