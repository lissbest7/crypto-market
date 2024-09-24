import React, { useState } from 'react';

function Tutorials() {
  const [openIndex, setOpenIndex] = useState(null);
  const tutorials = [
    {
      title: "Getting Started",
      content: "Learn how to create an account and get started with our platform. This tutorial covers the basics of signing up and navigating the user interface."
    },
    {
      title: "Trading Basics",
      content: "Understand the basics of trading and how to execute your first trade. We will go through the trading dashboard and how to place buy and sell orders."
    },
    {
      title: "Advanced Trading Strategies",
      content: "Explore advanced strategies to maximize your trading potential. This includes technical analysis, reading charts, and understanding market trends."
    },
    {
      title: "Using Our App",
      content: "A comprehensive guide on how to use our mobile app for trading on the go. You'll learn about notifications, quick trades, and account management."
    },
    {
      title: "Customer Support",
      content: "Learn how to effectively use our customer support resources, including FAQs, live chat, and ticket submission."
    }
  ];

  const toggleContent = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='py-6 px-4 md:px-8 lg:px-12'>
      <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">Tutorials</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Explore our tutorials to enhance your trading skills and make the most of our platform. 
        Each tutorial is designed to provide you with valuable insights and practical knowledge.
      </p>
      {tutorials.map((tutorial, index) => (
        <div key={index} className="mb-4">
          <button 
            onClick={() => toggleContent(index)} 
            className="bg-blue-500 text-white px-4 py-2 rounded w-full text-left">
            {tutorial.title}
          </button>
          {openIndex === index && (
            <div className="mt-2 bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <p className="text-gray-700 dark:text-gray-300">{tutorial.content}</p>
            </div>
          )}
        </div>
      ))}
      <p className="text-gray-700 dark:text-gray-300 mt-4">
        We hope these tutorials help you become proficient in using our services. Don't hesitate to reach out if you have any questions!
      </p>
    </div>
  );
}

export default Tutorials;
