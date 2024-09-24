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
    <div className='py-[28px]'>
      <h2 className='text-2xl font-semibold mb-4'>Settings</h2>

      <div className='space-y-4'>
        <div>
          <button
            className='flex justify-between w-full text-left bg-gray-200 p-4 rounded-md focus:outline-none'
            onClick={() => toggleSection('account')}
          >
            <span>Account Settings</span>
            <span>{activeSection === 'account' ? '-' : '+'}</span>
          </button>
          {activeSection === 'account' && (
            <div className='mt-2 p-4 bg-gray-100 rounded-md'>
              <ul className='list-disc ml-5'>
                <li>
                  <button
                    onClick={() => openForm('changePassword')}
                    className='text-blue-600'
                  >
                    Change Password
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openForm('updateEmail')}
                    className='text-blue-600'
                  >
                    Update Email
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openForm('twoFactorAuth')}
                    className='text-blue-600'
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
            className='flex justify-between w-full text-left bg-gray-200 p-4 rounded-md focus:outline-none'
            onClick={() => toggleSection('notifications')}
          >
            <span>Notification Settings</span>
            <span>{activeSection === 'notifications' ? '-' : '+'}</span>
          </button>
          {activeSection === 'notifications' && (
            <div className='mt-2 p-4 bg-gray-100 rounded-md'>
              <ul className='list-disc ml-5'>
                <li>
                  <button
                    onClick={() => openForm('emailNotifications')}
                    className='text-blue-600'
                  >
                    Email Notifications
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openForm('smsNotifications')}
                    className='text-blue-600'
                  >
                    SMS Notifications
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openForm('appNotifications')}
                    className='text-blue-600'
                  >
                    App Notifications
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Diğer bölümler... */}
      </div>

      {formContent && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-5 rounded-md shadow-lg'>
            {formContent === 'changePassword' && (
              <>
                <h3 className='text-lg font-semibold mb-4'>Change Password</h3>
                <form>
                  <div className='mb-2'>
                    <label className='block mb-1'>New Password</label>
                    <input type='password' className='border p-2 w-full' required />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-1'>Confirm Password</label>
                    <input type='password' className='border p-2 w-full' required />
                  </div>
                  <button type='submit' className='mt-4 px-4 py-2 bg-blue-600 text-white rounded'>
                    Save
                  </button>
                </form>
              </>
            )}
            {formContent === 'updateEmail' && (
              <>
                <h3 className='text-lg font-semibold mb-4'>Update Email</h3>
                <form>
                  <div className='mb-2'>
                    <label className='block mb-1'>New Email</label>
                    <input type='email' className='border p-2 w-full' required />
                  </div>
                  <button type='submit' className='mt-4 px-4 py-2 bg-blue-600 text-white rounded'>
                    Save
                  </button>
                </form>
              </>
            )}
            {formContent === 'twoFactorAuth' && (
              <>
                <h3 className='text-lg font-semibold mb-4'>Two-Factor Authentication</h3>
                <p>Enable or disable two-factor authentication.</p>
                <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded'>
                  Toggle Two-Factor Authentication
                </button>
              </>
            )}
            {formContent === 'emailNotifications' && (
              <>
                <h3 className='text-lg font-semibold mb-4'>Email Notifications</h3>
                <p>Manage your email notification settings.</p>
                <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded'>
                  Save Changes
                </button>
              </>
            )}
            {formContent === 'smsNotifications' && (
              <>
                <h3 className='text-lg font-semibold mb-4'>SMS Notifications</h3>
                <p>Manage your SMS notification settings.</p>
                <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded'>
                  Save Changes
                </button>
              </>
            )}
            {formContent === 'appNotifications' && (
              <>
                <h3 className='text-lg font-semibold mb-4'>App Notifications</h3>
                <p>Manage your app notification settings.</p>
                <button className='mt-4 px-4 py-2 bg-blue-600 text-white rounded'>
                  Save Changes
                </button>
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

export default Settings;
