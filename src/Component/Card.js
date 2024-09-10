import React, { useCallback, useContext, useEffect, useReducer, useState } from 'react';
import { reducer } from '../Reducer/reducer';
import { EventContext } from '../Context/ContextProvider';
import EditEventForm from './EditEventForm';
import { Link, useNavigate } from 'react-router-dom';
const Card = (props) => {
  const { eventdata, setEventData, isLoggedIn } = useContext(EventContext);
  const [data, dispatch] = useReducer(reducer, eventdata);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleRemove = (e) => {
    dispatch({ type: 'REMOVEEVENT', payload: e.target.value });
  };

  const handleEdit = (e) => {
    setIsEditing(true);
  };

  const handleCancel = useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleUpdate = useCallback((updatedData) => {
    dispatch({ type: 'EVENTUPDATE', payload: updatedData });
    setIsEditing(false);
  }, []);

  const handleViewDetail = () => {
    navigate('/eventdetail', { state: { event: props.data } });
  };

  //Set data to context store using function
  useEffect(() => {
    setEventData(data);
    console.log(data);
  }, [data]);

  return (
    <>
      {isEditing ? (
        <EditEventForm event={props.data} onCancel={handleCancel} onUpdate={handleUpdate} />
      ) : (
        <>
          <div className="max-w-sm mx-auto mb-4 overflow-hidden rounded-lg shadow-md">
            <div className="px-6 py-4">
              <h2 className="text-lg font-bold mb-2">{props.data.title}</h2>
              <p className="text-gray-600 text-sm mb-2">Date: {props.data.eventDate}</p>
              <p className="text-gray-600 text-sm mb-2">Time: {props.data.eventTime}</p>
              <p className="text-gray-600">Location: {props.data.eventLocation}</p>

              <p className="text-gray-600">Description: {props.data.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button
                onClick={handleViewDetail}
                value={props.data.title}
                className="bg-green-500 hover:bg-red-700 text-white font-bold ml-1 py-2 px-1 rounded"
              >
                View
              </button>
              {isLoggedIn && (
                <>
                  <button
                    onClick={handleRemove}
                    value={props.data.title}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold ml-5 py-2 px-1 rounded"
                  >
                    Remove
                  </button>

                  <button
                    onClick={handleEdit}
                    value={props.data.title}
                    className="bg-blue-500 hover:bg-red-700 text-white font-bold ml-5 py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Card;
