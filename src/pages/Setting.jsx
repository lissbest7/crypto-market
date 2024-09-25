import React, { useState } from 'react';

function Settings() {
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
    <div className='py-[28px] rounded-lg py-20 w-1/2 mx-auto h-300'>
      <h2 className='text-3xl font-bold text-center text-purple-700 mb-6'>Settings</h2>

      <div className='max-w-lg mx-auto space-y-4'>
        <div>
          <button
            className='flex justify-between w-full text-left bg-white shadow-md p-4 rounded-md hover:bg-gray-100 transition duration-300'
            onClick={() => toggleSection('account')}
          >
            <span className='text-purple-600 font-semibold'>Account Settings</span>
            <span>{activeSection === 'account' ? '-' : '+'}</span>
          </button>
          {activeSection === 'account' && (
            <div className='mt-2 p-4 bg-purple-50 rounded-md'>
              <ul className='list-disc ml-5 space-y-2'>
                <li>
                  <button
                    onClick={() => openForm('changePassword')}
                    className='text-blue-600 font-semibold'
                  >
                    Change Password
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openForm('updateEmail')}
                    className='text-blue-600 font-semibold'
                  >
                    Update Email
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openForm('twoFactorAuth')}
                    className='text-blue-600 font-semibold'
                  >
                    Two-Factor Authentication
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div>
          <button
            className='flex justify-between w-full text-left bg-white shadow-md p-4 rounded-md hover:bg-gray-100 transition duration-300'
            onClick={() => toggleSection('notifications')}
          >
            <span className='text-purple-600 font-semibold'>Notification Settings</span>
            <span>{activeSection === 'notifications' ? '-' : '+'}</span>
          </button>
          {activeSection === 'notifications' && (
            <div className='mt-2 p-4 bg-purple-50 rounded-md'>
              <ul className='list-disc ml-5 space-y-2'>
                <li>
                  <button
                    onClick={() => openForm('emailNotifications')}
                    className='text-blue-600 font-semibold'
                  >
                    Email Notifications
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openForm('smsNotifications')}
                    className='text-blue-600 font-semibold'
                  >
                    SMS Notifications
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openForm('appNotifications')}
                    className='text-blue-600 font-semibold'
                  >
                    App Notifications
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

      </div>

      {formContent && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-5 rounded-md shadow-lg'>
            {formContent === 'changePassword' && (
              <>
                <h3 className='text-lg font-semibold mb-4 text-purple-700'>Change Password</h3>
                <form>
                  <div className='mb-2'>
                    <label className='block mb-1'>New Password</label>
                    <input type='password' className='border p-2 w-full rounded' required />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-1'>Confirm Password</label>
                    <input type='password' className='border p-2 w-full rounded' required />
                  </div>
                  <button type='submit' className='mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition'>
                    Save
                  </button>
                </form>
              </>
            )}
            {formContent === 'updateEmail' && (
              <>
                <h3 className='text-lg font-semibold mb-4 text-purple-700'>Update Email</h3>
                <form>
                  <div className='mb-2'>
                    <label className='block mb-1'>New Email</label>
                    <input type='email' className='border p-2 w-full rounded' required />
                  </div>
                  <button type='submit' className='mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition'>
                    Save
                  </button>
                </form>
              </>
            )}
            {formContent === 'twoFactorAuth' && (
              <>
                <h3 className='text-lg font-semibold mb-4 text-purple-700'>Two-Factor Authentication</h3>
                <p>Enable or disable two-factor authentication.</p>
                <button className='mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition'>
                  Toggle Two-Factor Authentication
                </button>
              </>
            )}
            {formContent === 'emailNotifications' && (
              <>
                <h3 className='text-lg font-semibold mb-4 text-purple-700'>Email Notifications</h3>
                <p>Manage your email notification settings.</p>
                <button className='mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition'>
                  Save Changes
                </button>
              </>
            )}
            {formContent === 'smsNotifications' && (
              <>
                <h3 className='text-lg font-semibold mb-4 text-purple-700'>SMS Notifications</h3>
                <p>Manage your SMS notification settings.</p>
                <button className='mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition'>
                  Save Changes
                </button>
              </>
            )}
            {formContent === 'appNotifications' && (
              <>
                <h3 className='text-lg font-semibold mb-4 text-purple-700'>App Notifications</h3>
                <p>Manage your app notification settings.</p>
                <button className='mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition'>
                  Save Changes
                </button>
              </>
            )}
            <button className='mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition' onClick={closeForm}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
