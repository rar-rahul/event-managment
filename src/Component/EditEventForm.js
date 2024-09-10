import React, { useState } from 'react';

const EditEventForm = ({ onCancel, event, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: event.title,
    eventDate: event.eventDate,
    eventTime: event.eventTime,
    eventLocation: event.eventLocation,
    description: event.description,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div>
      <div className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 mt-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Edit Event Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="event-name">
              Event Name
            </label>
            <input type="hidden" value={formData.id} name="id" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="event-name"
              name="title"
              type="text"
              value={formData.title}
              placeholder="Update event name"
              onChange={handleChange}
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
              value={formData.eventDate}
              name="eventDate"
              onChange={handleChange}
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
              value={formData.eventTime}
              name="eventTime"
              onChange={handleChange}
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
              value={formData.eventLocation}
              placeholder="Enter event location"
              name="eventLocation"
              onChange={handleChange}
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
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-green-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Update Event
          </button>

          <button
            className="bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 ml-5 px-4 rounded"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEventForm;
