import axios from 'axios';

export interface Protest {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000'
});

export const fetchProtest = async (id: string | undefined): Promise<Protest> => {
  if (!id) throw new Error('Protest ID is required');
  
  const response = await api.get<Protest>(`/api/protests/${id}`);
  return response.data;
};

export const createProtest = async (protestData: Omit<Protest, 'id'>): Promise<Protest> => {
  const response = await api.post<Protest>('/api/protests', protestData);
  return response.data;
}; 
