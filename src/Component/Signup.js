import React, { useContext, useReducer, useRef, useState } from 'react';
import { EventContext } from '../Context/ContextProvider';
import { reducer } from '../Reducer/reducer';
import { useNavigate } from 'react-router-dom';

const initialFormData = {
  username: '',
  email: '',
  password: '',
};
const Signup = () => {
  const { userData, setUserData } = useContext(EventContext);
  const [signupData, setSignupData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let genToken = 'token' + Math.random().toString(24).substring(2) + Date.now().toString(24);
    let updatedUser = { ...signupData, token: genToken };
    setUserData(updatedUser);
    let existUsers = JSON.parse(localStorage.getItem('users')) || [];
    existUsers.push(updatedUser);
    localStorage.setItem('users', JSON.stringify(existUsers));

    setSuccessMessage('You have successfully registered!');
    formRef.current.reset();
    setIsSubmitting(false);
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        {successMessage && (
          <div className="bg-green-100 text-green-700 p-2 rounded mb-4">{successMessage}</div>
        )}
        <form onSubmit={handleSignup} ref={formRef}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {isSubmitting ? 'Signing up...' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
