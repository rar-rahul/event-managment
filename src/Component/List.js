import React, { useContext } from 'react';
import Card from './Card';
import { EventContext } from '../Context/ContextProvider';
const List = () => {
  const { eventdata } = useContext(EventContext);
  return (
    <>
      <div className="container mx-auto mt-2 py-3">
        <h1 className="text-3xl font-bold text-center my-8">Event List</h1>
        <div className="flex flex-wrap -mx-4">
          {eventdata && eventdata.length > 0 ? (
            eventdata.map((event) => (
              <div className="w-full md:w-1/4 xl:w-1/4 p-4" key={event.id}>
                <Card data={event} />
              </div>
            ))
          ) : (
            <div className="w-full p-4 py-10 text-center mt-12 text-gray-500">
              <h2>Events not Added please login and create a Events !</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default List;
