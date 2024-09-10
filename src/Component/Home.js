import React, { lazy, Suspense, useEffect, useState } from 'react';
const EventList = lazy(() => import('../Component/EventList'));
const Home = () => {
  const [mockevent, setMockEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await response.json();
        setMockEvent(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center my-8">Event List</h1>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <EventList events={mockevent} />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
