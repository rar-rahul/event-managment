import { createContext, useState } from 'react';

const EventContext = createContext();

const ContextProvider = ({ children }) => {
  const [eventdata, setEventData] = useState([]);
  const [userData, setUserData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = {
    eventdata,
    setEventData,
    userData,
    setUserData,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>;
};

export { EventContext, ContextProvider };
