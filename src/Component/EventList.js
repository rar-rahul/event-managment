import React, { useEffect, useState } from 'react';

const EventList = ({ events }) => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{event.title}</h2>
                <p className="text-gray-600">{event.body}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventList;
