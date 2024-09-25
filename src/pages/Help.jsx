import React from 'react';
import { Link } from 'react-router-dom';

function Help() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button on the homepage and fill in your details."
    },
    {
      question: "How can I reset my password?",
      answer: "Click on 'Forgot Password?' on the login page, enter your email, and follow the instructions sent to your inbox."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit cards, debit cards, and various cryptocurrencies."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact customer support through the 'Contact Us' section or email us at support@example.com."
    },
    {
      question: "Where can I find tutorials?",
      answer: "You can find tutorials in the 'Resources' section of our website."
    },
  ];

  return (
    <div className='py-6 px-4 md:px-8 lg:px-12'>
      <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">Help</h2>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 md:p-6">
        <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-2 mb-2">
              <h4 className="font-semibold cursor-pointer">{faq.question}</h4>
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Additional Resources</h3>
        <ul className="list-disc ml-5">
          <li><Link to="/support" className="text-blue-500">Support Center</Link></li>
          <li><Link to="/tutorials" className="text-blue-500">Tutorials</Link></li>
          <li><Link to="/contact" className="text-blue-500">Contact Us</Link></li>
          <li><Link to="/terms" className="text-blue-500">Terms of Service</Link></li>
          <li><Link to="/privacy" className="text-blue-500">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Help;
