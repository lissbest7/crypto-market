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
      <h2 className="text-blue-800 dark:text-white text-3xl font-bold mb-4">Help</h2>
      <div className="bg-gradient-to-r from-blue-200 to-blue-400 shadow-lg rounded-lg p-4 md:p-6">
        <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-2 mb-2">
              <h4 className="text-blue-700 font-semibold cursor-pointer">{faq.question}</h4>
              <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3">Additional Resources</h3>
        <ul className="list-disc ml-5 space-y-6">
          <li>
            <Link 
              to="/support" 
              className="text-white bg-blue-400 hover:bg-blue-600 transition duration-300 p-3 rounded-full shadow-md font-bold">
              Support Center
            </Link>
          </li>
          <li>
            <Link 
              to="/tutorials" 
               className="text-white bg-blue-400 hover:bg-blue-600 transition duration-300 p-3 rounded-full shadow-md font-bold">
              Tutorials
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
               className="text-white bg-blue-400 hover:bg-blue-600 transition duration-300 p-3 rounded-full shadow-md font-bold">
              Contact Us
            </Link>
          </li>
          <li>
            <Link 
              to="/terms" 
              className="text-white bg-blue-400 hover:bg-blue-600 transition duration-300 p-3 rounded-full shadow-md font-bold">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link 
              to="/privacy" 
              className="text-white bg-blue-400 hover:bg-blue-600 transition duration-300 p-3 rounded-full shadow-md font-bold">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Help;
