import React, { useState } from 'react';

function Privacy() {
  const [open, setOpen] = useState(false);

  const togglePrivacy = () => {
    setOpen(!open);
  };

  return (
    <div className='py-6 px-4 md:px-8 lg:px-12'>
      <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">Privacy Policy</h2>
      <button onClick={togglePrivacy} className="bg-blue-500 text-white px-4 py-2 rounded">
        {open ? 'Hide Privacy Policy' : 'Show Privacy Policy'}
      </button>
      {open && (
        <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded">
          <p className="text-gray-700 dark:text-gray-300">
            Your privacy is important to us. This privacy policy explains how we collect, use, and share information about you when you use our services.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <strong>1. Information We Collect:</strong> We collect information that you provide directly to us, such as your name, email address, and any other information you choose to provide.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <strong>2. How We Use Your Information:</strong> We use the information we collect to provide and improve our services, communicate with you, and personalize your experience.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <strong>3. Sharing Your Information:</strong> We do not share your personal information with third parties except as required by law or with your consent.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <strong>4. Security:</strong> We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <strong>5. Changes to This Policy:</strong> We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            If you have any questions about our privacy policy, please contact us.
          </p>
        </div>
      )}
    </div>
  );
}

export default Privacy;
