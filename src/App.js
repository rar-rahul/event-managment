import './App.css';
import List from './Component/List';
import Navbar from './Component/Navbar';
import Form from './Component/Form';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ContextProvider } from './Context/ContextProvider';
import { useContext } from 'react';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Profile from './Component/Profile';
import Home from './Component/Home';
import Footer from './Component/Footer';
import EventDetail from './Component/EventDetail';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/events" element={<List />} />
          <Route exact path="/addevent" element={<Form />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/eventdetail" element={<EventDetail />} />
        </Routes>
        <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
