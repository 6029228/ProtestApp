import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000'
});

export const fetchProtest = async (id) => {
  if (!id) throw new Error('Protest ID is required');
  
  const response = await api.get(`/api/protests/${id}`);
  return response.data;
};

export const createProtest = async (protestData) => {
  const response = await api.post('/api/protests', protestData);
  return response.data;
}; 