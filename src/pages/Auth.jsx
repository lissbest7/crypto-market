import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  
  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-80">
        {isLogin ? (
          <form onSubmit={handleSubmit}>
            <h2 className="text-lg font-bold mb-4">Login</h2>
            <input className="border p-2 mb-4 w-full" type="text" placeholder="Username" required />
            <input className="border p-2 mb-4 w-full" type="password" placeholder="Password" required />
            <button className="bg-blue-500 text-white p-2 w-full rounded">Login</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-lg font-bold mb-4">Register</h2>
            <input className="border p-2 mb-4 w-full" type="text" placeholder="Full Name" required />
            <input className="border p-2 mb-4 w-full" type="number" placeholder="Age" required />
            <input className="border p-2 mb-4 w-full" type="email" placeholder="Email" required />
            <input className="border p-2 mb-4 w-full" type="password" placeholder="Password" required />
            <button className="bg-blue-500 text-white p-2 w-full rounded">Register</button>
          </form>
        )}
        <button className="mt-4 text-blue-500" onClick={toggleForm}>
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
