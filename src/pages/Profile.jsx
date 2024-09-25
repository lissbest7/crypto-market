import React, { useState } from 'react';

function Profile() {
  const [activeSection, setActiveSection] = useState(null);
  const [formContent, setFormContent] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const openForm = (formType) => {
    setFormContent(formType);
  };

  const closeForm = () => {
    setFormContent(null);
  };

  return (
    <div className='py-20 flex flex-col items-center'>
      <h2 className="text-gray-800 dark:text-white text-3xl font-bold mb-6">Profile</h2>
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 w-1/2">
        <h3 className="text-xl font-semibold">User Information</h3>
        <p className="mt-2 text-gray-700"><strong>Name:</strong> Vahid Sharifzade</p>
        <p className="mt-2 text-gray-700"><strong>Email:</strong> vahidsrifzad@gmail.com</p>
        <p className="mt-2 text-gray-700"><strong>Account Balance:</strong> $4147</p>
      </div>

      <div className="mt-8 w-1/2">
        <h3 className="text-gray-800 dark:text-white text-xl font-semibold">Manage Profile</h3>
        <div className="space-y-4 mt-4">
          <button
            className='w-full text-left bg-gray-200 hover:bg-gray-300 p-4 rounded-md focus:outline-none transition duration-200'
            onClick={() => toggleSection('editProfile')}
          >
            Edit Profile
          </button>
          {activeSection === 'editProfile' && (
            <div className='mt-2 p-4 bg-gray-100 rounded-md'>
              <button
                onClick={() => openForm('editName')}
                className='text-blue-600 hover:underline'
              >
                Change Name
              </button>
              <button
                onClick={() => openForm('editEmail')}
                className='text-blue-600 hover:underline ml-4'
              >
                Change Email
              </button>
              <button
                onClick={() => openForm('changePassword')}
                className='text-blue-600 hover:underline ml-4'
              >
                Change Password
              </button>
            </div>
          )}
        </div>
      </div>

      {formContent && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-md shadow-lg w-1/3'>
            {formContent === 'editName' && (
              <>
                <h3 className='text-lg font-semibold mb-4'>Change Name</h3>
                <form>
                  <div className='mb-2'>
                    <label className='block mb-1'>New Name</label>
                    <input type='text' className='border p-2 w-full rounded-md' required />
                  </div>
                  <button type='submit' className='mt-4 px-4 py-2 bg-blue-600 text-white rounded'>
                    Save
                  </button>
                </form>
              </>
            )}
            {formContent === 'editEmail' && (
              <>
                <h3 className='text-lg font-semibold mb-4'>Change Email</h3>
                <form>
                  <div className='mb-2'>
                    <label className='block mb-1'>New Email</label>
                    <input type='email' className='border p-2 w-full rounded-md' required />
                  </div>
                  <button type='submit' className='mt-4 px-4 py-2 bg-blue-600 text-white rounded'>
                    Save
                  </button>
                </form>
              </>
            )}
            {formContent === 'changePassword' && (
              <>
                <h3 className='text-lg font-semibold mb-4'>Change Password</h3>
                <form>
                  <div className='mb-2'>
                    <label className='block mb-1'>New Password</label>
                    <input type='password' className='border p-2 w-full rounded-md' required />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-1'>Confirm Password</label>
                    <input type='password' className='border p-2 w-full rounded-md' required />
                  </div>
                  <button type='submit' className='mt-4 px-4 py-2 bg-blue-600 text-white rounded'>
                    Save
                  </button>
                </form>
              </>
            )}
            <button className='mt-4 px-4 py-2 bg-red-600 text-white rounded' onClick={closeForm}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
