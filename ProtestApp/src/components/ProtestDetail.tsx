import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchProtest, Protest } from '../lib/api';

const ProtestDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [protest, setProtest] = React.useState<Protest | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
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
};

export default ProtestDetail; 