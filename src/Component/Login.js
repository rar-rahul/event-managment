import React, { useContext, useEffect, useReducer, useState } from 'react';
import { reducer } from '../Reducer/reducer';
import { EventContext } from '../Context/ContextProvider';
import { useNavigate } from 'react-router-dom';

const initialState = {
  loggedUser: '',
  token: '',
};
const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });
  const [userState, dispatch] = useReducer(reducer, initialState);
  const { setIsLoggedIn, setUserData, userData } = useContext(EventContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = loginUser;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
    }

    setIsLoggedIn(true);

    setLoginUser({ email: '', password: '' });
  };

  useEffect(() => {
    if (userState.loggedUser) {
      setUserData(userState);
      navigate('/');
    }
  }, [userState, navigate, setUserData]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={loginUser.email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              required
              onChange={handleChange}
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
              required
              value={loginUser.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              LogIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
