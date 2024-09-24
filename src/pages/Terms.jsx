import React, { useState } from 'react';

function Terms() {
  const [open, setOpen] = useState(false);

  const toggleTerms = () => {
    setOpen(!open);
  };

  return (
    <div className='py-6 px-4 md:px-8 lg:px-12'>
      <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">Terms of Service</h2>
      <button onClick={toggleTerms} className="bg-blue-500 text-white px-4 py-2 rounded">
        {open ? 'Hide Terms' : 'Show Terms'}
      </button>
      {open && (
        <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded">
          <p className="text-gray-700 dark:text-gray-300">
            Welcome to our Terms of Service. These terms govern your use of our services. By accessing or using our services, you agree to be bound by these terms.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <strong>1. Acceptance of Terms:</strong> By using our services, you confirm that you accept these terms and agree to comply with them.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <strong>2. Changes to Terms:</strong> We reserve the right to modify these terms at any time. It is your responsibility to review these terms periodically.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <strong>3. User Responsibilities:</strong> You agree to use our services in compliance with applicable laws and regulations. Any misuse of the services is strictly prohibited.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <strong>4. Limitation of Liability:</strong> Our liability is limited to the fullest extent permitted by law. We are not responsible for any indirect or consequential damages arising from your use of our services.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <strong>5. Governing Law:</strong> These terms are governed by the laws of the jurisdiction in which we operate.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            If you have any questions about these terms, please contact us through our support center.
          </p>
        </div>
      )}
    </div>
  );
}

export default Terms;
