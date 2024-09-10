import React, { useContext, useEffect, useRef, useState } from 'react';
import { useReducer } from 'react';
import { reducer } from '../Reducer/reducer';
import { EventContext } from '../Context/ContextProvider';
import { useNavigate } from 'react-router-dom';

const initialValue = {
  id: Math.round(Math.random() * 10),
  title: '',
  eventDate: '',
  eventTime: '',
  eventLocation: '',
  description: '',
};

const Form = () => {
  const { eventdata, setEventData } = useContext(EventContext);
  const [data, dispatch] = useReducer(reducer, eventdata);
  const [formData, setFormData] = useState(initialValue);
  const [isSubmited, setIsSubmited] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();
  const dataId = `${Date.now()}-${Math.round(Math.random() * 10000)}`;

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADDEVENT', payload: formData });
    setIsSubmited(true);
    formRef.current.reset();
  };

  //Set data to context store using function
  useEffect(() => {
    setEventData(data);
    if (isSubmited) {
      navigate('/events');
    }
  }, [data]);

  return (
    <div>
      <div className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 mt-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add Event Details</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="event-name">
              Event Name
            </label>
            <input type="hidden" value={`${Math.round(Math.random() * 1000)}`} name="id" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="event-name"
              name="title"
              type="text"
              placeholder="Enter event name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="event-date">
              Event Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="event-date"
              type="date"
              name="eventDate"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="event-time">
              Event Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="event-time"
              type="time"
              name="eventTime"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="event-location">
              Event Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="event-location"
              type="text"
              placeholder="Enter event location"
              name="eventLocation"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="event-description"
            >
              Event Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="event-description"
              placeholder="Enter event description"
              defaultValue={''}
              name="description"
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
