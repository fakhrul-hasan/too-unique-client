import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const ModalLoginForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <button className="bg-[#ff8c98] hover:bg-white text-white hover:text-[#ff8c98] border-2 border-[#ff8c98] hover:border-[#ff8c98] font-bold py-2 px-4 rounded" onClick={toggleModal}>
        Login / Registration
      </button>

      {showModal && (
        <div className="fixed z-20 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
              {/* Close Button */}
              <div className="flex justify-end pt-4 pr-4">
                <button className="text-[#ff8c98] hover:text-gray-800" onClick={toggleModal}>
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 10-1.414-1.414L12 10.586 6.707 5.293z"
                    />
                  </svg>
                </button>
              </div>

              {/* Tabs */}
              <div className="flex justify-center">
                <div className="flex">
                  <button
                    className={`px-4 py-2 ${
                      activeTab === 'login' ? 'bg-[#ff8c98] text-white font-semibold rounded-t-lg' : 'bg-gray-300 font-semibold rounded-t-lg'
                    }`}
                    onClick={() => handleTabChange('login')}
                  >
                    Log In
                  </button>
                  <button
                    className={`px-4 py-2 ${
                      activeTab === 'signup' ? 'bg-[#ff8c98] text-white font-semibold rounded-t-lg' : 'bg-gray-300 font-semibold rounded-t-lg'
                    }`}
                    onClick={() => handleTabChange('signup')}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-4">
                {/* Login Form */}
                {activeTab === 'login' && (
                  <div>
                    <label htmlFor="login-email" className="block font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input name="email" type="email" className="w-full border-gray-300 rounded px-3 py-2" />

                    <label htmlFor="login-password" className="block font-medium text-gray-700 mb-1 mt-3">
                      Password
                    </label>
                    <input name="password" type="password" className="w-full border-gray-300 rounded px-3 py-2" />
                    <p>No Account? <Link className='text-[#ff8c98]'>Create One</Link></p>

                    <button className="bg-[#ff8c98] hover:bg-white text-white hover:text-[#ff8c98] border-2 border-[#ff8c98] hover:border-[#ff8c98] font-bold py-2 px-4 rounded mt-4 w-full">
                      Log In
                    </button>
                    <div className="divider">OR</div>
                    <FaGoogle className='mx-auto border-transparent text-3xl p-1 rounded-full bg-[#ff8c98] text-white'/>
                  </div>
                )}

                {/* Sign Up Form */}
                {activeTab === 'signup' && (
                  <div>
                    <label htmlFor="signup-name" className="block font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input name="name" type="text" className="w-full border-gray-300 rounded px-3 py-2" />

                    <label htmlFor="signup-email" className="block font-medium text-gray-700 mb-1 mt-3">
                      Email
                    </label>
                    <input name="email" type="email" className="w-full border-gray-300 rounded px-3 py-2" />

                    <label htmlFor="signup-password" className="block font-medium text-gray-700 mb-1 mt-3">
                      Password
                    </label>
                    <input name="password" type="password" className="w-full border-gray-300 rounded px-3 py-2" />
                    <label htmlFor="photo-url" className="block font-medium text-gray-700 mb-1 mt-3">
                      Photo URL
                    </label>
                    <input name="photo" type="text" className="w-full border-gray-300 rounded px-3 py-2" />
                    <p>Already have an account? <Link className='text-[#ff8c98]'>Log in</Link></p>
                    <button className="bg-[#ff8c98] hover:bg-white text-white hover:text-[#ff8c98] border-2 border-[#ff8c98] hover:border-[#ff8c98] font-bold py-2 px-4 rounded mt-4 w-full">
                      Sign Up
                    </button>
                    <div className="divider">OR</div>
                    <FaGoogle className='mx-auto border-transparent text-3xl p-1 rounded-full bg-[#ff8c98] text-white'/>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLoginForm;
