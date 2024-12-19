import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProtest } from '../lib/api';

function ProtestDetail() {
  const { id } = useParams();
  const [protest, setProtest] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProtest = async () => {
      try {
        const data = await fetchProtest(id);
        setProtest(data);
      } catch (err) {
        setError('Failed to load protest details');
      }
    };
    loadProtest();
  }, [id]);

  if (error) return <div className="error">{error}</div>;
  if (!protest) return <div>Loading...</div>;

  return (
    <div className="protest-detail">
      <h1>{protest.title}</h1>
      <p>{protest.description}</p>
      <div className="protest-info">
        <p>Location: {protest.location}</p>
        <p>Date: {new Date(protest.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default ProtestDetail; 