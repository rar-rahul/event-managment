import React from 'react';
import { useLocation } from 'react-router-dom';

const EventDetail = () => {
  const location = useLocation();
  const { event } = location.state || {}; // Destructure state to get the event object

  if (!event) {
    return <p className="text-center text-gray-500">No event data available.</p>;
  }

  return (
    <div className="container mx-auto p-4 mt-10 py-10">
      <div className="bg-white shadow-md rounded-lg p-6 mt-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{event.title}</h1>
        <p className="text-lg text-gray-600 mb-2">
          <strong>Date:</strong> {event.eventDate}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <strong>Time:</strong> {event.eventTime}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <strong>Location:</strong> {event.eventLocation}
        </p>
        <p className="text-lg text-gray-600 mb-4">
          <strong>Description:</strong> {event.description}
        </p>

        {/* Add more event details if needed */}
        <div className="mt-4">
          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
