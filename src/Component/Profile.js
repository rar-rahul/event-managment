import React, { useContext } from 'react';
import { EventContext } from '../Context/ContextProvider';
const Profile = () => {
  const { userData } = useContext(EventContext);
  return (
    <div className="container mx-auto p-4 mt-10 py-10">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-cover bg-center h-40"></div>
        <div className="p-6">
          <div className="text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto border-4 border-white -mt-12"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              {userData.loggedUser?.email || ''}
            </h2>
            <p className="text-gray-600">{userData.loggedUser?.username || ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
